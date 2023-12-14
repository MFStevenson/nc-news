import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    setUser({});
  };

  return (
    <section id="profile-section">
      <h2>Welcome {user.username}</h2>
      <img id="profile-img" src={user.avatar_url} alt="profile picture"></img>
      <>
        <Link id="logout-btn" to="/">
          <button onClick={handleLogout}>
            Logout
          </button>
        </Link>
      </>
    </section>
  );
};

export default ProfilePage;
