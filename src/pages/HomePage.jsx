import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <section id="home-page">
      <h2>Choose which page you'd like to visit</h2>
      <Link to="/articles">
        View All Articles
      </Link>
      <hr></hr>
      <Link to="/topics">
        View All Topics
      </Link>
    </section>
  );
};

export default HomePage;
