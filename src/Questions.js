import React from 'react'
import Card from "./Card"

export default function Questions ({setAnswerNumber, answerNumber, iconsArray, setIconsArray,deck,setMeta,meta}){
    return (
        <div className="questions">
            {deck.map(({question, answer},index)=>(
                <div className="card" key={index+1}>
                    <Card number={index+1} question={question} answer={answer} setAnswerNumber={setAnswerNumber} answerNumber={answerNumber} iconsArray={iconsArray} setIconsArray={setIconsArray} setMeta={setMeta} meta={meta}/>
                </div>
            ))}  
        </div>
    )
}

