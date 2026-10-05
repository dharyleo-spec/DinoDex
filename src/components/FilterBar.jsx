function FilterBar({
  period,
  setPeriod,
  diet,
  setDiet,
}) {
  return (
    <div className="flex gap-[10px]">
      <select
        value={period}
        onChange={(e) => setPeriod(e.target.value)}
        className="h-[48px] px-[15px] pr-[35px] border border-[#d6d6d6] rounded-[10px] bg-white text-[#444] text-[15px] outline-none cursor-pointer focus:border-[#537b2f]"
      >
        <option value="All">All Periods</option>
        <option value="Triassic">Triassic</option>
        <option value="Jurassic">Jurassic</option>
        <option value="Cretaceous">Cretaceous</option>
      </select>

      <select
        value={diet}
        onChange={(e) => setDiet(e.target.value)}
        className="h-[48px] px-[15px] pr-[35px] border border-[#d6d6d6] rounded-[10px] bg-white text-[#444] text-[15px] outline-none cursor-pointer focus:border-[#537b2f]"
      >
        <option value="All">All Diets</option>
        <option value="Herbivore">Herbivore</option>
        <option value="Carnivore">Carnivore</option>
        <option value="Omnivore">Omnivore</option>
      </select>
    </div>
  );
}

export default FilterBar;