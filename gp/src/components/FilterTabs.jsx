function FilterTabs({ categories, activeCategory, onChange }) {
  return (
    <div
      className="flex flex-wrap gap-2 rounded-lg border border-white/10 bg-white/[0.045] p-2 backdrop-blur-md"
      role="tablist"
      aria-label="Social media project categories"
    >
      {categories.map((category) => {
        const isActive = category === activeCategory;

        return (
          <button
            key={category}
            className={`rounded-full px-4 py-2 text-sm transition ${
              isActive
                ? "bg-[#1740AB] text-white shadow-[0_0_28px_rgba(93,133,219,0.32)]"
                : "text-[#C8D4EA]/78 hover:bg-white/[0.08] hover:text-white"
            }`}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default FilterTabs;
