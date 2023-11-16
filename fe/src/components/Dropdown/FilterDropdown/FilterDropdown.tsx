import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { filters } from "../../../constants/constants";
import { handleClickOutside } from "../../../utils/handleClickOutside";

const FilterDropdown = ({
  setFilter,
  setIsOpen,
}: {
  setFilter: Dispatch<SetStateAction<string>>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const ref = useRef<HTMLUListElement>(null);
  useEffect(() => {
    document.addEventListener("click", (event: Event) => {
      handleClickOutside(ref, event, setIsOpen);
    });
    return () =>
      document.removeEventListener("click", (event: Event) =>
        handleClickOutside(ref, event, setIsOpen)
      );
  }, [ref]);

  return (
    <ul ref={ref} className="dropdown-list filter-dropdown-list">
      {filters.map((filter) => (
        <li
          key={filter.id}
          onClick={() => {
            setFilter(filter.title);
            setIsOpen(false);
          }}
          className="dropdown-link filter-dropdown-link"
        >
          {filter.title}
        </li>
      ))}
    </ul>
  );
};

export default FilterDropdown;
