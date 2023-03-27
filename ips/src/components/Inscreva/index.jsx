import React from 'react'
import './styles.css'

const Inscreva = () => {
  return (
    <div className='inscreva'>
        <div className="container">

            <h1>Escolha seu curso e inscreva-se</h1>

            <div className='searchCourse'>
                <select name="" id="">
                    <option value="">Licenciaturas</option>
                    <option value="">Mestrados</option>
                    <option value="">Pós-Graduações</option>
                    <option value="">Cursos Breves</option>
                </select>
                <input type="text" placeholder='Pesquisar' />
                <button disabled>Candidatura</button>
            </div>
        </div>
    </div>
  )
}

export default Inscreva