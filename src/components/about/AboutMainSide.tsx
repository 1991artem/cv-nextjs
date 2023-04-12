import { useState, useEffect } from "react";
import Experience from "../experience/Experience";
import NavigateHeader from "../nav/Nav";
import HeaderMain from "./HeaderMain";

function AboutMainSide() {
  const [width, setWidth] = useState(0)
  useEffect(()=>{
    const screenWidth = window.screen.width;
    setWidth(screenWidth)
  }, [])
  return ( 
    <div className="about-page_main">
            {
          width > 900 ?
          <NavigateHeader />
          : null
        }
    <HeaderMain />
    <Experience />
  </div>
   );
}

export default AboutMainSide;