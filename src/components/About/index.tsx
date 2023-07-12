function About() {
  return (
    <div className="about flex flex-col m-4">
      <div className="image-container relative">
        <img
          className="rounded-lg"
          alt="placeholder of me"
          src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <p className="absolute text-white text-3xl font-semibold bottom-2 left-2">
          Emanuel Llontop
        </p>
      </div>

      <div className="description">
        <h2 className="text-center font-semibold text-2xl py-3">About me</h2>
        <p className="text-zinc-600">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
      </div>
    </div>
  );
}

export default About;
