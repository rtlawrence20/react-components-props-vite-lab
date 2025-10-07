import React from "react";
import Article from "./Article";

/**
 * ArticleList component renders a list of Article components.
 *
 * It maps over the `posts` array and renders each post using the Article component,
 * passing title, date, preview, and minutes as props.
 *
 * @component
 * @param {Object} props - Component props
 * @param {Array<Object>} props.posts - Array of post objects to render
 * @param {string} props.posts[].id - Unique identifier for each post (used as React key)
 * @param {string} props.posts[].title - Title of the post
 * @param {string} props.posts[].date - Publication date of the post
 * @param {string} props.posts[].preview - Preview text of the post
 * @param {number} props.posts[].minutes - Estimated reading time in minutes
 * @returns {JSX.Element} A main element containing the list of Article components
 *
 * @example
 * const posts = [
 *     { id: 1, title: "Post 1", date: "Oct 7, 2025", preview: "Preview text", minutes: 12 },
 *     { id: 2, title: "Post 2", preview: "Another preview", minutes: 45 }
 * ]
 * <ArticleList posts={posts} />
 */
function ArticleList({posts}) {
    const articleList = posts.map((post) => (
        <Article key={post.id} title={post.title} date={post.date} preview={post.preview} minutes={post.minutes} />
    ));
    return (
        <main>
            {articleList}
        </main>
    );
}

export default ArticleList;