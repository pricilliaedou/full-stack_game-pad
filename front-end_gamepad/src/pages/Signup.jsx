import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/user/signup`,
        {
          email: email,
          username: username,
          password: password,
        }
      );
      if (response.data.token) {
        setUser(response.data.token);
        alert("successfully created account");
        navigate("/");
      } else {
        alert("An error has occured, please try again.");
      }
    } catch (error) {
      if (error.response.status === 409) {
        setErrorMessage("Email already exist!");
      }
      console.log(error.message);
    }
  };
  return (
    <div className='my-10'>
      <h2 className='mb-3'>Sign up</h2>
      <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
        <input
          className='p-2 rounded text-gray-400'
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          placeholder='Username'
          type='text'
        />

        <input
          className='p-2 rounded text-gray-400'
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            setErrorMessage("");
          }}
          placeholder='Email'
          type='email'
        />
        <span className='text-[#ff4655] text-sm'>{errorMessage}</span>
        <input
          className='p-2 rounded text-gray-400'
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          placeholder='Password'
          type='password'
        />

        <button className='bg-[#ff4655] rounded p-2 mt-3' type='submit'>
          Register
        </button>
      </form>
      <Link to='/login' className='block text-sm italic text-center'>
        Already have an account ? Log in !
      </Link>
    </div>
  );
};

export default Signup;
