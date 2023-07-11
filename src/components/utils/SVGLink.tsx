function SVGLink({
  src,
  alt,
  href,
}: {
  src: string;
  alt: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="z-10 inline-block w-6 h-auto"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={src} alt={alt} />
    </a>
  );
}

export default SVGLink;
