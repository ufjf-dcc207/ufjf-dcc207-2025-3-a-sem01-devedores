import './App.css'
import Poster from './components/poster'
import Navbar from './components/navbar'
import Logo from './assets/logo.jpg'
import Footer from './components/Footer'
import Matriz from './components/matriz'


type FilmeTupleType = [string, string, number, boolean];
type MatrizesTupleType = [string, FilmeTupleType[], string?];

const listaDeFilmes1: FilmeTupleType[] = [
  ["Interestelar", "https://image.tmdb.org/t/p/original/jSCuXZbwxbUHCvebMzxjY2ccSWy.jpg", 5, true],
];

const listaDeFilmes2: FilmeTupleType[] = [
  ["Duna", "https://image.tmdb.org/t/p/original/8c4a8kE7PizaGQQnditMmI1xbRp.jpg", 4, true]
];

const listaDeFilmes3: FilmeTupleType[] = [
  ["Matrix", "https://image.tmdb.org/t/p/original/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg", 4, true],
  ["Clube da Luta", "https://image.tmdb.org/t/p/original/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg", 4, false],
];

const Matrizes: MatrizesTupleType[] = [
  ["Melhores da semana", listaDeFilmes1, "Os filmes mais assistidos da semana"],
  ["Lançamentos", listaDeFilmes2, "Os filmes recém-chegados ao catálogo"],
  ["Em alta", listaDeFilmes3],
];

function App() {

  return (
    <>
      <Navbar link_logo={Logo} link_nav={Matrizes.map(([titulo]) => titulo)} />
      <Poster texto={"Lorem ipsum dolor sit amet, consectetur elit.\nQuisque ullamcorper nec sit amet aliquet.\nProin fermentum elit eu mollis maximus."} imagem="/public/blur_edges_3.png" />
      {Matrizes.map(([titulo, filmes, subtitulo]) => (
        <Matriz key={titulo} titulo={titulo} subtitulo={subtitulo} filmes={filmes.map(([nome, imagem, nota, cinema]) => ({
          nome,
          imagem,
          nota,
          cinema
        }))} />
      ))}

      <Footer />
    </>
  )
}

export default App