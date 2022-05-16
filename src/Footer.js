import FinalResult from "./FinalResult"
import  RestartButton from "./RestartButton"
export default function Footer ({answerNumber, iconsArray, result,setAnswerNumber,setScreenDisplay, setIconsArray, meta, setResult}){ 
    return(
        <footer>
            <FinalResult answerNumber={answerNumber} result={result} meta={meta} setResult={setResult}/>
            <p>{answerNumber}/8 CONCLUÍDOS </p>
            <div className="answerIcons">
                {iconsArray.map(({iconName, iconColor},index)=> 
                    <ion-icon class={iconColor} name={iconName} key={index}></ion-icon>
                )}
            </div>
            <RestartButton answerNumber={answerNumber} setAnswerNumber={setAnswerNumber} setScreenDisplay={setScreenDisplay} setIconsArray={setIconsArray}/>
        </footer>
    )
}