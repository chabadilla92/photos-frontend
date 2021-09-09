import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {

    return (
        <nav>
            <Link to="/"><h1 className="dennis">Dennis Abadilla</h1></Link>
            <ul>
                <Link to="/new"><button className="plus">+</button></Link>
                <li>PEOPLE</li>
                <li>TRAVEL</li>
                <li>EDUCATION</li>
                <li>BLOG</li>
                <li>CONTACT</li>
            </ul>
        </nav>
    )
}

export default Nav;