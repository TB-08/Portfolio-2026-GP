import { motion } from "motion/react";

function FilterTabs({ categories, activeCategory, onChange }) {
  return (
    <div
      className="flex max-w-full overflow-x-auto no-scrollbar sm:flex-wrap gap-2 rounded-xl border border-white/10 bg-white/[0.045] p-1.5 sm:p-2 backdrop-blur-md"
      role="tablist"
      aria-label="Portfolio categories"
    >
      {categories.map((category) => {
        const isActive = category === activeCategory;

        return (
          <button
            key={category}
            className={`relative shrink-0 rounded-full px-4 py-2 text-xs sm:px-5 sm:py-2.5 sm:text-sm font-medium transition-colors ${
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
