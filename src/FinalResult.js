import React from 'react'
import sad from "./assets/img/sad.png";
import party from "./assets/img/party.png";
export default function FinalResult ({answerNumber, result, meta, setResult}){
if (answerNumber === 8){
    if (meta<=0) {
        setResult(true)
    }
        return(
            <div className="finalResult">
                <div className="resultStatus">
                    <img src={(result)?party:sad} alt="Icone do resultado" />
                    <p>{(result)?'Parabéns!':'Putz...'}</p>
                </div>
                <p>{(result) ? 'Você não esqueceu de':'Ainda faltam alguns...'}</p>
                <p>{(result) ? 'nenhum flashcard!':'Mas não desanime!'}</p>
            </div>
         )
    } return <></>
}
