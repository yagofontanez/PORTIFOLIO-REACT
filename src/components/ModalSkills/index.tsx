import React, { useState } from 'react';
import { Container } from './style';
import { IoIosArrowDown } from 'react-icons/io';

const ModalSkills: React.FC = () => {

    const [showLanguages, setShowLanguage] = useState(false);
    const [showMobile, setShowMobile] = useState(false);
    const [showDb, setShowDb] = useState(false);

    const handleShowLanguages = () => {
        setShowLanguage(!showLanguages);
        setShowMobile(false);
        setShowDb(false);
    };

    const handleShowMobile = () => {
        setShowMobile(!showMobile);
        setShowLanguage(false);
        setShowDb(false);
    };

    const handleShowDb = () => {
        setShowDb(!showDb);
        setShowMobile(false);
        setShowLanguage(false);
    }

    return (
        <Container>
            <div className='conainer-skills'>
                <h1>Soft Skills</h1>
                <div className='skills'>
                    <ul>
                        <li>Trabalho em equipe</li>
                        <li>Proatividade</li>
                        <li>Foco</li>
                        <li>Força de vontade</li>
                        <li>Habilidade em solucionar problemas facilmente</li>
                    </ul>
                </div>
            </div>
            <div className='conainer-skills'>
                <h1>Hard Skills</h1>
                <div className='skills'>
                    <ul className='ul'>
                        <li>Lógica de Programação</li>
                        <div className="li-arrow" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                            <IoIosArrowDown style={{color: 'rebeccapurple'}} />
                            <li onClick={handleShowLanguages} style={{ color: 'rebeccapurple', cursor: 'pointer', listStyle: 'none' }}>Desenvolvimento Web</li>
                        </div>
                        <div style={{ display: showLanguages ? 'flex' : 'none', flexDirection: 'column' }} className="container-languages">
                            <p style={{ marginLeft: '1rem', fontSize: '12px' }}>React</p>
                            <p style={{ marginLeft: '1rem', fontSize: '12px' }}>TypeScript</p>
                            <p style={{ marginLeft: '1rem', fontSize: '12px' }}>NodeJS</p>
                            <p style={{ marginLeft: '1rem', fontSize: '12px' }}>HTML5</p>
                            <p style={{ marginLeft: '1rem', fontSize: '12px' }}>PHP</p>
                            <p style={{ marginLeft: '1rem', fontSize: '12px' }}>Styled Components</p>
                        </div>
                        <div className="li-arrow" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                            <IoIosArrowDown style={{color: 'rebeccapurple'}} />
                            <li style={{ color: 'rebeccapurple', cursor: 'pointer', listStyle: 'none' }} onClick={handleShowMobile}>Desenvolvimento Mobile</li>
                        </div>
                        <div style={{ display: showMobile ? 'flex' : 'none', flexDirection: 'column' }} className="container-show-languages-mobile">
                            <p style={{ marginLeft: '1rem', fontSize: '12px' }}>React Native</p>
                            <p style={{ marginLeft: '1rem', fontSize: '12px' }}>JavaScript</p>
                        </div>
                        <li>Landing Pages</li>
                        <div className="li-arrow" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                            <IoIosArrowDown style={{color: 'rebeccapurple'}} />
                            <li style={{ color: 'rebeccapurple', cursor: 'pointer', listStyle: 'none' }} onClick={handleShowDb}>Banco de dados relacional</li>
                        </div>
                        <div style={{ display: showDb ? 'flex' : 'none', flexDirection: 'column' }} className="container-show-db">
                            <p style={{ marginLeft: '1rem', fontSize: '12px' }}>MySQL</p>
                            <p style={{ marginLeft: '1rem', fontSize: '12px' }}>PostgreSQL</p>
                            <p style={{ marginLeft: '1rem', fontSize: '12px' }}>MongoDB</p>
                        </div>
                    </ul>
                </div>
            </div>
        </Container>
    );

}

export default ModalSkills;