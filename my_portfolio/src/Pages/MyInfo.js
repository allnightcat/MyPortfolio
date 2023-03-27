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
            <div>
              <span>이메일</span>
              <span>allnightcat12@gmail.com</span>
            </div>
            <div>
              <span>깃헙주소</span>
              <span>https://github.com/allnightcat</span>
            </div>
          </div>
        </div>
      </div>
      {/* 2. 언어 능력 */}
      <div className="box">
        <div className="box-title">언어 능력</div>
        <div className="box-body">
          <div className="info-box">
            <div className="small-box">
              <div className="name">영어</div>
              <div>
                <span>TOEIC 855</span>
                <span>2022.11.20 취득</span>
              </div>
              <div>
                <span>TOEIC SPEAKING 150(IH)</span>
                <span>2022.11.20 취득</span>
              </div>
              <div>일상적인 대화가 가능합니다.</div>
              <div>비즈니스 이메일을 이해하고 작성할 수 있습니다.</div>
            </div>
            <div className="small-box">
              <div className="name">일본어</div>
              <div>
                <span>JLPT N2</span>
                <span>2019.12.01 취득</span>
              </div>
              <div>일상적인 대화가 가능합니다.</div>
              <div>6개월간 일본 거주 경험이 있습니다.</div>
            </div>
          </div>
        </div>
      </div>
      {/* 3. 자격증 */}
      <div className="box">
        <div className="box-title">자격증</div>
        <div className="box-body">
          <div className="info-box">
            <div>
              <span className="name">정보처리기사</span>
              <span>2021.06.01 취득</span>
            </div>
            <div>
              <span className="name">CLAD</span>
              <span>Certified LabVIEW Associate Developer</span>
              <span>2020.10.01 취득</span>
            </div>
            <div>
              <span className="name">ICDL</span>
              <span>International Computer Driving Licence</span>
              <span>2020.10.01 취득</span>
            </div>
            <div>
              <span className="name">운전면허 2종 보통</span>
              <span>2020.10.01 취득</span>
            </div>
            <div>
              <span className="name">한국사능력검정시험 1급</span>
              <span>2020.10.01 취득</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyInfo;
