import React from "react";
import "../CSS/Main.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Main = () => {
  return (
    <div className="Main">
      <article>
        <section>
          <div className="text-container">
            <h3>안녕하세요.</h3>
            <p>강예진입니다.</p>
          </div>
          <div className="img-container">
            <img
              src="/img/banners/main_banner_img_01.svg"
              alt="일하는 여자 이미지"
            />
          </div>
        </section>
      </article>
    </div>
  );
};

export default Main;
