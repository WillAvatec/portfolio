function Header() {
  return (
    <header className="flex flex-row justify-between py-4 px-2 bg-gray-950 text-white font-medium">
      <div className="">Logo</div>
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
