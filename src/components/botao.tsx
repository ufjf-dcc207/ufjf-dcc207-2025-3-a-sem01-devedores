import './botao.css'
interface BotaoProps {
    texto: string;
    link: string;
}
function Botao({ texto, link }: BotaoProps){
    return (
        <a href={link} className="botao">
            {texto}
        </a>
    )
}
export default Botao