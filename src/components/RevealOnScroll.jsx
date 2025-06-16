import { useEffect, useRef } from "react";

export const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.classList.add("visible");
    }

    const node = ref.current;
    if (!node) return;

    const checkAndReveal = () => {
      const rect = node.getBoundingClientRect();
      if (
        rect.top < window.innerHeight * 0.8 &&
        rect.bottom > window.innerHeight * 0.2
      ) {
        node.classList.add("visible");
      }
    };

    checkAndReveal(); 

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("visible");
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.remove("no-js");
  }, []);

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
};