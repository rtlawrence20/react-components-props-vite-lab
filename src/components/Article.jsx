import { React } from "react";

/**
 * Article component renders article preview.
 *
 * It displays:
 * - The article title
 * - The publication date
 * - A reading time message with emojis based on the `minutes` prop
 * - A preview paragraph of the article
 * 
 * @component
 * @param {Object} props - Component props
 * @param {string} props.title - The title of the article
 * @param {string} [props.date='January 1, 1970'] - The publication date of the article (default is Jan 1, 1970)
 * @param {string} props.preview - The preview text of the article
 * @param {number} props.minutes - Estimated reading time in minutes
 * @returns {JSX.Element} The rendered article element
 *
 * @example
 * <Article 
 *   title="My First Post"
 *   date="October 7, 2025"
 *   preview="This is a short preview of the article."
 *   minutes={12}
 * />
 */
function Article({title, date='January 1, 1970', preview, minutes}) {
    // Conditional (ternary) operator to determine the number of coffee or bento box emojis
    // to display based on the minutes prop
    let minutesMessage = (minutes < 30)
        ? `${'☕️'.repeat(Math.ceil(minutes / 5))} ${minutes} min read`
        : `${'🍱'.repeat(Math.ceil(minutes / 10))} ${minutes} min read`;
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}: {minutesMessage}</small>
            <p>{preview}</p>
        </article>
    );
}

export default Article;