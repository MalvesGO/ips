import { useState, useEffect } from 'react'
import './styles.css'

const links = [
    {
        id: 1, name: 'Sobre o IPS', links: [
            { id: 1, name: 'Quem Somos', url: '' },
            { id: 2, name: 'Organizacao Interna', url: '' },
            { id: 3, name: 'Distrito de Setubal', url: '' },
            { id: 4, name: 'Avaliacao e Qualidade', url: '' },
            { id: 5, name: 'Alumni Ips', url: '' },
            { id: 6, name: 'Emprego e Recrutamento', url: '' },
            { id: 7, name: 'Responsabilidade Social e Sustentabilidade', url: '' },
            { id: 8, name: 'Dia do IPS', url: '' },
            { id: 9, name: 'Legislacao e Documentos', url: '' },
            { id: 10, name: 'Procedimentos e Minutas', url: '' },
            { id: 11, name: 'Publicitacao do inicio do Procedimento', url: '' },
            { id: 12, name: 'Elogios, Sugestoes, Reclamacoes', url: '' },
            { id: 13, name: 'Canal de Denuncias', url: '' },
        ]
    },
    {
        id: 2, name: 'Candidatos', links: [
            { id: 1, name: 'Candidaturas', url: '' },
            { id: 2, name: 'MATRÍCULAS: 1º ano | 1ª Vez', url: '' },
            { id: 3, name: 'Cursos', url: '' },
            { id: 4, name: 'Guia Informativo', url: '' },
            { id: 5, name: 'Conhecer o ensino superior', url: '' },
        ]
    },
    {
        id: 3, name: 'Estudantes', links: [
            { id: 1, name: 'Atividades Academicas', url: '' },
            { id: 2, name: 'Guia do Estudante', url: '' },
            { id: 3, name: 'Promocao do Sucesso Academico', url: '' },
            { id: 4, name: 'Programas de Apoio', url: '' },
            { id: 5, name: 'Provedor do Estudante', url: '' },
        ]
    },
    {
        id: 4, name: 'Escolas', links: [
            { id: 1, name: 'lorem', url: '' },
            { id: 2, name: 'lorem', url: '' },
            { id: 3, name: 'lorem', url: '' },
            { id: 4, name: 'lorem', url: '' },
            { id: 5, name: 'lorem', url: '' },
        ]
    },
    {
        id: 5, name: 'Internacional', links: [
            { id: 1, name: 'lorem', url: '' },
            { id: 2, name: 'lorem', url: '' },
            { id: 3, name: 'lorem', url: '' },
            { id: 4, name: 'lorem', url: '' },
            { id: 5, name: 'lorem', url: '' },
        ]
    },
    {
        id: 6, name: 'Apoio Social', links: [
            { id: 1, name: 'lorem', url: '' },
            { id: 2, name: 'lorem', url: '' },
            { id: 3, name: 'lorem', url: '' },
            { id: 4, name: 'lorem', url: '' },
            { id: 5, name: 'lorem', url: '' },
        ]
    },
    {
        id: 7, name: 'I&D e Inovacao', links: [
            { id: 1, name: 'lorem', url: '' },
            { id: 2, name: 'lorem', url: '' },
            { id: 3, name: 'lorem', url: '' },
            { id: 4, name: 'lorem', url: '' },
            { id: 5, name: 'lorem', url: '' },
        ]
    },
]

const Menu = () => {

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
                            <a href="#">{menu.name}</a>
                        </li>
                    ))}
                </ul>

                <div className='links'>
                    <div className="active-section">
                        <div className="container">
                            {links.map((menu, index) => (
                                <div className='link'>
                                    {menu.id === activeLink && menu.links.map((link, index) => (
                                        <p key={index}> {link.name} </p>
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

export default Menu