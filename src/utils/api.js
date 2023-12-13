import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://nc-news-7ebc.onrender.com/api",
});

export const getTopics = () => {
  return ncNewsApi.get("/topics");
};

export const getArticles = (topic = null, sortBy = null, order = null) => {
  const params = { topic: topic, sort_by: sortBy, order: order };

  return ncNewsApi.get("/articles", {
    params: params,
  });
};

export const getArticleById = (article_id) => {
  return ncNewsApi.get(`/articles/${article_id}`);
};

export const getArticleComments = (article_id) => {
  return ncNewsApi.get(`/articles/${article_id}/comments`);
};

export const patchArticleVotes = (article_id, votes) => {
  return ncNewsApi.patch(`/articles/${article_id}`, { inc_votes: votes });
};

export const postComment = (article_id, postBody) => {
  return ncNewsApi.post(`/articles/${article_id}/comments`, postBody);
};

export const deleteComment = (comment_id) => {
  return ncNewsApi.delete(`/comments/${comment_id}`);
};
