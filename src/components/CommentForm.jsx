import { UserContext } from "../context/UserContext";
import { useContext, useState } from "react";
import { postComment } from "../utils/api";

const CommentForm = ({ article_id, setComments, setIsLoading, setErr }) => {
  const { user } = useContext(UserContext);
  const [input, setInput] = useState("");

  const updateInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const postBody = { username: user.username, comment: input };
    postComment(article_id, postBody)
      .then((res) => {
        const { postedComment } = res.data;
        setComments((currComments) => {
          return [postedComment, ...currComments];
        });
      })
      .catch((err) => {
        setErr("Something went wrong, please try again.");
      })
      .finally(() => {
        setIsLoading(false);
      });

    setInput("");
  };
  return (
    <section id="comment-form">
      <p>Post a comment</p>

      <form onSubmit={handleSubmit}>
        <label>
          Comment{" "}
          <textarea
            required
            type="text"
            placeholder="type comment here"
            value={input}
            onChange={updateInput}
            cols={45}
            rows={8}
          ></textarea>
        </label>
        <button id="comment-btn">Comment</button>
      </form>
    </section>
  );
};
export default CommentForm;
