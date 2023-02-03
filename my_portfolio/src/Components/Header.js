import React from "react";
import "../CSS/Header.scss";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <div>
      <header>
        <div className="inner_container">
          <div className="logo">
            <p>yejin's portfolio</p>
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
          <div className="lang-box">
            <a href="/">
              <img src="/img/icons/korea_flag.png" alt="korea flag" />
            </a>
            <a href="/">
              <img src="/img/icons/usa_flag.png" alt="USA flag" />
            </a>
            <a href="/">
              <img src="/img/icons/japan_flag.png" alt="Japan flag" />
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default header;
