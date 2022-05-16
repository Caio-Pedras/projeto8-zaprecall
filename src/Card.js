import React from 'react'
import setinha from "./assets/img/setinha.png";

export default function Card ({number, question, answer, setAnswerNumber, answerNumber, iconsArray, setIconsArray, setMeta, meta}){
    const [face, setFace] = React.useState('Front');
    const [textColor, setColor] = React.useState()
    
    function colorChange (c,icon){
        setAnswerNumber(answerNumber+1)
        if (c !== 'red') {
            setMeta(meta-1)
        }
        setColor(c)
        setFace('Front')
        let newIcon ={
            iconName:icon,
            iconColor:c,
        }
        setIconsArray([...iconsArray, newIcon]) 
    }
    if (face === 'Front'){
    return (
        <div className="frontCard" >
            <p className={textColor}>Pergunta {number}</p>
            <ion-icon name="play-outline" onClick={!textColor?()=>setFace('Question'):undefined}></ion-icon>
        </div>
    )
} else if (face === 'Question'){
    return (
        <div className="questionCard" key={number}>
            <p>{question}</p>
            <img src={setinha} alt="Setinha do card" onClick={()=>setFace('Result')}/>
        </div>
    )
}
return (
    <div className="answerCard" key={number}>
        <p>{answer}</p>
        <div className="answerButtons">
            <button className='redBG' onClick={()=>colorChange('red','close-circle')}>Não Lembrei</button>
            <button className='orangeBG'onClick={()=>colorChange('orange','help-circle')}>Quase não lembrei</button>
            <button className='greenBG' onClick={()=>colorChange('green','checkmark-circle')}>Zap!</button>
        </div>
    </div>
)
}
