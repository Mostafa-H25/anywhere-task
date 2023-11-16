// Components
import { useEffect, useState } from "react";
import Announcement from "../../components/Announcement/Announcement";
import Banner from "../../components/Banner/Banner";
import MenuDropDown from "../../components/Dropdown/MenuDropdown/MenuDropdown";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Todo from "../../components/Todo/Todo";
import ExamTipsModal from "../../components/Modal/ExamTipsModal/ExamTipsModal";

const Dashboard = () => {
  const [toggleView, setToggleView] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isExamTipsModalOpen, setIsExamTipsModalOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setToggleView(false);
      } else {
        setToggleView(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className="page">
      {toggleView ? <Sidebar /> : <></>}
      <main className="grid">
        <Header toggleView={toggleView} isOpen={isOpen} setIsOpen={setIsOpen} />
        {toggleView ? <></> : <MenuDropDown isOpen={isOpen} />}
        <div className="main">
          <Banner setIsModalOpen={setIsExamTipsModalOpen} />
          <div className="sub-section">
            <Announcement />
            <Todo />
          </div>
        </div>
        <footer className="footer"></footer>
      </main>
      {isExamTipsModalOpen ? (
        <ExamTipsModal setIsModalOpen={setIsExamTipsModalOpen} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Dashboard;
