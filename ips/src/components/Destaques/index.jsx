import React from 'react'
import './styles.css'

const Destaques = () => {
  return (
    <div className='destaques'>
      <div className="container">
        <h2>Destaques</h2>
        <div className='conteudo'>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/0ZJssYUP8WM"
            flameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
          </iframe>
          <div className='texto'>
            <h1>Nós mostramos-te o melhor caminho.</h1>
            <p>Descobre qual é a forma ideal de entrada para começares a tua jornada em direção à profissão dos teus sonhos.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destaques