import { useState, useEffect } from 'react'
import './styles.css'



const links = [
    {
        id: 1, name: 'CTeSP', links: [
            { id: 1, name: 'Ciências Empresariais', url: '', imageCourse: '../../src/assets/empresariais.png' },
            { id: 2, name: 'Ciências Sociais, Educação e Desporto', url: '', imageCourse: '../../src/assets/comercial.png' },
            { id: 3, name: 'Engenharia e Tecnologia', url: '', imageCourse: '../../src/assets/analista.png' },
        ]
    },
    {
        id: 2, name: 'Licenciaturas', links: [
            { id: 1, name: 'Ciências Empresariais', url: '', imageCourse: '../../src/assets/empresariais.png' },
            { id: 2, name: 'Ciências Sociais, Educação e Desporto', url: '', imageCourse: '../../src/assets/comercial.png' },
            { id: 3, name: 'Saúde', url: '', imageCourse: '../../src/assets/saude.png' },
            { id: 4, name: 'Engenharia e Tecnologia', url: '', imageCourse: '../../src/assets/analista.png' },
        ]
    },
    {
        id: 3, name: 'Mestrados', links: [
            { id: 1, name: 'Ciências Empresariais', url: '', imageCourse: '../../src/assets/empresariais.png' },
            { id: 2, name: 'Ciências Sociais, Educação e Desporto', url: '', imageCourse: '../../src/assets/comercial.png' },
            { id: 3, name: 'Saúde', url: '', imageCourse: '../../src/assets/saude.png' },
            { id: 4, name: 'Engenharia e Tecnologia', url: '', imageCourse: '../../src/assets/analista.png' },
        ]
    },
    {
        id: 4, name: 'Pós Graduações', links: [
            { id: 1, name: 'Ciências Empresariais', url: '', imageCourse: '../../src/assets/empresariais.png' },
            { id: 2, name: 'Ciências Sociais, Educação e Desporto', url: '', imageCourse: '../../src/assets/comercial.png' },
            { id: 3, name: 'Saúde', url: '', imageCourse: '../../src/assets/saude.png' },
            { id: 4, name: 'Engenharia e Tecnologia', url: '', imageCourse: '../../src/assets/analista.png' },
        ]
    },
    {
        id: 5, name: 'Cursos breves (Microcredenciais)', links: [
            { id: 1, name: 'Ciências Empresariais', url: '', imageCourse: '../../src/assets/empresariais.png' },
            { id: 2, name: 'Ciências Sociais, Educação e Desporto', url: '', imageCourse: '../../src/assets/comercial.png' },
            { id: 3, name: 'Saúde', url: '', imageCourse: '../../src/assets/saude.png' },
            { id: 4, name: 'Engenharia e Tecnologia', url: '', imageCourse: '../../src/assets/analista.png' },
        ]
    },
    {
        id: 6, name: 'Formação Continua', links: [
            { id: 1, name: 'Ciências Empresariais', url: '', imageCourse: '../../src/assets/empresariais.png' },
            { id: 3, name: 'Saúde', url: '', imageCourse: '../../src/assets/saude.png' },
            { id: 4, name: 'Engenharia e Tecnologia', url: '', imageCourse: '../../src/assets/analista.png' },
        ]
    }
]

const Cursos = () => {

    const [activeLink, setActiveLink] = useState(1);

    useEffect(() => {
        console.log(activeLink)
    }, [activeLink])

    return (
        <div>
            <div className="sectionMenu">
                <ul className="menu">
                    {links.map((menu, index) => (
                        <li
                            key={menu.id}
                            className={`menu-item ${activeLink === menu.id ? 'active' : ''}`}
                            onClick={() => setActiveLink(menu.id)}
                        >
                            <p href="#">{menu.name}</p>
                        </li>
                    ))}
                </ul>

                <div className='links'>
                    <div className="active-section">
                        <div className="container">
                            {links.map((menu, index) => (
                                <div className='course'>
                                    {menu.id === activeLink && menu.links.map((link, index) => (
                                        <div>
                                            <p key={index}>
                                                {link.name}
                                            </p>
                                            <img src={link.imageCourse} alt={link.name} />
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cursos