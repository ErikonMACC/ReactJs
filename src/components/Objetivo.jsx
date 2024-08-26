import "../assets/styles/Article.css"
import { Title } from "./ui/title"
import { Text } from "./ui/text"
import { objetivoLib } from "../lib/curriculo"

export function Objetivo() {
    return (
        <>
            <div className="row-article">
                <Title title={objetivoLib.title} />
                <Text text={objetivoLib.text} />
            </div>
        </>
    )
}
