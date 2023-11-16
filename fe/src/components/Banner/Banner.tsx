import React, { Dispatch, SetStateAction } from "react";

const Banner = ({
  setIsModalOpen,
}: {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <article className="banner">
      <div className="banner-container">
        <h2>Exam Time</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem iusto,
          labore recusandae in ipsam, placeat nesciunt magni, perferendis
          aliquam amet consectetur dolor neque. Soluta suscipit minus ducimus
          vel ratione magnam!
        </p>
        <q>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          facere.
        </q>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsModalOpen(true);
          }}
        >
          View Exam Tips
        </button>
      </div>
    </article>
  );
};

export default Banner;
