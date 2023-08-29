import { PropsWithChildren } from "react";
import NoiseBg from "../../assets/noise_background.png";

function Contact() {
  const style = { backgroundImage: `url(${NoiseBg})` };
  return (
    <section className="bg-black text-white font-Montserrat p-16" style={style}>
      <Email />
      <div className="flex flex-row gap-20">
        <div>
          <h5 className="text-gray-500">Contact Details</h5>
          <p> +51 991586055</p>
        </div>
        <div>
          <h5 className="text-gray-500">Socials</h5>
          <ul>
            <A href=""> LinkedIn</A>
            <A href=""> Facebook</A>
            <A href=""> Instagram</A>
            <A href=""> Behance</A>
          </ul>
        </div>
        <div>
          <h5 className="text-gray-500">Location</h5>
          <p>Peru</p>
        </div>
      </div>
    </section>
  );
}

const Email = () => (
  <a className="flex flex-row gap-5 mb-10 max-w-min" href="#about">
    <h2 className="text-7xl font-bold underline uppercase">
      avatec2312@gmail.com
    </h2>
    <div className="relative w-16 h-16 aspect-square">
      <div className="absolute top-0 right-0 bg-white w-3/4 h-3" />
      <div className="absolute right-0 bg-white w-3 h-3/4" />
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -rotate-45 bg-white w-full h-3" />
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
