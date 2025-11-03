import './Footer.css'; 

function Footer() {
  return (
    <footer className="footer-container">
      <nav className="footer-nav">
        <ul>
          <li><a href="#">Sobre Nós</a></li>
          <li><a href="#">Ajuda</a></li>
          <li><a href="#">Termos de uso</a></li>
        </ul>
      </nav>

      <div className="footer-info">
        <p>©Frame.</p>
        <p>Film data from TMDB.</p>
      </div>
    </footer>
  );
}

export default Footer;