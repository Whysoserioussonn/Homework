import { useState } from "react";

export default function Score({question}) {

let ques = question[0]

let [score, setScore] = useState(0)

const increaseScore = (e) => {
    setScore(score + ques.value)
    e.preventDefault()
}

const decreaseScore = (e) => {
    setScore(score - ques.value)
    e.preventDefault()
}

const reset = (e) => {
    setScore(score - score)
    e.preventDefault()
}

    return(
        <div className="score">
            <h2 className="current-score">Score: {score}</h2>
            <form className="score-btns">
                <button className="inc" onClick={increaseScore}>Increase</button>
                <button className="dec" onClick={decreaseScore}>Decrease</button>
                <button className="reset" onClick={reset}>Reset</button>
            </form>
        </div>
    )
}