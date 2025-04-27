interface QuestionCardProps {
    question: string;
    index: number;
  }
  
  const QuestionCard = ({ question, index }: QuestionCardProps) => {
    return (
      <div className="bg-white p-6 rounded-xl shadow-md border border-primary hover:shadow-lg transition">
        <h2 className="text-lg font-bold text-darkslate">
          {index}. {question}
        </h2>
      </div>
    );
  };
  
  export default QuestionCard;