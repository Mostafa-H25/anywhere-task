import { Link } from "react-router-dom";
import { authenticate } from "../../services/redux/reducers/globalReducer";
import { useAppDispatch } from "../../services/redux/store";

const Navigation = () => {
  const dispatch = useAppDispatch();
  return (
    <nav className="navigation">
      <div className="navigation-container">
        <h1 className="brand">Coligo</h1>
        <ul className="navigation-list">
          <li
            onClick={() => {
              dispatch(authenticate(true));
            }}
          >
            <Link to="/dashboard" className="active">
              Login
            </Link>
          </li>
          <li>
            <Link to="/" className="active">
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
