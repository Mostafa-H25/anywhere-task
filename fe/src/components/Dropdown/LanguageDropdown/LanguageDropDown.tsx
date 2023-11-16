import { locales } from "../../../constants/constants";
import i18n from "../../../services/i18n/i18n";

const LanguageDropdown = () => {
  return (
    <ul className="dropdown-list user-dropdown-list">
      {Object.keys(locales).map((locale) => (
        <li
          key={locale}
          onClick={() => {
            i18n.changeLanguage(locale);
          }}
          className="dropdown-link user-dropdown-link"
        >
          {locales[locale]}
        </li>
      ))}
    </ul>
  );
};

export default LanguageDropdown;
