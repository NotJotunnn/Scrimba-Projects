import React from "react";
import twitter from "../assets/twitter-sign_1.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram_1.svg";
import github from "../assets/github.svg";

export default function Footer() {
    return (
        <footer>
            <div className="logos">
                <img src={twitter} alt="Twitter logo" />
                <img src={facebook} alt="Facebook logo" />
                <img src={instagram} alt="Instagram logo" />
                <img src={github} alt="Github logo" />
            </div>
        </footer>
    )
}