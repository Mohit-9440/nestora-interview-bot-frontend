import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { getInterviewQuestions } from "../services/api";
import Loader from "../components/Loader";
import QuestionCard from "../components/QuestionCard";

const Quiz = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const role = searchParams.get("role") || "";

  const [questions, setQuestions] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      if (!role) {
        navigate("/");
        return;
      }

      try {
        const res = await getInterviewQuestions(role);
        setQuestions(res.data.questions);
      } catch (error) {
        console.error(error);
        alert("Failed to load questions. Please try again.");
        navigate("/");
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [role, navigate]);

  if (loading) {
    return <Loader />;
  }

  if (!questions.length) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl font-bold text-primary mb-4">
          No Questions Found.
        </h2>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition"
        >
          Go Back Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-white to-background">
      <Navbar />
      <div className="mt-16 flex-grow flex flex-col items-center p-6 text-center">
        <h1
          className="text-4xl font-extrabold text-primary mb-8 drop-shadow-md"
          data-aos="fade-up"
        >
          {role} Interview Questions
        </h1>

        <div className="grid grid-cols-1 gap-6 w-full max-w-4xl">
          {questions.map((question, idx) => (
            <QuestionCard key={idx} index={idx + 1} question={question} />
          ))}
        </div>
      </div>

      <footer className="text-center text-gray-400 text-sm py-6">
        © {new Date().getFullYear()} NestoraPrep. Powered by React + OpenAI.
      </footer>
    </div>
  );
};

export default Quiz;
