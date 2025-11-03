import './navbar.css'
import Botao from './botao'
type BotoesTupleType = [string, string];
const BOTOES: BotoesTupleType[] = [
    ["Ação", "#acao"],
    ["Suspense", "#suspense"],
    ["Comédia", "#comedia"],
];
interface navbarProps {
    link_logo?: string;
}


function Navbar({link_logo}: navbarProps) {
    return( 
        <div>  
            <nav className="navbar">
                <div className="logo">
                    {link_logo? <img src={link_logo} alt="Logo"/> : <span>Frame</span>}
                </div>
                <div className="nav-links">
                    {BOTOES.map(([texto, link_botao]) => (
                        <Botao key={link_botao} texto={texto} link={link_botao}/>
                    ))}
                </div>
            </nav>
        </div>    
    )
}
export default Navbar