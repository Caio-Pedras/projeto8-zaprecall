import React from 'react'
import StartScreen from './StartScreen'
import Header from './Header'
import Questions from './Questions'
import Footer from './Footer'
import "./assets/css/reset.css";
import "./assets/css/styles.css";

export default function App (){
    const [screenDisplay, setScreenDisplay] = React.useState(true)
    const [answerNumber, setAnswerNumber] = React.useState(0)
    const [result, setResult] = React.useState(false)
    const [iconsArray, setIconsArray] = React.useState([])
    const [deck, setDeck] = React.useState('')
    const [meta, setMeta] = React.useState('')

    const decks=
        [
            {
            deckName:'React',
            deckQuestions:
            [
                {
                    question:'O que é JSX??',
                    answer:'JSX é uma sintaxe para escrever HTML dentro do js',
                },
                {
                    question:'O React é __',
                    answer:'Uma biblioteca JavaScript para construção de interfaces',
                },
                {
                    question:' Componentes devem iniciar com __ ',
                    answer:'Letra maiúscula',
                },
                {
                    question:'Podemos colocar __ dentro do JSX',
                    answer:'Expressões',
                },
                {
                    question:'O ReactDOM nos ajuda __',
                    answer:'Interagindo com a DOM para colocar componentes React na mesma',
                },
                {
                    question:'Usamos o npm para __',
                    answer:'Gerenciar os pacotes necessários e suas dependências',
                },
                {
                    question:'Usamos props para __',
                    answer:'Passar diferentes informações para componentes ',
                },
                {
                    question:'Usamos estado (state) para __',
                    answer:'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente',
                }
            ]
            },
            {
            deckName:'Opção2',
            deckQuestions: [
                {
                    question:'Opção2 pergunta 1',
                    answer:'Opção2 resposta 1',
                },
                {
                    question:'Opção2 pergunta 2',
                    answer:'Opção2 resposta 2',
                },
                {
                    question:'Opção2 pergunta 3',
                    answer:'Opção2 resposta 3',
                },
                {
                    question:'Opção2 pergunta 4',
                    answer:'Opção2 resposta 4',
                },
                {
                    question:'Opção2 pergunta 5',
                    answer:'Opção2 resposta 5',
                },
                {
                    question:'Opção2 pergunta 6',
                    answer:'Opção2 resposta 6',
                },
                {
                    question:'Opção2 pergunta 7',
                    answer:'Opção2 resposta 7',
                },
                {
                    question:'Opção2 pergunta 8',
                    answer:'Opção2 resposta 8',
                }
            ]
            },
        ]
    
    if (screenDisplay === true) {
        return <StartScreen  setScreenDisplay={setScreenDisplay} setDeck={setDeck} decks={decks} meta={meta} setMeta={setMeta} deck={deck}/>; 
    }
    return (
    <>
        <Header/>
        <Questions setAnswerNumber={setAnswerNumber} answerNumber={answerNumber} iconsArray={iconsArray} setIconsArray={setIconsArray} deck={deck} setMeta={setMeta} meta={meta}/>
        <Footer answerNumber={answerNumber} iconsArray={iconsArray} result={result} setAnswerNumber={setAnswerNumber} setScreenDisplay={setScreenDisplay} setIconsArray={setIconsArray} meta={meta} setResult={setResult} setDeck={setDeck}/>
    </>
    )
}