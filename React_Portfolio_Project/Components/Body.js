import React from "react";

export default function Body()
{
    return(
        <div className="body-container">
            <h1 className="heading">Parth Nautiyal</h1>
            <h4 className="title">Frontend Developer</h4>
            <a href="www.github.com">www.parthNautiyal.com</a>
            <div className="buttons">
            
                <button className="button1">
                    <div className="button1--content">
                        <img src="../Icons/mail_icon.png" className="btn1--icon"></img>
                        <p>Email</p>
                    </div>
                </button>
                
                <button className="button2">
                 <div className="button2--content">
                        <img src="../Icons/linkedin_icon.png" className="btn2--icon"></img>
                        <p>LinkedIn</p>
                    </div>
                </button>
                
            </div>
            <div className="About">
                <h1>About</h1>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            </div>    
            <div className="Interest">
                <h1>Interests</h1>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>                 
        </div>
    )
}