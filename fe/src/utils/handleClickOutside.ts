import { Dispatch, RefObject, SetStateAction } from "react";

export const handleClickOutside = (
  ref: RefObject<HTMLElement>,
  event: Event,
  setIsOpen: Dispatch<SetStateAction<boolean>>
) => {
  if (ref?.current && !ref.current.contains(event.target as Node))
    setIsOpen(false);
};
