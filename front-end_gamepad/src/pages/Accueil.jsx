import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Search from "../composants/Search";

const Accueil = () => {
  const [currentPageData, setCurrentPageData] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [search, setSearch] = useState("");
  const [activePage, setActivePage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [timeoutId, setTimeoutId] = useState(null);
  const itemsPerPage = 20;

  const fetchPageData = async (page, query = "") => {
    setIsLoading(true);
    const url = `https://api.rawg.io/api/games?key=18cf4c7c6c244123a3bb595f68612929&page=${page}&page_size=${itemsPerPage}${
      query ? `&search=${query}` : ""
    }`;
    try {
      const response = await axios.get(url);
      setCurrentPageData(response.data.results);
      setTotalResults(response.data.count);
      setIsLoading(false);
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPageData(activePage, search);
  }, [activePage]);

  const next = () => {
    if (activePage < Math.ceil(totalResults / itemsPerPage)) {
      setActivePage(activePage + 1);
    }
  };

  const prev = () => {
    if (activePage > 1) {
      setActivePage(activePage - 1);
    }
  };

  const getPaginationItems = () => {
    const totalPages = Math.ceil(totalResults / itemsPerPage);
    const pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else if (activePage <= 3) {
      for (let i = 1; i <= 5; i++) {
        pages.push(i);
      }
      pages.push("...");
      pages.push(totalPages);
    } else if (activePage >= totalPages - 2) {
      pages.push(1);
      pages.push("...");
      for (let i = totalPages - 4; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
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

  return (
    <div className='flex flex-col px-6'>
      <div className='flex mb-3'>
        <div className='flex gap-2 mx-auto'>
          <h1 className='text-4xl'>Gamepad</h1>
        </div>
      </div>
      <Search
        search={search}
        setSearch={setSearch}
        timeoutId={timeoutId}
        setTimeoutId={setTimeoutId}
        setActivePage={setActivePage}
        dataPages={fetchPageData}
        totalResults={totalResults}
      />

      <div className='flex flex-wrap gap-4 justify-center'>
        {isLoading ? (
          <p>Chargement...</p>
        ) : currentPageData.length > 0 ? (
          currentPageData.map((game) => (
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
          ))
        ) : (
          <p className='text-center text-gray-500 mt-4'>
            Désolé, nous n'avons aucun jeu à ce nom.
          </p>
        )}
      </div>

      <div className='flex items-center justify-center bg-[#1f2023] text-white px-4 py-3 sm:px-6 mt-4'>
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
            disabled={activePage === Math.ceil(totalResults / itemsPerPage)}
            className='relative inline-flex items-center rounded-r-md px-2 py-2 text-white hover:bg-gray-700 focus:z-20 focus:outline-offset-0'
          >
            <span className='sr-only'>Next</span>
            <ChevronRightIcon className='h-5 w-5' aria-hidden='true' />
          </button>
        </nav>
      </div>
      <div className='hidden sm:flex sm:flex-1 sm:items-center sm:justify-between'>
        {" "}
        <div>
          {" "}
          <p className='text-sm text-gray-700'>
            Résultats de{" "}
            <span className='font-medium'>
              {(activePage - 1) * itemsPerPage + 1}{" "}
            </span>{" "}
            à{" "}
            <span className='font-medium'>
              {" "}
              {Math.min(
                activePage * itemsPerPage,
                totalResults * itemsPerPage
              )}{" "}
            </span>{" "}
            sur{" "}
            <span className='font-medium'>{totalResults * itemsPerPage}</span>{" "}
            au total
          </p>
        </div>
      </div>
      <div className='flex justify-center items-center mt-5'>
        <p className='flex justify-center '>
          Réalisé par Pricillia EDOU EDOU @
        </p>
        <Link
          to={"https://github.com/pricilliaedou/full-stack_game-pad.git"}
          target='blank'
          className='text-[#ff4655]'
        >
          Github
        </Link>
      </div>

      <p className='flex justify-end text-gray-700 mb-2'>
        Alimenté par <span>Rawg API</span>
      </p>
    </div>
  );
};

export default Accueil;
