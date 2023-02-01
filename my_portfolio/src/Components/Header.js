import React from "react";
import "../CSS/Header.scss";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <div>
      <header>
        <div className="inner_container">
          <div className="logo">
            <img src="img/logos/main_logo.jpg" alt="main_logo" />
          </div>

          <div className="navigation">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/my_info">내 소개</Link>
            </li>
            <li>
              <Link to="/project/work">프로젝트(회사)</Link>
            </li>
            <li>
              <Link to="/project/personal">프로젝트(개인)</Link>
            </li>
            <li>
              <Link to="/studied">공부한 것</Link>
            </li>
          </div>
          {/* 언어 변경 박스 */}
          <div></div>
        </div>
      </header>
    </div>
  );
};

export default header;
