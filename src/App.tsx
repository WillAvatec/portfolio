import Contact from "./components/Contact/Contact";
import Header from "./components/ui/Header/Header";
import Main from "./components/ui/Main/Main";

function App() {
  return (
    <>
      <Noise />
      <Header />
      <Main />
      <Contact />
    </>
  );
}

const Noise = () => {
  return (
    <div
      id="noise"
      className="fixed pointer-events-none inset w-full h-full"
    ></div>
  );
};

export default App;
