import React from "react"
import reactlogo from "../assets/React.js_logo-512.png"

export default function Navbar() {
    return (
        <nav>
            <div className="logocontainer">
                <img src={reactlogo} alt="React logo" />
                <h3>ReactFacts</h3>
            </div>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}