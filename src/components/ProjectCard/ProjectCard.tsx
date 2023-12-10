import { PropsWithChildren } from "react";
import { Project } from "../../types/types";

export default function ProjectCard({
  description,
  github,
  technologies,
  title,
  image,
  website,
}: Project) {
  return (
    <article className="relative mx-5 md:mx-20 mb-20 min-h-[300px]">
      <ImgContainer image={image} alt={title} />
      <Description
        info={description}
        title={title}
        stack={technologies}
        website={website}
        github={github}
      />
    </article>
  );
}

type ImgProps = { image: string; alt: string };
const ImgContainer = ({ image, alt }: ImgProps) => {
  return (
    <div className="rounded absolute shadow-xl shadow-lime-900 inset-0 overflow-clip bg-gradient-to-tr from-green-950 to-green-600">
      <img
        className="h-[130%] w-[130%] object-cover opacity-[0.10]"
        src={image}
        alt={alt}
      />
    </div>
  );
};

type DescriptionProps = {
  info: string;
  title: string;
  stack: string[];
  website: string;
  github: string;
};
const Description = ({
  info,
  title,
  stack,
  github,
  website,
}: DescriptionProps) => {
  const techStack = stack.map((value, i) => (
    <li key={i} className=" bg-green-600 rounded-md text-black px-3 py-2 mb-2">
      {value}
    </li>
  ));

  return (
    <div className="relative font-Montserrat">
      <div className="relative p-10 z-10 text-white">
        <h3 className="text-xl sm:text-3xl mb-3 uppercase">{title}</h3>
        <p className="text-base md:text-lg pb-3 ">{info}</p>
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 relative mt-5">
          <ul className="flex flex-wrap gap-5 relative z-10 text-xs isolate">
            {techStack}
          </ul>
          <div className="self-end flex gap-4">
            <Link href={website}>Preview</Link>
            <Link href={github}>Github</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

type LinkProps = { href: string };
const Link = ({ href, children }: PropsWithChildren<LinkProps>) => {
  return (
    <a
      target="_blank"
      href={href}
      className="bg-white px-4 py-2 rounded-md text-xs text-slate-900 font-semibold hover:text-black ease-out transition-all duration-150"
    >
      {children}
    </a>
  );
};
