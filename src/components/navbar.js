import React from "react"
import "../style.css"
import 'font-awesome/css/font-awesome.min.css';
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav--logo">
                <img src="icon.png" className="icon"></img>
                <h2 className="nav--text">Truth or Dare</h2>
            </div>
            <div className="nav--icons">
                <a href="https://github.com/asheeeshh" target="blank" className="icon"><FaGithub color="#d3d3d3" size="1.5em"/></a>
                <a href="https://discord.com/users/784363251940458516" target="blank" className="icon"><FaDiscord color="#d3d3d3" size="1.5em"/></a>
            </div>
        </nav>
    )
}