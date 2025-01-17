const Hero = () => {
  return (
    <main aria-labelledby="hero-heading" className="w-full py-12 text-center">
      <div className="container mx-auto">
        <header>
          <link rel="preconnect" href="https://fonts.googleapis.com" />

          <h1 id="hero-heading" className="mb-2 text-xl font-display">
            Hello there, I'm Elijah.
          </h1>
          <p className="font-bold text-4xl">
            Aspiring Software Engineer, <br /> currently learning React.
          </p>
        </header>
        <button
          aria-label="Connect with me"
          className="my-4 px-6 py-3 bg-black text-white rounded-md"
        >
          Let's connect
        </button>
      </div>
    </main>
  );
};

export default Hero;
