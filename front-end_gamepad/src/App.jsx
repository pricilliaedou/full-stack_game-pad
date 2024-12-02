import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Cookies from "js-cookie";
import Home from "./pages/Home";
import Pattern from "./composants/Pattern";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Header from "./composants/Header";

function App() {
  const [token, setToken] = useState(Cookies.get("token") || null);
  const setUser = (token) => {
    if (token) {
      setToken(token);
      Cookies.set("token", token, { expires: 14 });
    } else {
      setToken(null);
      Cookies.remove("token");
    }
  };
  return (
    <Router>
      <div className='container mx-auto max-w-[1280px] bg-[#1f2023] text-white '>
        <Header setUser={setUser} token={token} />
        <Routes>
          <Route path='/' element={<Home />} />
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
