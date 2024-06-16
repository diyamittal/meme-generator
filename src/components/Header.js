import React from "react"
import face from "../images/Troll-Face.png"

export default function Header(){
    return (
        <header className="header">
            <img src={face} className="header-image"></img>
            <h2 className="header-title">Meme Generator</h2>
            <h4 className="header-project">React Course - Project 3</h4>
        </header>
    )
}