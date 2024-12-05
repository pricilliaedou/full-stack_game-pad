import { useNavigate, Link } from "react-router-dom";

import Logo from "../assets/logo.png";

const Header = ({ token, setUser }) => {
  const navigate = useNavigate();

  return (
    <header className='flex justify-between items-center py-3 border-b-2 border-[#ff4655] px-6 mb-10'>
      <Link to={"/"} className='flex gap-2'>
        <img src={Logo} alt='logo Gamepad' className='w-7' />
        <p>Gamepad</p>
      </Link>
      {!token ? (
        <div className='flex justify-center items-center'>
          <button
            onClick={() => {
              navigate("/login");
            }}
            className='flex bg-[#ff4655] justify-center items-center py-1 px-2 rounded pointer'
          >
            Login
          </button>
        </div>
      ) : (
        <div className='flex justify-center items-center'>
          <button className='flex  justify-center items-center py-1 px-2 rounded pointer'>
            <p>My collection</p>
          </button>

          <button
            onClick={() => setUser(null)}
            className='flex bg-[#ff4655] justify-center items-center py-1 px-2 rounded pointer'
          >
            <p>Disconnect</p>
          </button>
        </div>
      )}
    </header>
  );
};
export default Header;
