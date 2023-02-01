import React from "react";
import "../CSS/Main.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Main = () => {
  const SliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="Main">
      <div className="banners">
        <Slider {...SliderSettings}>
          <div>
            <img src="img/banners/main_01.jpg" alt="banner1" />
          </div>
          <div>
            <img src="img/banners/main_02.jpg" alt="banner2" />
          </div>
          <div>
            <img src="img/banners/main_03.jpg" alt="banner2" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Main;
