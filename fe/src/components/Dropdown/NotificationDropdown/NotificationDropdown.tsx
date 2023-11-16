import { notifications } from "../../../constants/dummy";

const NotificationDropDown = () => {
  return (
    <ul className="dropdown-list notification-dropdown-list">
      {notifications.map((notification) => (
        <li
          key={notification.id}
          className="dropdown-link notification-dropdown-link"
        >
          {notification.notification.length > 25
            ? `${notification.notification.substring(0, 25)} . . .`
            : notification.notification}
        </li>
      ))}
    </ul>
  );
};

export default NotificationDropDown;
