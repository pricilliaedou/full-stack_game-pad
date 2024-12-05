import Logo from "../assets/logo.png";

const Pattern = ({ children }) => (
  <>
    <div className='flex w-3/5 m-auto  py-2 '>
      <div className='   border-r-2 border-[#ff4655] w-1/2 bg-gradient-to-b from-customGradientEnd to-customGradientStart'>
        <div>
          <img src={Logo} alt='Logo Gamepad' className='w-4 mb-8 mt-2 ml-2' />
        </div>
        <div className='flex flex-col px-3'>
          <h2>How it works?</h2>
          <p>
            Log in to your free account to be able to get all features of
            Gamepad
          </p>
          <p>Add a game to your collection</p>
          <p>Leave a review for a game</p>
        </div>
      </div>
      <div className='px-3 w-1/2 bg-gradient-to-b from-customGradientStart to-customGradientEnd'>
        {children}
      </div>
    </div>
    <p className='flex justify-end text-gray-700 mr-3 my-4'>
      Alimenté par<span> Rawg API</span>
    </p>
  </>
);
export default Pattern;
