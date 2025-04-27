import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-white/30 backdrop-blur-md shadow-md flex justify-between items-center px-8 py-4">
      <h1
        onClick={() => navigate("/")}
        className="text-2xl font-extrabold text-primary"
      >
        NestoraPrep
      </h1>
      <button
        onClick={() => navigate("/select-role")}
        className="bg-primary text-white font-bold px-5 py-2 rounded-full hover:bg-primary-dark transform hover:scale-105 transition-all duration-300"
      >
        Start
      </button>
    </nav>
  );
};

export default Navbar;
