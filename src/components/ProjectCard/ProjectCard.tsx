import { PropsWithChildren } from "react";
import { Project } from "../../types/types";

export default function ProjectCard({
  description,
  github,
  technologies,
  title,
  website,
}: Project) {
  return (
    <article
      className={`relative flex-col gap-3 items-center px-5 md:px-20 mb-20`}
    >
      <Description
        info={description}
        title={title}
        stack={technologies}
        website={website}
        github={github}
      />
      {/*<ImgContainer image={image} alt={title} href={website} />*/}
    </article>
  );
}

/* 
type ImgProps = { image: string; alt: string; href: string };
const ImgContainer = ({ image, alt, href }: ImgProps) => {
  return (
    <div className="relative hidden">
      <div className="inline-block w-full">
        <a href={href}>
          <img src={image} alt={alt}></img>
        </a>
      </div>
    </div>
  );
}; 
*/

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
    <li key={i} className="ml-5 bg-yellow-300 text-black px-2 py-1 mb-2">
      {value}
    </li>
  ));

  return (
    <div className="relative font-Montserrat">
      <div className="glowing-card relative p-10 z-10 opacity-90 backdrop-blur-md text-white">
        <h3 className="text-3xl mb-3 uppercase">{title}</h3>
        <p className="text-base  md:text-lg pb-3 ">{info}</p>
        <ul className="flex flex-wrap relative z-10 mt-6 text-xs">
          {techStack}
        </ul>
        <div className="flex items-center justify-end gap-8 relative mt-5">
          <Link href={website}>Preview</Link>
          <Link href={github}>Github</Link>
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
      className="bg-orange-500 px-4 py-2 rounded-full text-xs text-white font-semibold hover:text-black outline outline-2 hover:outline-offset-4 outline-orange-500 ease-out transition-all duration-150"
    >
      {children}
    </a>
  );
};
