import React from "react";
import "./Hero.css";
import Image3 from "../../Assets/image3.png";
import Image4 from "../../Assets/image4.png";
import Image5 from "../../Assets/image5.png";
import Image6 from "../../Assets/image6.png";
import Frame from "../../Assets/Frame137.png";

function Hero() {
  return (
    <>
      <div className="container p-0">
        <div className="hero">
          <div className="hero__section">
            <div className="hero__head">
              <p>
                Rent a <span>Place</span> away from <span>Home</span> in the
                <span>Metaverse</span>
              </p>
            </div>
            <div className="hero__body">
              <p>
                we provide you access to luxury and affordable houses in the
                metaverse, get a chance to turn your imagination to reality at
                your comfort zone
              </p>
            </div>
            <div className="hero__search">
              <input type="text" placeholder="Search for location" />
              <input type="button" value="search" />
            </div>
          </div>
          <div className="hero__image">
            <div className="hero__image_1">
              <img src={Image4} alt="" />
              <img src={Image6} alt="" />
            </div>
            <div className="hero__image_2">
              <img src={Image3} alt="" />
              <img src={Image5} alt="" />
            </div>
          </div>
        </div>
      </div>
      <img src={Frame} alt="" className="image__Frame" />
    </>
  );
}

export default Hero;
