import { PropsWithChildren } from "react";
import NavItem from "./ListItem";
import useScroll from "../../hooks/useScroll/useScroll";

type HeaderProps = {
  toggleMenu: (value: boolean) => void;
};

export default function Header({ toggleMenu }: HeaderProps) {
  const show = useScroll();
  const shouldShow = show ? "translate-y-0" : "-translate-y-full";

  return (
    <header
      className={`fixed header-bg w-full top-0 left-0 z-30 overflow-hidden font-semibold transition-all font-Montserrat text-blackest ${shouldShow}`}
    >
      <HeaderWrapper>
        <div className="font-black z-10 text-xl sm:text-4xl sm:w-max tracking-tighter transition-transform ease-in-out hover:scale-110">
          <a href="/">Emanuel.</a>
        </div>
        <NavBar toggleMenu={toggleMenu} />
      </HeaderWrapper>
    </header>
  );
}

const HeaderWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className="z-10 px-5 py-7 sm:px-10 sm:py-10 flex text-whitest justify-between items-center w-full">
      {children}
    </div>
  );
};

const HamburguerMenu = ({ toggleMenu }: HeaderProps) => {
  return (
    <button
      className="relative right-2 w-7 h-7 md:w-[36px] md:h-[36px] group cursor-pointer md:
      focus:outline-2 
      focus:outline 
      focus:outline-offset-8
      focus:outline-white
      md:hidden
      "
      onClick={() => toggleMenu(true)}
    >
      <span className="flex flex-col justify-between h-5 sm:h-full">
        <span className="min-h-[20%] bg-whitest group-hover:bg-gray-500" />
        <span className="min-h-[20%] bg-whitest group-hover:bg-gray-500" />
        <span className="min-h-[20%] bg-whitest group-hover:bg-gray-500" />
      </span>
    </button>
  );
};

const NavBar = ({ toggleMenu }: HeaderProps) => {
  return (
    <nav>
      <HamburguerMenu toggleMenu={toggleMenu} />
      <ul className="hidden md:flex flex-row justify-center gap-6">
        <NavItem href="#about">About</NavItem>
        <NavItem href="#projects">Projects</NavItem>
        <NavItem href="#contact-form">Contact</NavItem>
      </ul>
    </nav>
  );
};
