import './navbar.css'
import Botao from './botao'

interface navbarProps {
    link_logo?: string;
    link_nav: string[];
}


function Navbar({link_logo, link_nav}: navbarProps) {
    return( 
        <div>  
            <nav className="navbar">
                <div className="logo">
                    {link_logo? <img src={link_logo} alt="Logo"/> : <span>Frame</span>}
                </div>
                <div className="nav-links">
                    {link_nav.map((link_botao) => (
                    <Botao key={link_botao} texto={link_botao} link={`#${link_botao}`} />
                    ))}
                </div>
            </nav>
        </div>    
    )
}
export default Navbar