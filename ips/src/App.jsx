import './App.css'

import Header from './components/Header'
import Cursos from './components/Cursos'
import Carrousel from './components/Carrousel'
import Inscreva from './components/Inscreva'
import Destaques from './components/Destaques'
import Eventos from './components/Eventos'
import Localizacao from './components/Localizacao'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      <Header />      
      <Carrousel />
      <Inscreva />
      <Cursos />
      <Destaques />
      <Localizacao />
      <Footer />
    </div>
  )
}

export default App
