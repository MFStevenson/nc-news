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
      <Link to="/" id="profile-pic-link">
        {Object.keys(user).length ? (
          <img
            id="header-profile-pic"
            src={user.avatar_url}
            alt="profile picture"
          ></img>
        ) : (
          <button id="profile-btn">Login</button>
        )}
      </Link>
    </header>
  );
};

export default Header;
