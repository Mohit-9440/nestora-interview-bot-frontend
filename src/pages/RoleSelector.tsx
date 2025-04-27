import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Fullstack Developer",
  "Data Engineer",
  "DevOps Engineer",
  "Product Manager",
];

const RoleSelector = () => {
  const navigate = useNavigate();

  const handleSelectRole = (role: string) => {
    navigate(`/quiz?role=${encodeURIComponent(role)}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-white to-background">
      <Navbar />

      <div className="flex-grow flex flex-col items-center justify-center p-6 text-center">
        <h1
          className="text-4xl font-extrabold text-primary mb-10"
          data-aos="fade-up"
        >
          Select Your Role 🚀
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
          {roles.map((role, idx) => (
            <div
              key={idx}
              onClick={() => handleSelectRole(role)}
              className="cursor-pointer bg-white/60 backdrop-blur-lg p-8 rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-primary hover:bg-primary hover:text-white font-semibold text-lg"
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            >
              {role}
            </div>
          ))}
        </div>
      </div>

      <footer className="text-center text-gray-400 text-sm py-6">
        © {new Date().getFullYear()} NestoraPrep. Powered by React + OpenAI.
      </footer>
    </div>
  );
};

export default RoleSelector;
