function Contact() {
  return (
    <div className="contact bg-gray-950 p-4 text-white">
      <h2 className="text-center text-2xl font-bold font-Montserrat underline pb-5">
        Contact me
      </h2>
      <div className="flex flex-col gap-4">
        <p className="font-semibold text-gray-100">
          Please get in touch if you think our work could be mutually
          beneficial!
        </p>

        <div>
          <p>1234 Random Road</p>
          <p>Random Town, California 12345</p>
        </div>

        <div>
          <p>555-555-5555</p>
          <p>ashleywilliams.is.not.real@gmail.com</p>
        </div>
      </div>

      <div className="contact--external-links flex flex-row w-full">
        <img
          className="w-7"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
        />
        <img
          className="w-7"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
        />
      </div>
    </div>
  );
}

export default Contact;
