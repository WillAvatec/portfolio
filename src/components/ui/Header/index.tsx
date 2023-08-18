function Header() {
  return (
    <header className="flex justify-center py-5 px-2 bg-gray-950 text-white font-semibold font-Montserrat">
      <nav>
        <ol className="flex flex-row gap-3">
          <li>
            <a href="#">// About</a>
          </li>
          <li>
            <a href="#"> // Projects</a>
          </li>
          <li>
            <a href="#"> // Contact</a>
          </li>
        </ol>
      </nav>
    </header>
  );
}

export default Header;
