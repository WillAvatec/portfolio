import SkillsCarousel from "../SkillsCarousel/SkillsCarousel";
import Passion from "../../assets/passion.jpg";

function About() {
  return (
    <section id="about" className="min-h-screen overflow-x-clip">
      <div className="relative bg-black pointer-events-none select-none text-white w-[105%] py-2 mb-10">
        <SkillsCarousel />
      </div>
      <div className="w-[1250px] max-w-full mx-auto sm:px-16 sm:py-12 px-8 py-8">
        <div className="flex flex-row items-center gap-5 mb-8">
          <h3 className="text-3xl underline decoration-4  text-orange-600">
            About Me
          </h3>
          <div className="w-60 h-[4px] bg-orange-600"></div>
        </div>
        <div className="flex flex-col md:flex-row  gap-12 py-8">
          <Left />
          <Right />
        </div>
        <blockquote className="text-3xl text- w-fit border-l-8 p-4">
          <p className="italic">
            The important thing is to never not stop questioning.
          </p>
          <p className="w-full text-2xl text-right font-extrabold text-orange-600">
            - Albert Einstein
          </p>
        </blockquote>
      </div>
    </section>
  );
}

const Left = () => {
  return (
    <div className="flex-1">
      <p>
        Hello! My name is Emanuel Llontop, and I am a FullStack Web developer.
      </p>
      <p className="pb-7">
        From a very young age, I was always fascinated by technology, things we
        use frequently without paying much attention to, like a cellphone or a
        remote control.
      </p>
      <p className="pb-7">
        It was like magic! Driven by that same curiosity, I took on the task of
        installing custom ROMs on cellphones (almost bricking them, by the way),
        connecting circuits with solder and a soldering iron, disassembling
        broken electronic machines and tools, trying to apply reverse
        engineering to them...
      </p>
      <p className="pb-7">
        Many years later, I had the opportunity to interact with the Web. It's a
        completely different world from what I was used to. So many people with
        such skills creating fantastic experiences, each designer with their own
        style.
      </p>
      <p className="pb-7">
        Guided by instinct, I started to learn everything about the web that
        time would allow me. After a year, full of ups and downs, ...
      </p>
    </div>
  );
};

const Right = () => {
  return (
    <div className="flex-1">
      <img src={Passion} alt="motivational phrase" />
    </div>
  );
};

export default About;

/*  TRANSLATION 

// ESPAÑOL

<div className="flex-1">
  <p>
    ¡Hola!, me llamo Emanuel Llontop y soy un desarrollador Web FullStack.
  </p>
  <p className="pb-7">
    Desde muy pequeño siempre estuve maravillado por la tecnología, cosas
    que usamos frecuentemente sin prestarles mucha atención, tales como un
    celular o un control remoto.
  </p>
  <p className="pb-7">
    ¡Era como magia! Impulsado por esa misma curiosidad, me di a la tarea de
    instalar ROMS personalizados en celulares (casi brickeandolos, por
    cierto), conectar circuitos con estaño y cautín, desarmar maquinas y
    herramientas electronicas malogradas intentando aplicarles ingenieria
    inversa...
  </p>
  <p className="pb-7">
    Muchos años despues, tuve la oportunidad de interactuar con la Web. Es
    un mundo completamente diferente, del que yo estaba acostumbrado. Tantas
    personas con tanta habilidad creando experiencias fantasticas, cada
    diseñador con su propio estilo.
  </p>
  <p className="pb-7">
    Guiandome por el instinto, empece aprender todo lo que el tiempo me
    permitiera acerca de la web. Despues de un año, con muchos altibajos,
    conseguí entrar al rango de FullStack Developer.
  </p>
</div>

// ENGLISH

    <div className="flex-1">
      <p>
        Hello! My name is Emanuel Llontop, and I am a FullStack Web developer.
      </p>
      <p className="pb-7">
        From a very young age, I was always fascinated by technology, things we
        use frequently without paying much attention to, like a cellphone or a
        remote control.
      </p>
      <p className="pb-7">
        It was like magic! Driven by that same curiosity, I took on the task of
        installing custom ROMs on cellphones (almost bricking them, by the way),
        connecting circuits with solder and a soldering iron, disassembling
        broken electronic machines and tools, trying to apply reverse
        engineering to them...
      </p>
      <p className="pb-7">
        Many years later, I had the opportunity to interact with the Web. It's a
        completely different world from what I was used to. So many people with
        such skills creating fantastic experiences, each designer with their own
        style.
      </p>
      <p className="pb-7">
        Guided by instinct, I started to learn everything about the web that
        time would allow me. After a year, full of ups and downs, ...
      </p>
    </div>


*/
