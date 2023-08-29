import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Arrow from "../../assets/arrow.svg";

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
];

function SkillsCarousel() {
  const [emblaRef, emblaAPI] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2000 }),
  ]);

  const scrollBack = useCallback(() => {
    if (emblaAPI) emblaAPI.scrollPrev();
  }, [emblaAPI]);

  const scrollNext = useCallback(() => {
    if (emblaAPI) emblaAPI.scrollNext();
  }, [emblaAPI]);

  return (
    <div className="relative w-full max-w-5xl lg:max-w-[98%] mx-auto">
      {/* <button id="left-arrow" onClick={scrollBack}>
        <img src={Arrow} alt="left-arrow" />
      </button>
      <button id="right-arrow" onClick={scrollNext}>
        <img src={Arrow} alt="right-arrow" />
      </button> */}
      <div className="overflow-hidden w-full" ref={emblaRef}>
        <div className="relative flex mx-10 gap-5 cursor-grab active:cursor-grabbing z-10">
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
    <div className="flex flex-col flex-[0_0_6rem] w-32 mx-4 py-3 px-2">
      <i className={`text-6xl text-center mb-2 ${icon}`} />
      <p className="mt-1 text-xs text-center uppercase">{name}</p>
    </div>
  );
}

export default SkillsCarousel;
