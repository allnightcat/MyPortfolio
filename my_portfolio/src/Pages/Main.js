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
            <div className="texts">
              <h3>프론트엔드 개발자 / 강예진</h3>
              <p>
                사용자의 관점에서 직관적이고 편리한 서비스를 개발하고자 노력하고
                있습니다.
              </p>
              <p>기본을 중요하게 생각하며 배움을 즐기고 있습니다.</p>
              <p>
                업무를 주도적으로 해결하고자 하며 숲을 보고 나무를 관찰하는
                사람입니다.
              </p>
            </div>
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
