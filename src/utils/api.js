import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://nc-news-7ebc.onrender.com/api",
});

export const getTopics = () => {
  return ncNewsApi.get("/topics");
};

export const getArticles = () => {
  return ncNewsApi.get("/articles");
};
