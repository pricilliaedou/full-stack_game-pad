import Accueil from "./pages/Accueil";
import Header from "./composants/Header";

import "./App.css";

function App() {
  return (
    <div className='container mx-auto max-w-[1280px] bg-[#1f2023] text-white '>
      <Header />

      <Accueil />
    </div>
  );
}

export default App;
