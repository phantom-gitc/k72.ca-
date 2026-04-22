import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Agence from "./pages/Agence";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const App = () => {
  const stairParentRef = useRef(null);

  useGSAP(function () {
    const tl = gsap.timeline();

    tl.to(stairParentRef.current, {
      display: "block",
    });
    tl.from(".stairs", {
      height: 0,
      stagger: {
        // duration: 0.5,
        amount: -0.25,
      },
    });
    tl.to(".stairs", {
      y: "100%",
      stagger: {
        duration: 0.1,
        amount: -0.25,
      },
    });
    tl.to(stairParentRef.current, {
      display: "none",
    });
    tl.to(".stairs", {
      y: 0,
    });
  });
  
  return (
    <div>
      <div ref={stairParentRef} className="h-screen w-full  z-20 top-0">
        <div className="h-full w-full flex ">
          <div className=" stairs h-full w-1/5 bg-black "></div>
          <div className=" stairs h-full w-1/5 bg-black "></div>
          <div className=" stairs h-full w-1/5 bg-black "></div>
          <div className=" stairs h-full w-1/5 bg-black "></div>
          <div className=" stairs h-full w-1/5 bg-black "></div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/agence" element={<Agence />} />
      </Routes>
    </div>
  );
};

export default App;
