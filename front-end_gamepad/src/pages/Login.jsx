import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setIsLoading(true);

      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/user/login`,
        {
          email: email,
          password: password,
        }
      );
      if (response.data.token) {
        // console.log(response.data);
        setUser({
          token: response.data.token,
          username: response.data.account.username,
        });
        setIsLoading(false);
        navigate("/");
      } else {
        alert("An error has occured, please try again..");
      }
    } catch (error) {
      if (error.response.status === 401 || error.response.status === 400) {
        setErrorMessage("Invalid email or password");
        setIsLoading(false);
      }
      console.log(error.message);
    }
  };
  return (
    <div className='my-10'>
      <h2 className='mb-3'>Login</h2>
      <form className='flex flex-col gap-3 ' onSubmit={handleSubmit}>
        <input
          className='p-2 rounded text-gray-400'
          onChange={(event) => {
            setEmail(event.target.value);
            setErrorMessage("");
          }}
          type='email'
          placeholder='Email'
        />
        <input
          className='p-2 rounded text-gray-400'
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          type='password'
          placeholder='Password'
        />
        <span className='text-[#ff4655] text-sm'>{errorMessage}</span>
        {isLoading ? (
          <p>Page en cours de téléchargement...</p>
        ) : (
          <button
            className='bg-[#ff4655] rounded p-1'
            disabled={isLoading ? true : false}
            type='submit'
          >
            Connexion
          </button>
        )}
      </form>

      <Link to='/signup' className='block text-sm italic text-center'>
        Don't have a account yet?
      </Link>
    </div>
  );
};
export default Login;
