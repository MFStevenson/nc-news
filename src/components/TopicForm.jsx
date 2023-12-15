import { useState } from "react";
import { postTopic } from "../utils/api";

const TopicForm = ({ setTopics, setIsLoading }) => {
  const [formData, setFormData] = useState({ slug: "", description: "" });
  const [err, setErr] = useState(null);

  const updateFormData = (e) => {
    setFormData(() => {
      return { ...formData, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    postTopic(formData)
      .then((res) => {
        const { newTopic } = res.data;
        setTopics((currTopics) => {
          return [newTopic, ...currTopics];
        });
      })
      .catch((err) => {
        setErr("Something went wrong, please try again.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <p>Post a topic</p>
      <form id="topic-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            required
            type="text"
            name="slug"
            value={formData.slug}
            onChange={updateFormData}
          ></input>
        </label>
        <label>
          Description:
          <input
            required
            type="text"
            name="description"
            value={formData.description}
            onChange={updateFormData}
          ></input>
        </label>
        {err ? <p>{err}</p> : null}
        <button id="post-topic-btn">Post Topic</button>
      </form>
    </>
  );
};

export default TopicForm;
