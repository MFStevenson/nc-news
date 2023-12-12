import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://nc-news-7ebc.onrender.com/api",
});

export const getTopics = () => {
  return ncNewsApi.get("/topics");
};

export const getArticles = (topic) => {
  return ncNewsApi.get("/articles", { params: { topic: topic } });
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
