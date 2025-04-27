interface QuestionCardProps {
  index: number;
  question: string;
}

const QuestionCard = ({ index, question }: QuestionCardProps) => {
  return (
    <div
      className="bg-white/60 backdrop-blur-lg p-6 rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-primary text-left"
      data-aos="fade-up"
    >
      <h2 className="text-xl font-bold text-darkslate mb-2">
        {index}. {question}
      </h2>
    </div>
  );
};

export default QuestionCard;
