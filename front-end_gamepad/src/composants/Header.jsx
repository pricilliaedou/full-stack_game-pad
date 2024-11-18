import Logo from "../assets/logo.png";

const Header = () => (
  <header className='flex justify-between items-center py-3 border-b-2 border-[#ff4655] px-6 mb-10'>
    <div className='flex gap-2'>
      <img src={Logo} alt='logo Gamepad' className='w-7' />
      <p>Gamepad</p>
    </div>
    <div className='flex justify-center items-center'>
      <button className='flex bg-[#ff4655] justify-center items-center py-1 px-2 rounded pointer'>
        <p>Login</p>
      </button>
    </div>
  </header>
);
export default Header;
5;
