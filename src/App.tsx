import { useState } from "react";
import ContactForm from "./components/Form";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Projects from "./components/Projects/Projects";
import SquareBubble from "./components/Header/SquareBubble";
import About from "./components/About/About";

function App() {
  const [activeMenu, setActiveMenu] = useState(false);
  const toggleMenu = (newState: boolean) => setActiveMenu(() => newState);

  return (
    <>
      <div className="bg-white z-10 relative">
        <SquareBubble active={activeMenu} toggle={toggleMenu} />
        <Header toggleMenu={toggleMenu} />
        <Intro />
        <About />
        <Projects />
        <ContactForm />
      </div>
      <Contact />
    </>
  );
}

export default App;
