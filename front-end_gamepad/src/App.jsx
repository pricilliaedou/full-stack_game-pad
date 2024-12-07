import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Cookies from "js-cookie";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHand, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
library.add(faHand, faRightFromBracket);
import Home from "./pages/Home";
import Pattern from "./composants/Pattern";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Game from "./pages/Game";
import Header from "./composants/Header";

function App() {
  const [token, setToken] = useState(Cookies.get("token") || null);
  const [username, setUsername] = useState(Cookies.get("username") || null);

  const setUser = (data) => {
    if (data) {
      const { token, username } = data;
      setToken(token);
      setUsername(username);
      Cookies.set("token", token, { expires: 14 });
      Cookies.set("username", username, { expires: 14 });
      console.log(token.username);
    } else {
      setToken(null);
      setUsername(null);

      Cookies.remove("token");
      Cookies.remove("username");
    }
  };
  return (
    <Router>
      <div className='container mx-auto max-w-[1280px] bg-[#1f2023] text-white min-h-[100vh]'>
        <Header setUser={setUser} token={token} username={username} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:id' element={<Game />} />
          <Route
            path='/login'
            element={
              <Pattern>
                <Login setUser={setUser} />
              </Pattern>
            }
          />
          <Route
            path='/Signup'
            element={
              <Pattern>
                <Signup setUser={setUser} />
              </Pattern>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
