import './App.css'
import Poster from './components/poster'
import Navbar from './components/navbar'
import Logo from './assets/react.svg'


function App() {

  return (
    <>
      <Navbar link_logo={Logo}/>
      <Poster texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at odio ante." imagem="/public/blur_edges_3.png" />
    </>
  )
}

export default App