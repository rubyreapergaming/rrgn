import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const Logo = () => {
    return (
        <Link to="/" className="block">
            <StaticImage src="../../data/images/logo.webp" alt="Bonx" />
        </Link>
    );
};
export default Logo;
