import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "../assets/logo.png";

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
      const response = await axios.post("/user/login", {
        email: email,
        password: password,
      });
      if (response.data.token) {
        setUser(response.data.token);
        setIsLoading(false);
        navigate("/contact");
      } else {
        alert("Une erreur est survenue, veuillez réssayer.");
      }
    } catch (error) {
      if (error.response.status === 201 || error.response.status === 400) {
        setErrorMessage("Email ou mot de passe invalide");
        setIsLoading(false);
      }
      console.log(error.message);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          onChange={(event) => {
            setEmail(event.target.value);
            setErrorMessage("");
          }}
          placeholder='Adresse email'
        />
        <input
          type='password'
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          placeholder='Mot de passe'
        />
        <span>{errorMessage}</span>
        {isLoading ? (
          <p>Page en cours de téléchargement...</p>
        ) : (
          <button disabled={isLoading ? true : false} type='submit'>
            Se connecter
          </button>
        )}
      </form>
    </div>
  );
};
export default Login;
