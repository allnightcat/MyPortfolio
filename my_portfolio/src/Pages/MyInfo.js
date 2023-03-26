import React from "react";
import "../CSS/MyInfo.scss";

const MyInfo = () => {
  return (
    <div className="MyInfo">
      <div className="banner">
        <div className="banner-title">
          <h3>내 소개</h3>
          <div className="banner-text">
            <div>저를 소개하는 페이지입니다.</div>
            <div>이메일, 깃헙 주소, 블로그 주소 등을 확인할 수 있습니다.</div>
            <div>언어 능력과 자격증 등을 확인할 수 있습니다.</div>
          </div>
        </div>
        <div className="banner-img">
          <img src="/img/banners/my_info_banner_img_01.svg"></img>
        </div>
      </div>
      {/* 1. 내 소개 */}
      <div className="box">
        <div className="box-title">프로필</div>
        <div className="box-body">
          <div className="img-box">
            <img src="#" alt="나" />
          </div>
          <div className="info-box">
            <div>
              <span>이름</span>
              <span>강예진</span>
            </div>
          </div>
        </div>
      </div>
      {/* 2. 언어 능력 */}
      <div className="box">
        <div className="box-title">언어 능력</div>
        <div className="box-body">
          <div className="img-box">
            <img src="#" alt="나" />
          </div>
          <div className="info-box">
            <div>
              <span>이름</span>
              <span>강예진</span>
            </div>
          </div>
        </div>
      </div>
      {/* 3. 자격증 */}
      <div className="box">
        <div className="box-title">자격증</div>
        <div className="box-body">
          <div className="img-box">
            <img src="#" alt="나" />
          </div>
          <div className="info-box">
            <div>
              <span>이름</span>
              <span>강예진</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyInfo;
