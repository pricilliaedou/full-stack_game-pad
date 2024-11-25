import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Cookies from "js-cookie";
import Accueil from "./pages/Accueil";
import Header from "./composants/Header";
import Login from "./pages/Login";

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
          <Route path='/' element={<Accueil />} />
          <Route path='/login' element={<Login setUser={setUser} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
