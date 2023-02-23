import { useState, useEffect } from 'react';


export default function Prompt() {

    const [ allMemes, setAllMemes ] = useState([])

    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        memeImg: 'http://i.imgflip.com/1bij.jpg'
    })

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMeme() {
        const url = allMemes[Math.floor(Math.random() * allMemes.length)].url;

        setMeme(prevMeme => {
            return {
                ...prevMeme,
                memeImg: url
            }
        })
    }

    function handleChange(event) {
        const {name, value} = event.target

        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }


    return(
        <main>
            <div className="input-group">
                <div className="input">
                    <input value={meme.topText} onChange={handleChange} type="text" name='topText' className="toptext" placeholder='Shut up'/>
                    <input value={meme.bottomText} onChange={handleChange} type="text" name='bottomText' className="bottomtext" placeholder='and take my money'/>
                </div>
                <button onClick={getMeme} >Get a new meme image 🖼</button>
                <div className="container">
                    <p>{meme.topText}</p>
                    <img src={meme.memeImg} alt="The dna of the soul" />
                    <p>{meme.bottomText}</p>
                </div>
            </div>
        </main>
    )
}