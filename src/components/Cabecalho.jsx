import '../assets/styles/Cabecalho.css'
import { cabecalhoLib } from '../lib/curriculo'

export function Cabecalho() {
    return (
        <>
            <div className="row">
                <div className="left-col">
                    <img src={cabecalhoLib.image} className='profile'/>
                </div>
                <div className="right-col">
                    <h1>{cabecalhoLib.name}</h1>
                    <h3>{cabecalhoLib.function}</h3>
                </div>
            </div>
        </>
    )
}