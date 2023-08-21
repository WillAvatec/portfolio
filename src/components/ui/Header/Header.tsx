import { PropsWithChildren } from "react";
import useScroll from "../../../hooks/useScroll/useScroll";

export default function Header() {
  const show = useScroll();

  const shouldShow = show ? "translate-y-0" : "-translate-y-full";

  return (
    <header
      className={`w-full fixed ${shouldShow} top-0 left-0 z-20 overflow-hidden font-semibold transition-all font-Montserrat text-blackest`}
    >
      <HeaderBackground />
      <HeaderWrapper>
        <div className="font-black z-10 text-xl sm:text-4xl sm:w-max tracking-tighter">
          <a href="/">Emanuel Llontop</a>
        </div>
        <HamburguerMenu />
        <NavBar />
        <ContactButton />
      </HeaderWrapper>
    </header>
  );
}

const HeaderWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className="z-10 px-5 py-7 sm:px-10 sm:py-12 flex justify-between items-center w-full">
      {children}
    </div>
  );
};

const HeaderBackground = () => {
  return (
    <div
      id="header-background"
      className=" absolute w-full h-full  bg-whitest transition-colors"
    ></div>
  );
};

const HamburguerMenu = () => {
  return (
    <button
      className="relative w-7 h-7 md:w-[36px] md:h-[36px] group cursor-pointer md:
      focus:outline-2 
      focus:outline 
    focus:outline-red-400 
      focus:outline-offset-8
      md:hidden
      "
    >
      <span className="flex flex-col justify-between h-full">
        <span className="min-h-[20%] bg-blackest group-hover:bg-gray-500 group-focus:bg-red-400" />
        <span className="min-h-[20%] bg-blackest group-hover:bg-gray-500 group-focus:bg-red-400" />
        <span className="h-1/6 bg-blackest group-hover:bg-gray-500 group-focus:bg-red-400" />
      </span>
    </button>
  );
};

const NavBar = () => {
  return (
    <nav className="flex-1 hidden md:block">
      <ul className="flex flex-row justify-center gap-6">
        <NavItem href="#about">About</NavItem>
        <NavItem href="#projects">Projects</NavItem>
        <NavItem href="#contact">Contact</NavItem>
      </ul>
    </nav>
  );
};

const NavItem = ({ href, children }: PropsWithChildren<{ href: string }>) => {
  return (
    <li className="relative font-normal">
      <a
        className="px-3 text-xl before:w-0 before:h-1 before:absolute before:bottom-0 
        before:right-0 before:bg-blue-400 before:transition-all before:duration-200
        hover:before:w-full hover:before:left-0 hover:before:bg-red-500"
        href={href}
      >
        {children}
      </a>
    </li>
  );
};

const ContactButton = () => {
  return (
    <button
      className="text-blackest z-10 border-blackest border-4 rounded-xl sm:rounded-full px-2 py-1  sm:px-3 sm:py-2 transition-transform 
    hover:bg-blackest 
    hover:text-whitest 
    hover:scale-110
    focus:outline-8 
    focus:outline-blackest
    sm:focus:outline-offset-8
    focus:outline-offset-6
    "
    >
      Let's chat!
    </button>
  );
};
