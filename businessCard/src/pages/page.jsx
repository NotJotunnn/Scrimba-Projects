import React from "react";
import ReactDOM from "react-dom";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
    <div className="card-body">
        <Header />
        <Main />
        <Footer />
    </div>
);