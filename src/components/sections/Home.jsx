import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#7d6353] to-[#3f322b]
        bg-clip-text text-transparent leading-right"
          >
            Hi, I'm Renna T K
          </h1>
          <p className="text-[#4e4640] text-sm mb-8 max-w-lg mx-auto">
            A Full-Stack Developer blending design and logic for seamless
            digital experiences.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#about"
              className="bg-[#72383d] text-[#efefe9] py-3 px-6 rounded font-medium transition relative overflow-hidden 
            hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] hover:bg-[#a34e56]"
            >
              About Me
            </a>

            <a
              href="#contact"
              className="border border-[#ac9c8d] text-[#72383d] py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-[#dadad7]"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
