import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate()

  const handleLogout = () => {
    setUser({});
    navigate('/')
  };


  return (
    <section id="profile-section">
      <h2>Welcome {user.username}</h2>
      <img id="profile-img" src={user.avatar_url} alt="profile picture"></img>
      <>
        
          <button onClick={handleLogout}>
            Logout
          </button>
        
      </>
    </section>
  );
};

export default ProfilePage;
