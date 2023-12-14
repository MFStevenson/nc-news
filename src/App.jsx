import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import TopicsPage from "./pages/TopicsPage";
import SingleArticlePage from "./pages/SingleArticlePage";
import Navbar from "./components/Navbar";
import ArticlesPage from "./pages/ArticlesPage";
import CommentsPage from "./pages/CommentsPage";
import ArticleTopicsPage from "./pages/ArticleTopicsPage";
import Error from "./components/Error";
import SignInPage from "./pages/SignInPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  const [articles, setArticles] = useState([]);
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/articles"
          element={
            <ArticlesPage articles={articles} setArticles={setArticles} />
          }
        ></Route>
        <Route
          path="/topics"
          element={<TopicsPage setArticles={setArticles} />}
        ></Route>
        <Route
          path="/articles/:article_id"
          element={<SingleArticlePage />}
        ></Route>
        <Route
          path="/articles/:article_id/comments"
          element={<CommentsPage />}
        ></Route>
        <Route
          path="/articles/topics/:topic"
          element={
            <ArticleTopicsPage articles={articles} setArticles={setArticles} />
          }
        ></Route>
        <Route path="/signin" element={<SignInPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
      </Routes>
      <Route
          path="/*"
          element={<Error msg={"path not found"} status={404} />}
        ></Route>
    </BrowserRouter>
  );
}

export default App;
