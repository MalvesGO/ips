import React from 'react'
import './styles.css'

import Logo from '../../assets/logo2.png'

const Header = () => {
  return (
    <div>
      <div className='topbar'>
        <div className="container">
          <ul className='nav'>
            <li className='nav-item'>
              <a href="https://www.facebook.com/">
                <span>Fale connosco</span>
              </a>
            </li>
            <li className='nav-item'>
              <a href="https://www.facebook.com/">
                <span>+351 265 709 470</span>
              </a>
            </li>
            <li className='nav-item'>
              <a href="https://www.facebook.com/">
                <span>Candidaturas</span>
              </a>
            </li>
          </ul>
          <ul className='nav'>
            <li className='nav-item'>
              <a href="https://www.facebook.com/">
                <span>Acompanhe sua candidatura</span>
              </a>
            </li>
            <li className='nav-item'>
              <a href="https://www.facebook.com/">
                <span>Area do Aluno</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <header>
        <button>Inscreva-se</button>
        <img src={Logo} alt="" />
        <button>Eventos 2023</button>
      </header>
    </div>
  )
}

export default Header