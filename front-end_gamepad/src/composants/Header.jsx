import { useNavigate } from "react-router-dom";

import Logo from "../assets/logo.png";

const Header = ({ token, setUser }) => {
  const navigate = useNavigate();
  return (
    <header className='flex justify-between items-center py-3 border-b-2 border-[#ff4655] px-6 mb-10'>
      <div className='flex gap-2'>
        <img src={Logo} alt='logo Gamepad' className='w-7' />
        <p>Gamepad</p>
      </div>
      {token ? (
        <div className='flex justify-center items-center'>
          <button
            onClick={setUser(null)}
            className='flex bg-[#ff4655] justify-center items-center py-1 px-2 rounded pointer'
          >
            <p>Se déconnecter</p>
          </button>
        </div>
      ) : (
        <div className='flex justify-center items-center'>
          <button
            onClick={() => {
              navigate("/signup");
            }}
            className='flex bg-[#ff4655] justify-center items-center py-1 px-2 rounded pointer'
          >
            <p>Se connecter</p>
          </button>
          <button
            onClick={() => {
              navigate("/login");
            }}
            className='header-button button-login-signup'
          >
            Se connecter
          </button>
        </div>
      )}
    </header>
  );
};
export default Header;
