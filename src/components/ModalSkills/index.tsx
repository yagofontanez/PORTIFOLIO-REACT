import React, { useState } from 'react';
import { Container } from './style';
import { IoIosArrowDown } from 'react-icons/io';

interface ModalSkillsProps {
    language: string;
}

const ModalSkills: React.FC<ModalSkillsProps> = ({ language }) => {

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
                <h1>{language === 'PT-BR' ? 'Soft Skills' : 'Soft Skills'}</h1>
                <div className='skills'>
                    <ul>
                        <li>{language === 'PT-BR' ? 'Trabalho em equipe' : 'Teamwork'}</li>
                        <li>{language === 'PT-BR' ? 'Proatividade' : 'Proactivity'}</li>
                        <li>{language === 'PT-BR' ? 'Foco' : 'Focus'}</li>
                        <li>{language === 'PT-BR' ? 'Força de vontade' : 'Willpower'}</li>
                        <li>{language === 'PT-BR' ? 'Habilidade em solucionar problemas facilmente' : 'Problem-solving skills'}</li>
                    </ul>
                </div>
            </div>
            <div className='conainer-skills'>
                <h1>{language === 'PT-BR' ? 'Hard Skills' : 'Hard Skills'}</h1>
                <div className='skills'>
                    <ul className='ul'>
                        <li>{language === 'PT-BR' ? 'Lógica de Programação' : 'Programming Logic'}</li>
                        <div className="li-arrow" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                            <IoIosArrowDown style={{color: 'rebeccapurple'}} />
                            <li onClick={handleShowLanguages} style={{ color: 'rebeccapurple', cursor: 'pointer', listStyle: 'none' }}>
                                {language === 'PT-BR' ? 'Desenvolvimento Web' : 'Web Development'}
                            </li>
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
                            <li style={{ color: 'rebeccapurple', cursor: 'pointer', listStyle: 'none' }} onClick={handleShowMobile}>
                                {language === 'PT-BR' ? 'Desenvolvimento Mobile' : 'Mobile Development'}
                            </li>
                        </div>
                        <div style={{ display: showMobile ? 'flex' : 'none', flexDirection: 'column' }} className="container-show-languages-mobile">
                            <p style={{ marginLeft: '1rem', fontSize: '12px' }}>React Native</p>
                            <p style={{ marginLeft: '1rem', fontSize: '12px' }}>JavaScript</p>
                        </div>
                        <li>Landing Pages</li>
                        <div className="li-arrow" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                            <IoIosArrowDown style={{color: 'rebeccapurple'}} />
                            <li style={{ color: 'rebeccapurple', cursor: 'pointer', listStyle: 'none' }} onClick={handleShowDb}>
                                {language === 'PT-BR' ? 'Banco de dados relacional' : 'Relational Database'}
                            </li>
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
