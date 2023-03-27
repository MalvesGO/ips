import React from 'react'

const Localizacao = () => {
  return (
    <div className='localizacao'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0000000000005!2d-46.63333333333333!3d-23.550000000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a3c8b5b8f5b%3A0x3a0f4e1b2a4b8a8!2sAv.%20Paulista%2C%201.000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-000!5e0!3m2!1spt-BR!2sbr!4v1625581000000!5m2!1spt-BR!2sbr'
          width='100%'
          height='100%'
          style={{ border: 0 }}
          allowFullScreen=''
          loading='lazy'
        >
        </iframe>
    </div>
  )
}

export default Localizacao