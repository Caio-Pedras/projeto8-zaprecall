import logopequeno from "./assets/img/logo-pequeno.png";
export default function Header (){
    return (
        <header>
            <img src={logopequeno} alt="Logo ZapRecall pequena" />
            <h2>ZapRecall</h2>
        </header>
    )
}