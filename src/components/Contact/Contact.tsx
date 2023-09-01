import { PropsWithChildren } from "react";
import NoiseBg from "../../assets/noise_background.png";
import Footer from "../Footer/Footer";

function Contact() {
  const style = { backgroundImage: `url(${NoiseBg})` };
  return (
    <section
      id="contact"
      className="relative bg-black text-white font-Montserrat px-5 py-7 md:px-20 md:pt-24 md:pb-10"
      style={style}
    >
      <Email />
      <div className="relative flex flex-col md:flex-row gap-20">
        <div>
          <h5 className="text-gray-500">Contact Details</h5>
          <p> +51 991586055</p>
        </div>
        <div>
          <h5 className="text-gray-500">Socials</h5>
          <ul>
            <A href="https://www.linkedin.com/in/emanuel-llontop-huiza-221043272/">
              LinkedIn
            </A>
            <A href=""> Facebook</A>
            <A href=""> Instagram</A>
            <A href="https://github.com/WillAvatec"> Github</A>
          </ul>
        </div>
        <div>
          <h5 className="text-gray-500">Location</h5>
          <p>Peru</p>
        </div>
      </div>
      <Footer />
    </section>
  );
}

const Email = () => (
  <a
    className="flex flex-row gap-5 mb-10 max-w-min"
    href="mailto:avatec2312@gmail.com"
  >
    <h2 className="text-xl sm:text-2xl md:text-5xl font-bold underline uppercase z-20">
      avatec2312@gmail.com
    </h2>
    <div className="relative w-5 h-5 hidden sm:block md:w-10 md:h-10 aspect-square">
      <div className="absolute top-0 right-0 bg-white w-3/4 h-1/6" />
      <div className="absolute right-0 bg-white w-1/6 h-3/4" />
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -rotate-45 bg-white w-full h-1/6" />
    </div>
  </a>
);

interface AProps extends PropsWithChildren {
  href: string;
}

const A = ({ href, children }: AProps) => (
  <a target="_blank" href={href} className="uppercase pr-7">
    {children}
  </a>
);

export default Contact;
