import "../CSS/Header.scss";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import MenuDataList from "../Assets/MenuData.json";
import { useState } from "react";

const Header = () => {
  return (
    <div>
      <header>
        <div className="inner_container">
          <div className="logo">
            <p>yejin's portfolio</p>
          </div>
          <div className="navigation">
            {MenuDataList.map((item) => {
              return (
                <div key={item.id}>
                  <li>
                    <Link to={item.link}>{item.name}</Link>
                  </li>
                  {item.display ? (
                    <DropdownMenu submenu={item.submenu} />
                  ) : null}
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
