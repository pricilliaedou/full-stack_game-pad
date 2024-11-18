import { useState, useEffect } from "react";
import axios from "axios";

import Logo from "../assets/logo.png";

const Acceuil = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.rawg.io/api/games?key=18cf4c7c6c244123a3bb595f68612929"
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>En cours de chargement...</p>
  ) : (
    <div>
      <div className='flex mb-3'>
        <div className='flex gap-2 mx-auto'>
          <img src={Logo} alt='logo de gamepad' className='w-12' />
          <div className='text-4xl'>
            <h1>Gamepad</h1>
          </div>
        </div>
      </div>

      <div className='flex flex-wrap gap-4 justify-center'>
        {data.results.map((game) => (
          <div key={game.name}>
            <div className='relative w-64 h-80'>
              <img
                src={game.background_image}
                alt={game.name}
                className='w-full h-full object-cover rounded-lg'
              />
              <div className='absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2 rounded-b-lg'>
                <p>{game.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Acceuil;
