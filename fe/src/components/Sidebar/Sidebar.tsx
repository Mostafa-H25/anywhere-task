import { Link } from "react-router-dom";
import { sidebarLinks } from "../../constants/constants";

const Sidebar = () => {
  return (
    <section className="sidebar">
      <Link to="/dashboard" className="brand">
        Coligo
      </Link>
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
};

export default Sidebar;
