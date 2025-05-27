import "./App.css";
import "./index.css";
import { LandingPage } from "./components/LandingPage";
import { useState } from "react";
import { NavBar } from "./components/NavBar";
import { MobileView } from "./components/MobileView";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LandingPage onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-[#efefe9] text-[#223030]`}
      >
        <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileView menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Contact />
      </div>
    </>
  );
}

export default App;
