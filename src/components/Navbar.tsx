import SearchBar from "./SearchBar";
import Logo from "../assets/images/DisneyLogo.png";
import princesses from "../data/princesses";

const Navbar = () => {
  return (
    <div className=" mx-10 mt-5 flex justify-between items-center">
      <div className="flex space-x-3 items-center">
        <img src={Logo} alt="Logo" className="w-38" />
        <p className="text-3xl font-medium mt-2 text-[#4E164A]">Princesses</p>
      </div>
      <SearchBar data={princesses} />
    </div>
  );
};
export default Navbar;
