import React from "react";

export default function Main() {
    return (
        <main>
            <div className="buttons">
                <button className="mail">Email</button>
                <button className="linkedin">Linkedin</button>
            </div>

            <section className="about">
                <h3>About</h3>
                <p>I am a undergrad student of computer scientist, highly invested in learning frontend programming and becoming fullstack. I prioritize simplicity over complexity and appreciate well set boundaries.</p>
            </section>

            <section className="technologies">
                <h3>Technologies</h3>
                <p>HTML5, CSS3, Javascript &#x28;Favorite&#x29;, React, Git, Github, node and Figma!</p>
            </section>
        </main>
    )
}