import React, { useState, useEffect } from "react";
import "../CSS/Header.scss";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import MenuDataList from "../Assets/MenuData.json";

const Header = () => {
  return (
    <div>
      <header>
        <div className="inner_container">
          <div className="logo">
            <p>yejin's portfolio</p>
          </div>
          <div className="navigation">
            {MenuDataList.map((item, index) => {
              return (
                <div key={index}>
                  <li>
                    <Link to={item.link}>{item.name}</Link>
                  </li>
                  <DropdownMenu submenu={item.submenu} />
                </div>
              );
            })}
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

export default Header;
