import "../assets/styles/Contato.css"
import { contatoLib } from "../lib/curriculo"

export const Contato = () => {
  return (
    <>
    <div className="row-contact">
        <div className="left-col">
            <img src={contatoLib.imageOne} className="icon" />
            <p className="number">{contatoLib.contentOne}</p>
        </div>
        <div className="right-col">
            <img src={contatoLib.imageTwo} className="icon" />
            <p className="email">{contatoLib.contentTwo}</p>
        </div>
    </div>
    </>
  )
}
