import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { getUser } from "../utils/api";

const SignInPage = () => {
  const { user, setUser } = useContext(UserContext);
  const [input, setInput] = useState("");
  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  const updateInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    getUser(input)
      .then((res) => {
        setUser(res.data);
        
      })
      .catch(() => {
        setErr("Something went wrong, please try again");
      });

    e.preventDefault();
    setUser((currUser) => {
      return { ...currUser, username: input };
    });
    setInput("");
  };

  if (user.username) {
    useEffect(() => {
      navigate("/profile");
    }, []);
  } else {
    return (
      <>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Username*{" "}
            <input
              required
              type="text"
              placeholder="username"
              value={input}
              onChange={updateInput}
            ></input>
          </label>
          <Link to="/profile">
            <button id="sign-in-btn">Sign in</button>
          </Link>
          {err ? <p>{err}</p> : null}
        </form>

        <p> Don't have an account?</p>
        <Link to={"/register"}>Register Here</Link>
      </>
    );
  }
};

export default SignInPage;
