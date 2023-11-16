import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { handleClickOutside } from "../../../utils/handleClickOutside";

const ExamTipsModal = ({
  setIsModalOpen,
}: {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    document.addEventListener("click", (event: Event) => {
      handleClickOutside(ref, event, setIsModalOpen);
    });
    return () =>
      document.removeEventListener("click", (event: Event) =>
        handleClickOutside(ref, event, setIsModalOpen)
      );
  }, [ref]);
  return (
    <div className="modal">
      <div ref={ref} className="modal-card">
        <h2 className="modal-title">Exam Tip</h2>
        <p className="modal-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          reiciendis in quibusdam id quo delectus quae, quos eum laborum? Nemo
          cum deserunt eveniet ab voluptates a sed atque asperiores nostrum,
          alias aliquam ratione perspiciatis dolor corrupti natus perferendis
          error nulla, assumenda aspernatur.
        </p>
        <div className="modal-buttons">
          <button className="modal-button button-info">New Tip</button>
          <button
            className="modal-button button-danger"
            onClick={() => setIsModalOpen(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExamTipsModal;
