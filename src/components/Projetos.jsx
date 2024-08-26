import "../assets/styles/Article.css";
import { Title } from "./ui/title";
import { Text } from "./ui/text";
import { projetosLib } from "../lib/curriculo";

let projetos = projetosLib.projetos;

export function Projetos() {
    return (
        <>
            <div className="row-article">
                <Title title={projetosLib.title} />
                {projetos.map((projeto, index) => (
                    <div key={index} className="box-text">
                        <Text text={projeto.textTitle} />
                        <Text text={projeto.textOne} />
                        <Text text={projeto.textTwo} />
                    </div>
                ))}
            </div>
            <div className="space-end"></div>
        </>
    );
}
