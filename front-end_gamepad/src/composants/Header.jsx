import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from "../assets/logo.png";

const Header = ({ token, username, setUser }) => {
  const navigate = useNavigate();

  return (
    <header className='flex justify-between items-center py-3 border-b-2 border-[#ff4655] px-6 mb-10'>
      <Link to={"/"} className='flex gap-2'>
        <img src={Logo} alt='logo Gamepad' className='w-7' />
        <p className='hidden sm:block'>Gamepad</p>
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
          <button className='flex justify-center items-center py-1 px-2 rounded pointer'>
            <p>My collection</p>
          </button>
          <p className='ml-3 mr-5 text-[#ff4655]'>
            {" "}
            <FontAwesomeIcon icon='hand' className='text-[[#ff4655]' />{" "}
            {username}
          </p>

          <button
            onClick={() => setUser(null)}
            className='flex bg-[#ff4655] justify-center items-center py-1 px-2 rounded pointer'
          >
            <p className='hidden sm:block'>Disconnect</p>
            <FontAwesomeIcon
              icon='right-from-bracket'
              className='block sm:hidden w-6 h-6 text-[[#ff4655]'
            />
          </button>
        </div>
      )}
    </header>
  );
};
export default Header;
