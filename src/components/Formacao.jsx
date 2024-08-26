import "../assets/styles/Article.css"
import { Title } from "./ui/title"
import { Text } from "./ui/text"
import { formacaoLib } from "../lib/curriculo"

export function Formacao() {
    return (
        <>
            <div className="row-article">
                <Title title={formacaoLib.title} />
                <div className="box-text">
                    <Text text={formacaoLib.textOne} />
                    <Text text={formacaoLib.textTwo} />
                </div>
                <div className="box-text">
                    <Text text={formacaoLib.textThree} />
                    <Text text={formacaoLib.textFour} />
                </div>
            </div>
        </>
    )
}