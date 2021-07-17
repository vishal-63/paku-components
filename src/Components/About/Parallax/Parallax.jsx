import { useState, useEffect } from "react";
import {
  ParallaxContainer,
  ParallaxContent,
  ParallaxImage,
  ParallaxTitle,
  ParallaxSubtitle,
  ParallaxInfo,
  ParallaxDiv,
  ParallaxNumber,
  ParallaxText,
} from "./ParallaxElements";
import parallaxImage from "../../../Images/parallax.png";

const Parallax = () => {
  const [offsetY, setOffsetY] = useState(0);
  var variable = 2;

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.innerWidth < 768) {
      variable = 1;
      if (window.pageYOffset >= 1700) {
        setOffsetY(window.pageYOffset / 10);
      } else {
        setOffsetY(0);
      }
    } else {
      setOffsetY(window.pageYOffset / 4);
      if (window.pageYOffset < 0) {
        setOffsetY(0);
      }
    }
  };

  return (
    <ParallaxContainer>
      <ParallaxImage
        src={parallaxImage}
        alt="parallax-image"
        style={{
          transform: `translate(-50%, calc( ${offsetY * variable}px - 20%))`,
        }}
      />
      <ParallaxContent>
        <ParallaxTitle>Some Facts About Us</ParallaxTitle>
        <ParallaxSubtitle>
          Delivering some effective and high-quality business solutions
        </ParallaxSubtitle>

        <ParallaxInfo id="parallax-info">
          <ParallaxDiv>
            <ParallaxNumber className="parallax-number">1.6k</ParallaxNumber>
            <ParallaxText>Projects</ParallaxText>
          </ParallaxDiv>
          <ParallaxDiv>
            <ParallaxNumber className="parallax-number">27</ParallaxNumber>
            <ParallaxText>Winning Awards</ParallaxText>
          </ParallaxDiv>
          <ParallaxDiv>
            <ParallaxNumber className="parallax-number">87</ParallaxNumber>
            <ParallaxText>Proffesionals</ParallaxText>
          </ParallaxDiv>
          <ParallaxDiv>
            <ParallaxNumber className="parallax-number">99%</ParallaxNumber>
            <ParallaxText>Satisfaction</ParallaxText>
          </ParallaxDiv>
        </ParallaxInfo>
      </ParallaxContent>
    </ParallaxContainer>
  );
};

export default Parallax;
