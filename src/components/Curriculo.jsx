import { Cabecalho } from "./Cabecalho.jsx"
import "../assets/styles/Curriculo.css"
import { HR } from "./Hr.jsx"
import { Contato } from "./Contato.jsx"
import { Objetivo } from "./Objetivo.jsx"
import { Formacao } from "./Formacao.jsx"
import { Projetos } from "./Projetos.jsx"

export const Curriculo = () => {
    return (
        <>
            <div className="box">
                <div className="article">
                    <Cabecalho />
                    <HR />
                    <Contato />
                    <HR />
                    <Objetivo />
                    <Formacao />
                    <Projetos />
                </div>

            </div>
        </>
    )
}
