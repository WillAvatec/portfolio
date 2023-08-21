import { PropsWithChildren } from "react";
import SVG from "../../assets/ooorganize.svg";

export default function Introduction() {
  return (
    <IntroWrapper>
      <Left />
      <Right />
    </IntroWrapper>
  );
}

const IntroWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className="relative overflow-hidden flex flex-row bg-gradient-to-br from-purple-600 to-emerald-400  justify-between h-[calc(100vh_-_9rem)]">
      <img className="absolute z-10 mix-blend-soft-light w-full" src={SVG} />
      {children}
    </div>
  );
};

const Left = () => {
  return (
    <div className="description flex flex-col justify-center pl-10 text-white font-Montserrat z-20">
      <h1 className="text-7xl font-bold">Hi, I'm Emanuel Llontop</h1>
      <p className="text-4xl pl-10 pt-5 font-semibold">
        and I'm a <span className="text-amber-400">Web Developer.</span>
      </p>
    </div>
  );
};

const Right = () => {
  return (
    <div className="relative min-w-[50%] z-20 pt-10 pl-10">
      <div className="relative inline-block overflow-hidden rounded-full w-[700px] h-[700px] shadow-2xl">
        <img
          className="w-auto h-full object-cover"
          alt="placeholder of me"
          src="https://media.istockphoto.com/id/1197071216/photo/portrait-of-a-smart-and-handsome-it-specialist-wearing-glasses-smiles-behind-him-personal.jpg?s=612x612&w=0&k=20&c=Dy8TjvDmeXWhR6gAZ_OuqLu3ytUJmtycEYdVQenpWoI="
        />
      </div>
    </div>
  );
};
