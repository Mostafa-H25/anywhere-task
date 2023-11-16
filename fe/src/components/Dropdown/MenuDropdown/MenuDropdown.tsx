import { sidebarLinks } from "../../../constants/constants";
import Search from "../../Search/Search";

const MenuDropDown = ({ isOpen }: { isOpen: boolean }) => {
  if (isOpen) {
    return (
      <section className="sidebar">
        <Search />
        <ul className="links-container">
          {sidebarLinks.map((link) => (
            <li key={link.id} className="link">
              <a href="#">
                <span className="icon">{link.icon}</span>
                <span className="title">{link.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    );
  }
};

export default MenuDropDown;
