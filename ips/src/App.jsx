import './App.css'

import Header from './components/Header'
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
      <div>
        <Destaques />
        <Eventos />
      </div>
      <div>
        <Localizacao />
      </div>
      <Footer />
    </div>
  )
}

export default App
