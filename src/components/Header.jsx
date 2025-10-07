import React from "react";

/**
 * Header component renders the main header.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.name - Name or title to display inside the header
 * @returns {JSX.Element} Header element containing an h1 with the blog name
 *
 * @example
 * <Header name="My Blog" />
 */
function Header({name}) {
    return (
        <header>
            <h1>{name}</h1>
        </header>
    );
}

export default Header;