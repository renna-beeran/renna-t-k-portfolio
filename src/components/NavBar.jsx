import { useEffect, useState } from "react";

export const NavBar = ({ menuOpen, setMenuOpen }) => {
  // Default to light mode
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.99)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a
            href="#home"
            className="font-mono text-xl font-bold text-[#223030]"
          >
            Renna T K
            <div className="font-mono text-[10px] text-[#ac9c8d]">
              Full Stack Developer
            </div>
          </a>

          {/* Dark/Light mode toggle button */}
          <button
            aria-label="Toggle dark mode"
            className="ml-4 p-2 rounded-full border border-[#a79c8d] bg-transparent hover:bg-[#f5f3f0]/20 transition-colors"
            onClick={() => setDarkMode((prev) => !prev)}
          >
            {darkMode ? (
              <span role="img" aria-label="Light mode">🌞</span>
            ) : (
              <span role="img" aria-label="Dark mode">🌙</span>
            )}
          </button>

          <div
            className="w-7 h-5 text-[#a79c93] hover:text-[#72383d] relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776; {/* unicode for hamburger */}
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-[#a79c93] hover:text-[#72383d] transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-[#a79c93] hover:text-[#72383d] transition-colors"
            >
              About
            </a>
            {/* <a
              href="#projects"
              className="text-[#a79c93] hover:text-[#72383d] transition-colors"
            >
              Projects
            </a> */}
            <a
              href="#contact"
              className="text-[#a79c93] hover:text-[#72383d] transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
