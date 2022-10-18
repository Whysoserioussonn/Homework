import { useState } from "react";
import Score from "./Score";
import Details from "./Details";
import Answer from "./Answer";

export default function RandomTriviaQuestion() {

    let [question, setQuestion] = useState("")

    const RandomTriviaQuestion = async () => {
        const response = await fetch('http://jservice.io/api/random')
        const data = await response.json()
        setQuestion(data)
    }

    return (
        <div className="question">
            <Score question={question}/>
            <h2 className="play">Let's Play!</h2>
            <button className="randomTrivQ" onClick={RandomTriviaQuestion}>Random Trivia Question</button>
            <Details question={question}/>
            <Answer question={question}/>
        </div>
    )
}