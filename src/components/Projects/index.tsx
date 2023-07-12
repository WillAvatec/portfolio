import SVGLink from "../utils/SVGLink";

function Project() {
  return (
    <div className="card-wrapper my-3 mx-6">
      <div className="card flex flex-col bg-cyan-50 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
        <img src="https://images.pexels.com/photos/16971404/pexels-photo-16971404/free-photo-of-pajaro-animal-mono-pelo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <div className="bg-white text-black">
          <div className="card--header py-2 flex flex-row justify-around items-center">
            <div className="card--header-title">
              <h4 className="font-semibold">Alpaca Dev</h4>
            </div>
            <div className="card--header-links flex gap-2">
              <SVGLink
                href="https://www.pexels.com/es-es/foto/pajaro-animal-mono-pelo-16971404/"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="github logo link icon"
              />
              <SVGLink
                href="https://www.pexels.com/es-es/foto/pajaro-animal-mono-pelo-16971404/"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg"
                alt="live preview icon"
              />
            </div>
          </div>

          <div className="card--description px-4 pt-2 pb-4 text-center">
            <p>
              Short description of the project. Just a couple sentences will do.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="">
      <h2 className="font-semibold text-center text-2xl py-3">My Work</h2>
      <Project />
    </div>
  );
}

export default Projects;
