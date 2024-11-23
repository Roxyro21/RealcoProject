import realcoIcon from "../assets/realco.icons/icon.svg";
import expandIcon from "../assets/realco.icons/expand.png";
import searchIcon from "../assets/realco.icons/search.png";
import soppingBagIcon from "../assets/realco.icons/shopping_bag.png";
import { Button } from "./ui/Button";

export const Header = () => (
  <header className="container">
    <nav className="flex justify-between py-4 bg-[#fff]">
      <img src={realcoIcon} alt="Realco" />
      <div className="flex gap-6 items-center">
        <a href="#" className="text-gray-800 hover:text-orange-700 transition-colors duration-200">Home</a>
        <a href="#" className="text-gray-800 hover:text-orange-700 transition-colors duration-200">Properties</a>
        <img src={expandIcon} />
        <a href="#" className="text-gray-800 hover:text-orange-700 transition-colors duration-200">About</a>
        <a href="#" className="text-gray-800 hover:text-orange-700 transition-colors duration-200">Contact</a>
        <a href="#" className="flex text-gray-800 hover:text-orange-700 transition-colors duration-200">
          <img className="p-1" src={searchIcon} /> Search
        </a>
        <button
          className="flex items-center py-2 px-3 gap-2 w-[100px] h-[40px] rounded-md border border-[#E7E8E3]
            bg-[#fff] shadow-xl shadow-black-500/50 hover:scale-105 hover:shadow-2xl transition-all duration-300"
        >
          <img className="px-2" src={soppingBagIcon} />
          Cart
        </button>
        <Button text="Find a property" />
      </div>
    </nav>
  </header>
);
