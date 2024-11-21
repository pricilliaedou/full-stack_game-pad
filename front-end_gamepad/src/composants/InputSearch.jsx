const InputSearch = ({ totalResults, search, onAction }) => (
  <form className='pt-2 mx-auto text-gray-600 mb-6 '>
    <div className='relative'>
      <div className='absolute inset-y-0 end-4 flex items-center ps-3 pointer-events-none'>
        <svg
          className='w-5 h-5 text-gray-500 dark:text-gray-400 '
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
          />
        </svg>
      </div>
      <input
        type='search'
        value={search}
        onChange={onAction}
        id='default-search'
        className=' border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none dark:placeholder-gray-400 '
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
export default InputSearch;
