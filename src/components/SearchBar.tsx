import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="h-12 rounded-full text-[#5C5C5C]  w-80 bg-[#CCCCCC] flex justify-start margin-4 items-center">
      <Search size={30} />
      <p className="bg-amber-400 pr-7">search bar</p>
    </div>
  );
};
export default SearchBar;
