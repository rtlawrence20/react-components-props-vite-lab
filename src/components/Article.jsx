import { React } from "react";

function ArticleList({title, date='January 1, 1970', preview, minutes}) {
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

export default ArticleList;