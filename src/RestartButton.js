export default function RestartButton ({answerNumber, setAnswerNumber,setScreenDisplay,setIconsArray}){
    function resetRecall (){
        setAnswerNumber(0)
        setIconsArray([])
        setScreenDisplay(true)
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