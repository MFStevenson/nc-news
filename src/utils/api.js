import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://nc-news-7ebc.onrender.com/api",
});

export const getTopics = () => {
  return ncNewsApi.get("/topics");
};

export const postTopic = (postBody) => {
  return ncNewsApi.post(`/topics`, postBody);
};

export const getArticles = (
  topic = null,
  sortBy = "created_at",
  order = "desc"
) => {
  const params = { sort_by: sortBy, order: order, topic: topic };

  return ncNewsApi.get("/articles", {
    params: params,
  });
};

export const getArticleById = (article_id) => {
  return ncNewsApi.get(`/articles/${article_id}`).catch((err) => {
    return Promise.reject({
      status: err.response.status,
      msg: err.response.data.msg,
    });
  });
};

export const deleteArticle = (article_id) => {
  return ncNewsApi.delete(`/articles/${article_id}`);
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

export const patchCommentVotes = (comment_id, votes) => {
  return ncNewsApi.patch(`/comments/${comment_id}`, { inc_votes: votes });
};

export const getUser = (username) => {
  return ncNewsApi.get(`/users/${username}`).catch((err) => {
    return Promise.reject({
      status: err.response.status,
      msg: err.response.data.msg,
    });
  });
};
