import React, {useState} from "react";
import "../style.css"
import data from "../tod.json"

//console.log(data.truth[0].content)

export default function Main() {
    const [content, setContent] = useState("Get a random truth/dare.")
    const [head, setHead] = useState("Truth/Dare")
    function randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function truth() {
        //console.log(data.truth[randomInteger(1, data.truth.length) - 1].content)
        setHead("Truth 🤥")
        setContent(data.truth[randomInteger(1, data.truth.length) - 1].content)
    }
    function dare() {
        //console.log(data.dare[randomInteger(1, data.dare.length) - 1].content)
        setHead("Dare 😈")
        setContent(data.dare[randomInteger(1, data.dare.length) - 1].content)
    }
    return (
        <main>
            <h1 className="main--heading"><span className="tr">Truth</span> or <span className="dr">Dare</span></h1>
            <p className="main--text">Get tons of dares and truth questions right at your screen! Anytime, Anywhere! 😎</p>
            <div className="btn-container">
                <button className="truth-btn" onClick={truth}>Truth</button>
                <button className="dare-btn" onClick={dare}>Dare</button>
            </div>
            <div className="game">
                <div className="game--head">
                    <h3 className="tod">{head}</h3>
                </div>
                <div className="game--content">
                    <p className="content">{content}</p>
                </div>
            </div>
        </main>
    )
}