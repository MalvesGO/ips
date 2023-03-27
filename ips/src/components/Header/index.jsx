import React from 'react'
import './styles.css'
import { BsPersonCircle } from 'react-icons/bs';
import { MdTrackChanges } from 'react-icons/md'
import { SlEvent } from 'react-icons/sl'
import {IoCreate} from 'react-icons/io5'

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
                <span>
                  <MdTrackChanges
                    size={20}
                    color="#fff"
                  />
                  Acompanhe sua candidatura
                </span>
              </a>
            </li>
            <li className='nav-item'>
              <a href="https://www.facebook.com/">
                <span>
                  <BsPersonCircle
                    size={20}
                    color="#fff"
                  />
                  Área do Aluno
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <header>
        <button>
          <IoCreate
            size={20}
            color="#fff"
          />
          Inscreva-se
          </button>
        <img src={Logo} alt="" />
        <button>
          <SlEvent
            size={20}
            color="#fff"
          />
          Eventos 2023
        </button>
      </header>
    </div>
  )
}

export default Header