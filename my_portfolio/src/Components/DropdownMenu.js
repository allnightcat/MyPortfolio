import React from "react";
import "../CSS/DropdownMenu.scss";

const DropdownMenu = ({ submenu }) => {
  console.log(Object.keys(submenu).length === 0);
  return (
    <div className="DropdownMenu">
      <ul></ul>
    </div>
  );
};

export default DropdownMenu;
