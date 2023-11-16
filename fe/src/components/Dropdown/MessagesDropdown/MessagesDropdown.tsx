import { messages } from "../../../constants/dummy";

const MessagesDropDown = () => {
  return (
    <ul className="dropdown-list message-dropdown-list">
      {messages.map((message) => (
        <li key={message.id} className="dropdown-link message-dropdown-link">
          <img src={message.user.department} alt="" />
          <div className="user-title">
            <h4>
              {message.user.title} &nbsp;
              {message.user.firstName} &nbsp;
              {message.user.lastName}
            </h4>
            <p className="link-text">
              {message.message.length > 25
                ? `${message.message.substring(0, 25)} . . .`
                : message.message}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MessagesDropDown;
