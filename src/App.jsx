import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import TopicsPage from "./pages/TopicsPage";
import SingleArticlePage from "./pages/SingleArticlePage";
import Navbar from "./components/Navbar";
import { useState } from "react";
import CommentsPage from "./pages/CommentsPage";

function App() {
  const [articles, setArticles] = useState([]);
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<HomePage articles={articles} setArticles={setArticles} />}
        ></Route>
        <Route path="/topics" element={<TopicsPage />}></Route>
        <Route
          path="/articles/:article_id"
          element={<SingleArticlePage />}
        ></Route>
        <Route
          path="/articles/:article_id/comments"
          element={<CommentsPage />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
