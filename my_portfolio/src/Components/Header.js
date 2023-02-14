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
          <div className="hamburder-menu">
            <div className="menu-icon">
              <img src="/img/icons/mobile_menu.png " alt="메뉴 열기" />
            </div>
            <div className="mobile-menu-list">
              <div className="mobile-lang-box">
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
              <div className="mobile-menu-box">
                {menus.map((menu) => {
                  return (
                    <div className="mobile-menu" key={menu.id}>
                      {menu.submenu.length === 0 ? (
                        <Link to={menu.link} className="main-menu one-menu">
                          {menu.name}
                        </Link>
                      ) : (
                        <div className="main-menu">{menu.name}</div>
                      )}

                      <div className="sub-menu">
                        {menu.submenu.length === 0
                          ? null
                          : menu.submenu.map((sub_menu) => {
                              return (
                                <Link
                                  to={sub_menu.sub_link}
                                  className="menu-group"
                                  key={sub_menu.id}
                                >
                                  {sub_menu.sub_name}
                                </Link>
                              );
                            })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
