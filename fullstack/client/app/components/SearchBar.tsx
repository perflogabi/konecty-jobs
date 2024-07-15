"use client";

type SearchBarProps = {
    setSearchQuery: (query: string) => void;
  };
  
  const SearchBar = ({ setSearchQuery }: SearchBarProps) => (
    <input
      type="text"
      placeholder="Pesquisar produtos..."
      onChange={(e) => setSearchQuery(e.target.value)}
      className="w-full p-2 border rounded-md mb-4"
    />
  );
  
  export default SearchBar;
  