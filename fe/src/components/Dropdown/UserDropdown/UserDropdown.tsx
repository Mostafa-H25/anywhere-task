import { authenticate } from "../../../services/redux/reducers/globalReducer";
import { useAppDispatch } from "../../../services/redux/store";

const UserDropDown = () => {
  const dispatch = useAppDispatch();
  return (
    <ul className="dropdown-list user-dropdown-list">
      <li className="dropdown-link user-dropdown-link">Profile</li>
      <li className="dropdown-link user-dropdown-link">Settings</li>
      <li
        onClick={() => {
          dispatch(authenticate(false));
        }}
        className="dropdown-link user-dropdown-link"
      >
        Logout
      </li>
    </ul>
  );
};

export default UserDropDown;
