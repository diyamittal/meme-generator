import React from "react"
import memesData from "../memesData.js"

export default function Meme(){

    //const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function getmemeimage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">
                <input type="text" className="form-input" placeholder="Top text" name="topText" value={meme.topText} onChange={handleChange}></input>
                <input type="text" className="form-input" placeholder="Bottom text" name="bottomText" value={meme.bottomText} onChange={handleChange}></input>
                <button className="form-button" onClick={getmemeimage}>Get a new meme image</button>
            </div>
            <div className="meme">
                <img src = {meme.randomImage} className="meme-image"></img>
                <h2 className="meme-text-top">{meme.topText}</h2>
                <h2 className="meme-text-bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}