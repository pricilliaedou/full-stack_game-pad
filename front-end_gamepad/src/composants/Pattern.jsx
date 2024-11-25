const Pattern = ({ children }) => (
  <div className='flex w-3/4'>
    <div>
      <img src={Logo} alt='Logo Gamepad' />
      <h2>How it works?</h2>
      <p>
        Log in to your free account to be able to get all features of Gamepad
      </p>
      <p>Add a game to your collection</p>
      <p>Leave a review for a game</p>
    </div>
    <div>{children}</div>
  </div>
);
export default Pattern;
