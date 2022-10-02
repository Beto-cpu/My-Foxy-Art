import Link from "next/link";
import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenuHandler = () => {
    setIsMenuOpen(false);
  }
  const openMenuHandler = () => {
    setIsMenuOpen(true);
  }

  return (
    <div className="p-5">
      <div className="flex flex-row items-center w-full justify-between p">
        <Link href="/">
          <a className="flex flex-row items-center transform hover:scale-105">
            <img src={"/images/icono_1.png"} width={100} />
            <span className="font-bold text-4xl">
              MY<span className="text-cetys-yellow">FOXY</span>
              <br />
              Art
            </span>
          </a>
        </Link>

        <button className="transform hover:scale-105 hover:text-cetys-yellow" onClick={openMenuHandler}>
          <BiMenuAltRight size={50} />
        </button>
      </div>

      <div className={`flex flex-col items-center fixed h-screen bg-anemia-yellow px-10 py-7 text-xl transition-all duration-300 top-0 ${isMenuOpen? 'right-0' : '-right-64'}`}>
        <button className="absolute right-8 hover:text-red-400" onClick={closeMenuHandler}>
          <AiOutlineCloseCircle className="transform hover:scale-105"/>
        </button>
        <h1 className="font-bold py-7 pb-3 text-2xl">MENU</h1>
        <div className="flex flex-col w-44 gap-y-4 text-2xl">
          <Link href="/">
            <a className="hover:underline">
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className="hover:underline">
              About Us
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
