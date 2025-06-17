import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-[var(--color-bg)] text-[var(--color-text)]"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent leading-right"
            style={{
              backgroundImage: "linear-gradient(to right, #72383d, #ac9c8d)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            I'm Renna T K
          </h1>
          <p className="text-[var(--color-accent2)] text-sm mb-8 max-w-lg mx-auto">
            A Full-Stack Developer blending design and logic for seamless
            digital experiences.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#about"
              className="bg-[var(--color-accent)] font-bold py-3 px-6 rounded font-medium transition relative overflow-hidden border border-[var(--color-accent)]
            hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(114,56,61,0.15)] hover:bg-[var(--color-accent)]"
              style={{ color: "#fff" }}
            >
              About Me
            </a>

            <a
              href="#contact"
              className="border border-[var(--color-border)] text-[var(--color-accent)] py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(114,56,61,0.2)] hover:bg-[var(--color-muted)]"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
