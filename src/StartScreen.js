import React from 'react'
import logo from "./assets/img/logo.svg";
export default function StartScreen({setScreenDisplay,setDeck,decks,meta,setMeta,deck}){

function inputChange (e){
    setMeta(e.target.value)
}
function screenDisplay(){
    if (meta.length > 1){
        alert('Digite um número entre 1 e 8')
        return
    }
    if (deck === ''){
        alert('Por favor, selecione um deck')
        return
    }
    setMeta(parseInt(meta))
    if (meta <= 8 && meta >0){
    setScreenDisplay(false)
    
    return
    }
    alert('Digite um número entre 1 e 8')
}
function changeDeck (value){
    let newArr = decks.filter((decks)=>decks.deckName===value)
    setDeck(newArr[0])
}


    return (
    <>
        <img className='mainLogo' src={logo} alt="Logo ZapRecall" />
        <h1>ZapRecall</h1>
        <select name="decks" id="decks" onChange={e => changeDeck(e.target.value)}>
            <option disabled selected hidden>Escolha seu deck</option>
            {decks.map(({deckName},i)=>(
                <option value={deckName} key={i}>{deckName}</option>
            ))}
        </select>
        <input type="text" placeholder='Digite sua meta de Zaps...' onChange={(e)=>inputChange(e) }/>
        <button onClick={()=>screenDisplay()}>Iniciar Recall</button>
    </>
    )
}