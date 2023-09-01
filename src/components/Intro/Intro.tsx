import { PropsWithChildren } from "react";
import Blob1 from "../../assets//blob1.svg";
import Me from "../../assets/photo-handsome-unshaven-guy-looks-with-pleasant-expression-directly-camera-removebg-preview.png";

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
    <div className="relative h-screen pt-40 flex-1 flex flex-col md:flex-row justify-between overflow-hidden intro-bg">
      {children}
    </div>
  );
};

const Left = () => {
  return (
    <div className="description flex flex-col justify-center md:-mr-32 px-4 sm:px-8 lg:pl-20 text-white font-Montserrat z-20">
      <p className="text-lg md:text-2xl">Hi, my name is</p>
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter">
        Emanuel Llontop
      </h1>
      <p className="text-lg md:text-2xl pb-5">
        Full Stack Developer based in Peru
      </p>
      <ContactButton />
    </div>
  );
};

const Right = () => {
  return (
    <div className="relative flex-1 flex items-center justify-center min-w-[50%] z-10 pt-4">
      <img
        className="absolute right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2 -z-20 w-[520px] md:w-[800px] lg:w-[130%] max-w-none select-none pointer-events-none"
        src={Blob1}
      />

      {/* w-72 sm:w-[500px] md:w-[400px] lg:w-[430px] xl:w-[600px] possible breakpoints */}
      <div className="relative h-full w-full">
        <img
          className="absolute w-full h-full object-cover overflow-visible z-20"
          alt="placeholder of me"
          src={Me}
        />
      </div>
    </div>
  );
};

const ContactButton = () => {
  return (
    <button
      className="text-whitest sm:text-xl md:text-2xl font-semibold z-10 border-orange-600 bg-black bg-opacity-50 border-4 px-2 py-1  sm:px-3 sm:py-2 md:px-4 md:py-3 transition-transform
      self-center
      sm:self-auto
      w-[230px]
      hover:scale-110
      sm:focus:outline-offset-8
      focus:outline-offset-6
      focus:outline-8 
      focus:outline-whitest
      hover:bg-orange-600
      active:bg-orange-600
    "
    >
      Get it touch
    </button>
  );
};
