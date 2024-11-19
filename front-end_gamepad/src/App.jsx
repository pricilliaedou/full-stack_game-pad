import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Header from "./composants/Header";

import "./App.css";

function App() {
  return (
    <Router>
      <div className='container mx-auto max-w-[1280px] bg-[#1f2023] text-white '>
        <Header />
        <Routes>
          <Route path='/' element={<Accueil />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
