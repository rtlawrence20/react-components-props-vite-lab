import React from "react";

/**
 * About component renders an image and a descriptive paragraph.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} [props.image="https://via.placeholder.com/215"] - URL for the image. Defaults to a placeholder image.
 * @param {string} props.about - Text to display below the image.
 * @returns {JSX.Element} aside element to be rendered with image and paragraph.
 *
 * @example
 * <About 
 *   image="https://example.com/logo.png"
 *   about="This is a short description about the blog."
 * />
 */
function About({image="https://via.placeholder.com/215", about}) {
	return (
		<aside>
			<img src={image} alt="blog logo" />
			<p>{about}</p>
		</aside>
	);
}

export default About;
