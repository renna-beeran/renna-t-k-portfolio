import { useEffect, useState } from "react";

export const LandingPage = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "Hey There!";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 zet-50 bg-[var(--color-bg)] text-[#223030]-100 flex flex-col items-center justify-center">
      <div className="mb-4 text-5xl font-mono font-bold tracking-wide text-[#2a2d34]">
        {text} <span className="animate-blink ml-1">|</span>
      </div>
      <div className="w-[160px] h-[3px] bg-[#d2e3c8] rounded-full overflow-hidden shadow-inner shadow-[#f6e9e9]">
        <div className="w-[40%] h-full bg-[#ac9c8d] animate-loading-bar rounded-full"></div>
      </div>
    </div>
  );
};
