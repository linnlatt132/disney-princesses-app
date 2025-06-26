import { Search } from "lucide-react";
import type { Princess } from "../data/princesses";
import { useState } from "react";
import useDebounce from "../hooks/useDebounce";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

interface SearchBarProps {
  data: Princess[];
}

const SearchBar = ({ data }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const debounceQuery = useDebounce(query, 500);

  const filtered = data.filter((p) =>
    p.name.toLocaleLowerCase().includes(debounceQuery.toLocaleLowerCase())
  );
  return (
    <div className="relative w-80">
      {/* Search Bar */}
      <div className="h-12 rounded-full text-[#5C5C5C] bg-[#CCCCCC]/50 px-4 space-x-4  flex justify-start items-center">
        <Search size={24} className="hover:cursor-pointer hover:opacity-50" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="font-extralight text-[18px] outline-none "
          placeholder="Search princess names..."
        />
      </div>

      {/* Animated result box */}
      <AnimatePresence>
        {debounceQuery && filtered.length > 0 && (
          <motion.div
            key="results"
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.25 }}
            className="absolute top-14 left-0 w-full rounded-xl shadow-lg text-[#454444] bg-[#CCCCCC] z-30 p-2 space-y-1"
          >
            {filtered.map((p) => (
              <Link key={p.id} to={`/detail/${p.id}`}>
                <div className="text-sm px-3 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
                  {p.name}
                </div>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default SearchBar;
