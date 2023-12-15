import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <header>
      <Link to="/">
        <h1>NC News</h1>
      </Link>
      {Object.keys(user).length ? (
        <Link to="/profile">
          <img
            id="header-profile-pic"
            src={user.avatar_url}
            alt="profile picture"
          ></img>
        </Link>
      ) : (
        <Link to="/signin">Login</Link>
      )}
    </header>
  );
};

export default Header;
