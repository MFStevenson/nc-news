import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ArticleStateWrapper from "./components/ArticleStateWrapper";
import HomePage from "./pages/HomePage";
import TopicsPage from "./pages/TopicsPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ArticleStateWrapper />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/topics" element={<TopicsPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
