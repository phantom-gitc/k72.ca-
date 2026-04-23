import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

const Stairs = (props) => {
  const stairParentRef = useRef(null);
  const pageRef = useRef(null);

  const location = useLocation();
  const currentPath = location.pathname;

  useGSAP(
    () => {
      // Create timeline
      const timeline = gsap.timeline();

      // STEP 1: Show the stairs container
      timeline.set(stairParentRef.current, {
        display: "block",
      });

      // STEP 2: Animate stairs coming in (top to bottom)
      timeline.from(".stairs", {
        height: 0,
        duration: 0.5,
        stagger: {
          each: 0.06,
          from: "end",
        },
        ease: "expo.out",
      });

      // STEP 3: Animate stairs going down
      timeline.to(".stairs", {
        y: "100%",
        duration: 0.45,
        stagger: {
          each: 0.06,
          from: "end",
        },
        ease: "expo.in",
      });

      // STEP 4: Show the page (fade + slight zoom)
      timeline.fromTo(
        pageRef.current,
        {
          opacity: 0,
          scale: 1.3,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "expo.out",
        },
        "-=0.35" // start a bit earlier (overlap)
      );
      // STEP 5: Hide the stairs container
      timeline.set(stairParentRef.current, {
        display: "none",
      });

      // STEP 6: Reset stairs position for next use
      timeline.set(".stairs", {
        y: "0%",
      });
    },
    {
      dependencies: [currentPath],
      scope: stairParentRef,
    }
  );

  return (
    <div>
      {/* Stairs Overlay */}
      <div
        ref={stairParentRef}
        className="fixed top-0 left-0 h-screen w-full z-20 hidden"
      >
        <div className="h-full w-full flex">
          <div className="stairs h-full w-1/5 bg-black"></div>
          <div className="stairs h-full w-1/5 bg-black"></div>
          <div className="stairs h-full w-1/5 bg-black"></div>
          <div className="stairs h-full w-1/5 bg-black"></div>
          <div className="stairs h-full w-1/5 bg-black"></div>
        </div>
      </div>

      {/* Page Content */}
      <div ref={pageRef} className="h-screen w-full">
        {props.children}
      </div>
    </div>
  );
};

export default Stairs;