import { useState, useEffect } from "react";
import axios from "axios";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

import Logo from "../assets/logo.png";

const Accueil = () => {
  const [currentPageData, setCurrentPageData] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const itemsPerPage = 20;

  // Récupération des données pour une page
  const fetchPageData = async (page) => {
    setIsLoading(true);
    const url = `https://api.rawg.io/api/games?key=18cf4c7c6c244123a3bb595f68612929&page=${page}&page_size=${itemsPerPage}`;
    try {
      const response = await axios.get(url);
      setCurrentPageData(response.data.results);
      setTotalPages(Math.ceil(response.data.count / itemsPerPage));
      setIsLoading(false);
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPageData(activePage);
  }, [activePage]);

  // Génération dynamique des pages visibles
  const getPaginationItems = () => {
    const pages = [];

    // Si la page active est proche du début
    if (activePage <= 3) {
      for (let i = 1; i <= Math.min(5, totalPages); i++) {
        pages.push(i);
      }
      if (totalPages > 5) {
        pages.push("...");
        pages.push(totalPages);
      }
    }
    // Si la page active est proche de la fin
    else if (activePage >= totalPages - 2) {
      pages.push(1);
      pages.push("...");
      for (let i = Math.max(1, totalPages - 4); i <= totalPages; i++) {
        pages.push(i);
      }
    }
    // Si la page active est quelque part au milieu
    else {
      pages.push(1);
      pages.push("...");
      for (let i = activePage - 2; i <= activePage + 2; i++) {
        pages.push(i);
      }
      pages.push("...");
      pages.push(totalPages);
    }

    return pages;
  };

  const next = () => {
    if (activePage < totalPages) setActivePage(activePage + 1);
  };

  const prev = () => {
    if (activePage > 1) setActivePage(activePage - 1);
  };

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
        {currentPageData.map((game) => (
          <div key={game.id}>
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

      <div className='flex items-center justify-between bg-[#1f2023] text-white px-4 py-3 sm:px-6 mt-4'>
        <div className='hidden sm:flex sm:flex-1 sm:items-center sm:justify-between'>
          <div>
            <p className='text-sm text-gray-700'>
              Showing{" "}
              <span className='font-medium'>
                {(activePage - 1) * itemsPerPage + 1}
              </span>{" "}
              to{" "}
              <span className='font-medium'>
                {Math.min(activePage * itemsPerPage, totalPages * itemsPerPage)}
              </span>{" "}
              of{" "}
              <span className='font-medium'>{totalPages * itemsPerPage}</span>{" "}
              results
            </p>
          </div>
          <div>
            <nav
              aria-label='Pagination'
              className='isolate inline-flex -space-x-px rounded-md shadow-sm'
            >
              <button
                onClick={prev}
                disabled={activePage === 1}
                className='relative inline-flex items-center rounded-l-md px-2 py-2 text-white hover:bg-gray-700 focus:z-20 focus:outline-offset-0'
              >
                <span className='sr-only'>Previous</span>
                <ChevronLeftIcon className='h-5 w-5' aria-hidden='true' />
              </button>

              {getPaginationItems().map((page, index) =>
                typeof page === "number" ? (
                  <button
                    key={index}
                    onClick={() => setActivePage(page)}
                    className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold rounded focus:z-20 ${
                      activePage === page
                        ? "bg-[#ff4655] text-white"
                        : "text-white hover:bg-gray-700"
                    }`}
                  >
                    {page}
                  </button>
                ) : (
                  <span
                    key={index}
                    className='relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-400'
                  >
                    ...
                  </span>
                )
              )}

              <button
                onClick={next}
                disabled={activePage === totalPages}
                className='relative inline-flex items-center rounded-r-md px-2 py-2 text-white hover:bg-gray-700 focus:z-20 focus:outline-offset-0'
              >
                <span className='sr-only'>Next</span>
                <ChevronRightIcon className='h-5 w-5' aria-hidden='true' />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
