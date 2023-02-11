import "../CSS/DropdownMenu.scss";
import { Link } from "react-router-dom";

const DropdownMenu = ({ submenu }) => {
  return (
    <div className="DropdownMenu">
      <ul>
        {submenu.map((item) => {
          return (
            <Link to={item.sub_link} key={item.id}>
              <li key={item.id}>{item.sub_name}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default DropdownMenu;
