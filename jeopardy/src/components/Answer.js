import { useState } from "react"

export default function Answer({question}) {

    let ques = question[0]

    const [showAnswer, setShowAnswer] = useState(false)
    const [btn, setBtn] = useState('Click to Show Answer')
    const showAns = () => {
        setShowAnswer(showAnswer => !showAnswer)
        setBtn((state) => (state === 'Click to Hide Answer' ? 'Click to See Answer' : 'Click to Hide Answer'))
    }

    return (
        <div className="answer-area">
            <button className="show" onClick={showAns}>{btn}</button>
                {showAnswer && <p className="show-answer">Answer: What is {ques.answer}?</p>}
        </div>
    )
}