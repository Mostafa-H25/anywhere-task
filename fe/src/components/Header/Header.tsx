import Search from "../Search/Search";
import { navbarLinks } from "../../constants/constants";
import MenuIcon from "@mui/icons-material/Menu";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { handleClickOutside } from "../../utils/handleClickOutside";

const HeaderDropDown = ({
  link,
}: {
  link: { id: string; icon: ReactNode; title: string; component: ReactNode };
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    document.addEventListener("click", (event: Event) =>
      handleClickOutside(ref, event, setIsOpen)
    );
    return () =>
      document.removeEventListener("click", (event: Event) =>
        handleClickOutside(ref, event, setIsOpen)
      );
  }, [ref]);

  return (
    <li ref={ref} className="icon" onClick={() => setIsOpen(!isOpen)}>
      {link.icon}
      {isOpen ? link.component : <></>}
    </li>
  );
};

const Header = ({
  toggleView,
  isOpen,
  setIsOpen,
}: {
  toggleView: boolean;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <nav className="header">
      <span className="mobile-menu" onClick={() => setIsOpen(!isOpen)}>
        <MenuIcon />
      </span>
      <h1>Welcome, User</h1>
      <div className="nav-left">
        {toggleView ? <Search /> : <></>}
        <ul className="icons-list">
          {navbarLinks.map((link) => (
            <HeaderDropDown key={link.id} link={link} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
