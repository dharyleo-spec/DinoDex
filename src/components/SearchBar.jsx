function SearchBar({ search, setSearch }) {
  return (
    <div className="w-full md:flex-1">
      <input
        type="text"
        placeholder="Search dinosaurs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full h-[48px] px-[18px] border border-[#d6d6d6] rounded-[10px] bg-white text-[15px] outline-none focus:border-[#537b2f]"
      />
    </div>
  );
}

export default SearchBar;