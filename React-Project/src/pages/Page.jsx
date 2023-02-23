import React from "react";
import ReactDOM from 'react-dom/client';
import Navbar from "../components/Navbar";
import Main from "../components/Main";


ReactDOM.createRoot(document.getElementById("root")).render(
    <div className="container">
        <Navbar />
        <Main />
    </div>
)