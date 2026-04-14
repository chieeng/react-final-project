function FilterPanel() {
  return (
    <div className="filter-panel">

      <h3>Filters</h3>

      <label>Max Price</label>
      <input type="number" />

      <label>Location</label>
      <input type="text" />

      <button>Apply</button>

    </div>
  );
}

export default FilterPanel;