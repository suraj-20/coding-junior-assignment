const SearchBar = ({
  search,
  setSearch,
}: {
  search: string;
  setSearch: (val: string) => void;
}) => (
  <input
    type="text"
    placeholder="Search by name or city"
    className="w-full p-2 border rounded"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
);

export default SearchBar;
