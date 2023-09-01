import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const skills = [
  { name: "react", icon: "devicon-react-original" },
  { name: "javascript", icon: "devicon-javascript-plain" },
  { name: "typescript", icon: "devicon-typescript-original" },
  { name: "sass", icon: "devicon-sass-original" },
  { name: "tailwind", icon: "devicon-tailwindcss-plain" },
  { name: "git", icon: "devicon-git-plain" },
  { name: "webpack", icon: "devicon-webpack-plain" },
  { name: "jest", icon: "devicon-jest-plain" },
  { name: "css", icon: "devicon-css3-plain" },
  { name: "html", icon: "devicon-html5-plain" },
  { name: "npm", icon: "devicon-npm-original-wordmark" },
  { name: "nodejs", icon: "devicon-nodejs-plain" },
  { name: "vitest", icon: "" },
  { name: "mongodb", icon: "" },
];

function SkillsCarousel() {
  const [viewportRef] = useEmblaCarousel(
    {
      loop: true,
    },
    [Autoplay({ delay: 2000 })]
  );

  return (
    <div className="relative w-full max-w-5xl lg:max-w-[98%] mx-auto">
      {/* <button id="left-arrow" onClick={scrollBack}>
        <img src={Arrow} alt="left-arrow" />
      </button>
      <button id="right-arrow" onClick={scrollNext}>
        <img src={Arrow} alt="right-arrow" />
      </button> */}
      <div className="overflow-hidden w-full " ref={viewportRef}>
        <div className="relative flex mx-10 gap-5 z-10">
          {skills.map((skill, i) => (
            <Skill key={i} name={skill.name} iconClass={skill.icon} />
          ))}
        </div>
      </div>
    </div>
  );
}

interface SkillProps {
  name: string;
  iconClass: string;
}
function Skill({ name, iconClass }: SkillProps) {
  const icon = `${iconClass} colored`;
  return (
    <div className="flex flex-row justify-between items-center flex-[0_0_8rem] w-32 mx-4 py-3 px-2">
      <p className="mt-1 text-sm text-center uppercase">{name}</p>
      <div className="w-2 h-2 bg-orange-500 rounded-full " />
    </div>
  );
}

export default SkillsCarousel;
