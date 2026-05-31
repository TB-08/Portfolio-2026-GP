import { motion } from "motion/react";

function FilterTabs({ categories, activeCategory, onChange }) {
  return (
    <div
      className="flex flex-wrap gap-2 rounded-xl border border-white/10 bg-white/[0.045] p-2 backdrop-blur-md"
      role="tablist"
      aria-label="Portfolio categories"
    >
      {categories.map((category) => {
        const isActive = category === activeCategory;

        return (
          <button
            key={category}
            className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
              isActive
                ? "text-white"
                : "text-[#C8D4EA]/78 hover:text-white"
            }`}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(category)}
          >
            {isActive && (
              <motion.div
                layoutId="activeTabIndicator"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[#1740AB] to-[#3a6bf0] shadow-[0_0_28px_rgba(93,133,219,0.32)]"
                initial={false}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{category}</span>
          </button>
        );
      })}
    </div>
  );
}

export default FilterTabs;
