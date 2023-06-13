import React from "react";
import Header from "./Components/Header.js";
import Body from "./Components/Body.js";
import Footer from "./Components/Footer.js";

export default function App()
{
    return(
        <div className="Container">
            <div className="Main">
                <Header />
                <Body />
                <Footer />
            </div>
        </div>
    )
}