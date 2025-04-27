import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between">
      <h1
        onClick={() => navigate('/')}
        className="text-indigo-600 font-extrabold text-2xl cursor-pointer"
      >
        NestoraPrep
      </h1>
      <button
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-bold"
        onClick={() => navigate('/select-role')}
      >
        Start New
      </button>
    </nav>
  );
};

export default Navbar;