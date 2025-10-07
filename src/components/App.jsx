import React from "react";
import blogData from "../data/blog";
import About from "./About";
import ArticleList from "./ArticleList";
import Header from "./Header";

console.log(blogData);

/**
 * App component renders the main blog layout.
 *
 * Included components:
 * - Header component displaying the blog name
 * - About component containing optional image and description
 * - ArticleList component housing all blog posts
 *
 * @component
 * @returns {JSX.Element} The main blog layout
 */
function App() {
    return (
        <div className="App">
            <Header name={blogData.name} />
            <About image={blogData.image} about={blogData.about} />
            <ArticleList posts={blogData.posts} />
        </div>
  );
}

export default App;
