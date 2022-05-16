export default function RestartButton ({answerNumber, setAnswerNumber,setScreenDisplay,setIconsArray, setDeck, setResult}){
    function resetRecall (){
        setAnswerNumber(0)
        setIconsArray([])
        setDeck('')
        setScreenDisplay(true)
        setResult(false)
    }
    if (answerNumber === 8){
   return (
       <button className="restartButton" onClick={resetRecall}>
           REINICIAR RECALL
       </button>
   )
}
    return <></>
}