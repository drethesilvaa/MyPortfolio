import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const SmoothScrollWrapper = ({ children }) => {
  const scrollRef = useRef(null);
  const scrollInstance = useRef(null);

  useEffect(() => {
    scrollInstance.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1.1,
      lerp: 0.08,
    });

    // Update scroll after short delay to avoid initial cutoff
    const timeout = setTimeout(() => {
      scrollInstance.current?.update();
    }, 500); // wait for layout/DOM to settle

    return () => {
      clearTimeout(timeout);
      scrollInstance.current?.destroy();
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      {children}
      <div className="h-24"></div>
    </div>
  );
};

export default SmoothScrollWrapper;
