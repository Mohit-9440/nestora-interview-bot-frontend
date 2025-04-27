import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { getInterviewQuestions } from "../services/api";
import Loader from "../components/Loader";
import QuestionCard from "../components/QuestionCard";

const Quiz = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const role = searchParams.get("role") || "";

  const [questions, setQuestions] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await getInterviewQuestions(role);
        setQuestions(res.data.questions);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (role) {
      fetchQuestions();
    }
  }, [role]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex flex-col items-center flex-grow p-6">
        <h1 className="text-3xl font-bold text-primary my-6 text-center drop-shadow-md">
          {role} Interview Questions
        </h1>

        <div className="w-full max-w-4xl space-y-6">
          {questions.map((question, idx) => (
            <QuestionCard key={idx} question={question} index={idx + 1} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;