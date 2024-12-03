import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Game = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const url = `${import.meta.env.VITE_API_URL}/games/${id}?key=${
        import.meta.env.VITE_API_KEY
      }`;
      try {
        const response = await axios.get(url);
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);

  return <h1>Je suis le détail du jeu</h1>;
};
export default Game;
