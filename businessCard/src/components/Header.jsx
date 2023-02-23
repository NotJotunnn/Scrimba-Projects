import React from "react";
import image from "../assets/229861440_430744692217435_7828501499992209684_n.jpg";

export default function Header() {
    return (
        <header>
            <img src={image} alt="Minha imagem" />
            <div className="headfield">
                <h1>Leandro Ferreira</h1>
                <h2>Frontend Developer</h2>
                <a href="#">leandrof.com</a>
            </div>
        </header>
    )
};