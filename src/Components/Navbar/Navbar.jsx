import logo from "../../assets/logo.png";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useContext } from "react";
import { ThemeContext } from "../../Contexts/ThemeContext";

const Navbar = () => {
  const { setMode, colorTheme } = useContext(ThemeContext);
  return (
    <nav className="flex items-center h-16 bg-teal-400 p-3 dark:bg-neutral-800 dark:text-white font-montserrat">
      <img className="h-full mr-2" src={logo} alt="logo" />
      <h1 className=" dark:text-white mr-auto font-black text-xl">
        Meme Generator
      </h1>
      <h4 className="dark:text-white mr-4">Coded © Rolo</h4>
      <div onClick={() => setMode()} className="cursor-pointer">
        {colorTheme === "dark" ? (
          <BsFillSunFill className="hover:text-goldenrod" />
        ) : (
          <BsFillMoonFill className="text-white hover:text-black" />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
