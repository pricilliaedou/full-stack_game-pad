import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Game = () => {
  const [data, setData] = useState([]);
  const [gameSeries, setGameSeries] = useState([]);
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
    const fetchGameSeries = async () => {
      const url = `${
        import.meta.env.VITE_API_URL
      }/games/${id}/game-series?key=${import.meta.env.VITE_API_KEY}`;
      try {
        const response = await axios.get(url);
        console.log(response.data);
        setGameSeries(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
    fetchGameSeries();
  }, [id]);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div className='w-3/4 m-auto '>
      <h1>{data.name}</h1>
      <div className='flex gap-3 w-full '>
        <div className='w-1/2'>
          <img
            className='w-full h-auto rounded-lg shadow-md'
            src={data.background_image_additional}
            alt={data.name}
          />
        </div>
        <div className='w-1/2'>
          <div>
            <div className='flex gap-3 '>
              <button>
                Saved to <span className='text-green-500'>Collection</span>
              </button>
              <button>Add a Review</button>
            </div>
            <div className='flex gap-4 '>
              <div>
                <p className='text-gray-400'>Plateforms</p>
                {data.platforms.map((platform) => {
                  console.log(platform);
                  return (
                    <p className='text-sm' key={platform.platform.id}>
                      {platform.platform.name}
                    </p>
                  );
                })}
                <h3 className='text-gray-400'>Released date</h3>
                <p>{data.released}</p>
                <h3 className='text-gray-400'>Publisher</h3>
                <p>{data.publishers[0].name}</p>
              </div>

              <div>
                <p className='text-gray-400'>Genre</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className='text-gray-400'>About</h3>
            <p className='line-clamp-3  overflow-hidden text-ellipsis'>
              {data.description_raw}
            </p>
          </div>
        </div>
      </div>
      <h2>Game like {`${data.name}`}</h2>
    </div>
  );
};
export default Game;
