import SkillsCarousel from "../SkillsCarousel/SkillsCarousel";

function About() {
  return (
    <section id="about" className="h-screen overflow-x-clip">
      <div className="relative bg-black pointer-events-none select-none text-white w-[105%] z-30 mb-10">
        <SkillsCarousel />
      </div>
      <div className="w-[1250px] max-w-full  mx-auto px-16">
        <div className="flex flex-row items-center gap-5 mb-8">
          <h3 className="text-2xl underline decoration-4  text-orange-600">
            About Me
          </h3>
          <div className="w-60 h-[4px] bg-orange-600"></div>
        </div>
        <div className="flex flex-row  gap-12">
          <Left />
          <Right />
        </div>
        <div>
          <p className="w-min flex flex-row gap-2 items-center text-xl">
            {" "}
            <span className="text-7xl font-extrabold text-orange-600">
              12
            </span>{" "}
            meses de experiencia
          </p>
        </div>
      </div>
    </section>
  );
}

const Left = () => {
  return (
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
  );
};

const Right = () => {
  return <div className="flex-1"></div>;
};

export default About;
