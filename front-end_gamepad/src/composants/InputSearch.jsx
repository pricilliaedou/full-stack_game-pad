const InputSearch = ({ totalResults, search, funcSearch }) => {
  return (
    <form className='pt-2 mx-auto text-gray-600 mb-6'>
      <div className='relative max-w-[250px] flex flex-col'>
        <div className='absolute h-10 left-3 w-[20px] inset-y-0 flex items-center justify-center pointer-events-none'>
          <svg
            className='w-5 h-5 text-gray-500 '
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21 21l-5.197-5.197m0 0a7.5 7.5 0 1 0-10.607-10.607 7.5 7.5 0 0 0 10.607 10.607z'
            />
          </svg>
        </div>

        <input
          type='search'
          value={search}
          onChange={funcSearch}
          id='default-search'
          className='w-full border border-gray-300 bg-white h-10 pl-10 pr-3 rounded-lg text-sm focus:outline-none'
          placeholder='Rechercher un jeu...'
          required
        />

        {search && (
          <div className='text-center mt-2'>
            <p>
              Résultats pour "<strong>{search}</strong>" :{" "}
              <strong>{totalResults}</strong> jeux trouvés
            </p>
          </div>
        )}
      </div>
    </form>
  );
};
export default InputSearch;
