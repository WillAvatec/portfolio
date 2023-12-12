import { useState, lazy, Suspense } from "react";
import ContactForm from "./components/Form";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Projects from "./components/Projects/Projects";
import SquareBubble from "./components/Header/SquareBubble";
import About from "./components/About/About";
import { SpeedInsights } from "@vercel/speed-insights/next";

const ContactDelayed = lazy(() => import("./components/Contact/Contact"));

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
      <Suspense fallback={"Loading..."}>
        <ContactDelayed />
      </Suspense>
      <SpeedInsights />
    </>
  );
}

export default App;
