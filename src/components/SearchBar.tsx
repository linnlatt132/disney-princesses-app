import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="h-12 rounded-full text-[#5C5C5C] px-4 space-x-4 w-80 bg-[#CCCCCC] flex justify-start margin-4 items-center">
      <Search size={30} className="hover:cursor-pointer hover:opacity-50" />
      <input
        className="font-extralight text-[18px] outline-none "
        placeholder="Search princess..."
      />
    </div>
  );
};
export default SearchBar;
