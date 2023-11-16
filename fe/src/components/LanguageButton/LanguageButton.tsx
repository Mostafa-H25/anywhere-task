import React from "react";

const LanguageButton = () => {
  const language = localStorage.getItem("i18nextLng");
  return <button className="navbar-button">{language}</button>;
};

export default LanguageButton;
