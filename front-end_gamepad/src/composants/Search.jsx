import InputSearch from "./InputSearch";

const Search = ({
  search,
  setSearch,
  timeoutId,
  setTimeoutId,
  setActivePage,
  dataPages,
  totalResults,
}) => {
  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearch(value);
    setActivePage(1);

    if (timeoutId) clearTimeout(timeoutId);

    const newTimeoutId = setTimeout(() => {
      dataPages(1, value);
    }, 500);

    setTimeoutId(newTimeoutId);
  };
  return (
    <InputSearch
      search={search}
      totalResults={totalResults}
      funcSearch={handleSearchChange}
    />
  );
};
export default Search;
