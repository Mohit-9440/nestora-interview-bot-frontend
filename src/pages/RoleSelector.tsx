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
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-grow p-6">
        <h1 className="text-4xl font-extrabold text-primary mb-8 text-center drop-shadow-md">
          Select Your Role to Start 🚀
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
          {roles.map((role, idx) => (
            <div
              key={idx}
              className="cursor-pointer bg-white p-6 rounded-2xl shadow-md hover:shadow-lg border border-primary hover:bg-primary hover:text-white transition-all duration-300"
              onClick={() => handleSelectRole(role)}
            >
              <h2 className="text-2xl font-bold text-center">{role}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoleSelector;
