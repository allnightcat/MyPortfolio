import "../CSS/Header.scss";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import MenuDataList from "../Assets/MenuData.json";
import { useCallback, useState } from "react";

const Header = () => {
  const [menus, setMenus] = useState(MenuDataList);
  const onDisplay = useCallback(
    (id) => {
      setMenus(
        menus.map((menu) =>
          menu.id === id
            ? { ...menu, display: true }
            : { ...menu, display: false }
        )
      );
    },
    [menus]
  );
  const onUnDisplay = useCallback(
    (id) => {
      setMenus(
        menus.map((menu) =>
          menu.id === id ? { ...menu, display: false } : menu
        )
      );
      console.log("test");
    },
    [menus]
  );

  return (
    <div>
      <header>
        <div className="inner_container">
          <div className="logo">
            <p>yejin's portfolio</p>
          </div>
          <div className="navigation">
            {menus.map((item) => {
              return (
                <div key={item.id}>
                  <li
                    className="menu-list-item"
                    onMouseOver={() => onDisplay(item.id)}
                    onMouseOut={() => onUnDisplay(item.id)}
                  >
                    <Link to={item.link}>{item.name}</Link>
                    {item.display ? (
                      <DropdownMenu submenu={item.submenu} />
                    ) : null}
                  </li>
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
