import React, { useEffect, useState } from "react";

export const SectionOne = () => {

    const [hideScrollText, setHideScrollText] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollThreshold = 100;
  
        if (window.scrollY > scrollThreshold) {
          setHideScrollText(true);
        } else {
          setHideScrollText(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return (
        <section className="section one">
            <div className="nav">
                <div className="left-content">
                    <h1>SODA</h1>
                </div>
                <div className="right-content">
                    <div className="linksone" >
                      <a href="https://twitter.com/L7XICZ" target="_blank">
                        <i className="fa-solid fa-link"></i>
                      </a>
                    </div>
                    <div className="links">
                            <h1>RAINER AHI</h1>
                    </div>
                </div>
            </div  >
        </section>
    )
}