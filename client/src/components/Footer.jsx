import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/arun-prasath-b-846b9a254/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="https://github.com/Prasathb06" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div>
            <p>&copy; {new Date().getFullYear()} Arun Prasath. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
