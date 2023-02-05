import React from "react";
import "../CSS/DropdownMenu.scss";
import { Link } from "react-router-dom";

const DropdownMenu = ({ submenu }) => {
  submenu.map((item) => {
    console.log(item.sub_name);
  });
  return (
    <div id={submenu.id} className="DropdownMenu">
      <ul>
        {submenu.map((item) => {
          return (
            <Link to={item.sub_link}>
              <li key={item.id}>{item.sub_name}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default DropdownMenu;
