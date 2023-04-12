import AboutLeftSide from "@/components/about/AboutLeftSide";
import AboutMainSide from "@/components/about/AboutMainSide";
import NavigateHeader from "@/components/nav/Nav";
import { useEffect, useState } from "react";

function About() {
  const [width, setWidth] = useState(0)
  useEffect(()=>{
    const screenWidth = window.screen.width;
    setWidth(screenWidth)
  }, [])
  return (
      <div className="about-page">
        {
          width <= 900 ?
          <NavigateHeader />
          : null
        }
        <AboutLeftSide />
        <AboutMainSide />
      </div>
  );
}

export default About;