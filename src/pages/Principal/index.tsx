import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Container } from './style';
import ButtonAction from '../../components/ButtonAction';
import ModalProjects from '../../components/ModalProjects';
import ModalExperiencias from '../../components/ModalExperiencias';
import ModalSkills from '../../components/ModalSkills';
import ModalGraduation from '../../components/ModalGraduation';
import ModalCV from '../../components/ModalCV';
import { useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';
import ModalContact from '../../components/ModalContact';
import ModalWallpaper from '../../components/ModalWallpaper';
import defaultBg from "../../assets/backgroundLogin.png";

const Principal: React.FC = () => {
    const [openSection, setOpenSection] = useState('');
    const [showCV, setShowCV] = useState(false);
    const [showWallpaper, setShowWallpaper] = useState(false);
    const [background, setBackground] = useState<string>(defaultBg);
    const [changeLanguage, setChangeLanguage] = useState(false);
    const [language, setLanguage] = useState('PT-BR');
    const location = useLocation();
    const { username } = (location.state as { username: string }) || { username: 'Usuário' };
    const dateToday = JSON.stringify(new Date());
    const parsedDate = new Date(JSON.parse(dateToday));
    const formatedDate = moment(parsedDate).format('DD-MM-YYYY').replace(/-/g, '/');
    const formatedDateEUA = moment(parsedDate).format('MM-DD-YYYY').replace(/-/g, '/');

    const handleOpenSection = (section: React.HTMLInputTypeAttribute) => {
        if (openSection === section) {
            setOpenSection('');
        } else {
            setOpenSection(section);
            setShowWallpaper(false);
            setShowCV(false);
        }
    };

    const navigate = useNavigate();

    const handleOpenModal = () => handleOpenSection('modal');
    const handleOpenProjetos = () => handleOpenSection('projects');
    const handleOpenExperiencias = () => handleOpenSection('experiences');
    const handleOpenSkills = () => handleOpenSection('skills');
    const handleOpenFormacao = () => handleOpenSection('graduation');
    const handleOpenContato = () => handleOpenSection('contact');

    const openModal = openSection === 'modal';
    const openProjects = openSection === 'projects';
    const openExperiences = openSection === 'experiences';
    const openSkills = openSection === 'skills';
    const openGraduation = openSection === 'graduation';
    const openContact = openSection === 'contact';

    const handleReturnLogin = () => {
        navigate('/');
    };

    const handleShowCV = () => {
        setOpenSection('');
        setShowCV(true);
        setShowWallpaper(false);
    }

    const handleShowChangeWallpaper = () => {
        setOpenSection('');
        setShowCV(false);
        setShowWallpaper(!showWallpaper);
    }

    const handleSelectWallpaper = (src: string) => {
        setBackground(src);
        setShowWallpaper(false);
    }

    const handleChangeLanguage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLanguage(event.target.value);
        setChangeLanguage(false);
    }


    return (
        <Container background={background}>
            <div className='principal-container'>
                <CSSTransition
                    in={openModal}
                    timeout={500}
                    classNames="modal"
                    unmountOnExit
                >
                    <div className='modal-navbar'>
                        <div className="folders">
                            <div className='folder-1'>
                                <ButtonAction nome={language === 'PT-BR' ? 'Projetos' : 'Projects'} onClick={handleOpenProjetos} />
                            </div>
                            <div className='folder-2'>
                                <ButtonAction nome={language === 'PT-BR' ? 'Experiências' : 'Career'} onClick={handleOpenExperiencias} />
                            </div>
                            <div className='folder-3'>
                                <ButtonAction nome={'Skills'} onClick={handleOpenSkills} />
                            </div>
                            <div className='folder-4'>
                                <ButtonAction nome={language === 'PT-BR' ? 'Formação' : 'Graduation'} onClick={handleOpenFormacao} />
                            </div>
                            <div className='folder-5'>
                                <ButtonAction nome={language === 'PT-BR' ? 'Contato' : 'Contact'} onClick={handleOpenContato} />
                            </div>
                        </div>
                        <div className="icons">
                            <div className="container-language">
                                <img width={48} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                            </div>
                            <div className="container-language">
                                <img width={48} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg" />
                            </div>
                            <div className="container-language">
                                <img width={48} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" />
                            </div>
                            <div className="container-language">
                                <img width={48} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
                            </div>
                            <div className="container-language">
                                <img width={48} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" />
                            </div>
                            <div className="container-language">
                                <img width={48} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" />
                            </div>
                        </div>
                    </div>
                </CSSTransition>
                {showCV && (
                    <ModalCV />
                )}
                {openProjects && (
                    <ModalProjects />
                )}
                {openExperiences && (
                    <ModalExperiencias />
                )}
                {openSkills && (
                    <ModalSkills />
                )}
                {openGraduation && (
                    <ModalGraduation />
                )}
                {openContact && (
                    <ModalContact onClick={handleShowCV} />
                )}
                {showWallpaper && (
                    <ModalWallpaper onSelect={handleSelectWallpaper} />
                )}
                <div className='navbar'>
                    <label className="hamburger">
                        <input onClick={handleOpenModal} checked={openModal ? true : false} type="checkbox" />
                        <svg viewBox="0 0 32 32">
                            <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                            <path className="line" d="M7 16 27 16"></path>
                        </svg>
                    </label>
                    <div className="name-and-logoff" style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '2rem',
                    }}>
                        {changeLanguage && (
                            <form className="radio-form">
                                <input
                                    checked={language === 'PT-BR'}
                                    value="PT-BR"
                                    name="language"
                                    type="radio"
                                    id="ptbr"
                                    onChange={handleChangeLanguage}
                                />
                                <label htmlFor="ptbr"><span></span>PT-BR</label>
                                <input
                                    checked={language === 'EN'}
                                    value="EN"
                                    name="language"
                                    type="radio"
                                    id="en"
                                    onChange={handleChangeLanguage}
                                />
                                <label htmlFor="en"><span></span>EUA</label>
                                <div className="worm">
                                    <div className="worm__segment"></div>
                                </div>
                            </form>
                        )}
                        <div className="container-tooltips">
                            <div className="tooltip">
                                <button onClick={() => setChangeLanguage(!changeLanguage)}>☰</button>
                                <div className="tooltiptext">{language === 'PT-BR' ? 'Trocar Linguagem' : 'Change Language'}</div>
                            </div>
                            <div className="tooltip">
                                <button onClick={handleShowChangeWallpaper}>☰</button>
                                <div className="tooltiptext">{language === 'PT-BR' ? 'Trocar Wallpaper' : 'Change Wallpaper'}</div>
                            </div>
                        </div>
                        <div className="logoff" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem' }}>
                            <p style={{ fontWeight: '300' }}>{username}</p>
                            <p style={{ fontWeight: '300' }}>{language === 'PT-BR' ? formatedDate : formatedDateEUA}</p>
                        </div>
                        <div>
                            <input onClick={handleReturnLogin} id="checkbox-input" type="checkbox" />
                            <label className="switch" htmlFor="checkbox-input">
                                <svg
                                    viewBox="0 0 128 128"
                                    height="1.3em"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill='#000'
                                >
                                    <path
                                        d="M77.547 120.684h-5.765l-1.698 3.012a7.477 7.477 0 0 1-6.513 3.804h-.003a7.479 7.479 0 0 1-6.513-3.804l-1.698-3.012h-5.765v-4.06h27.956v4.06z"
                                    ></path>
                                    <path
                                        d="M77.547 113.65H49.591v-4.279h27.956v4.279zm0-11.711H49.591v4.279h27.956v-4.279zm38.587-32.576-12.209-3.271.92-3.434 12.209 3.271-.92 3.434zm-104.268 0-.92-3.434 12.209-3.271.92 3.434-12.209 3.271zm92.979-24.913-.92-3.434 12.209-3.272.92 3.434-12.209 3.272zm-81.69 0-12.209-3.272.92-3.434 12.209 3.272-.92 3.434zM94.82 25.247l-2.514-2.514 8.938-8.938 2.514 2.514-8.938 8.938zm-61.64 0-8.937-8.938 2.514-2.514 8.937 8.938-2.514 2.514zm43.358-11.618-3.434-.92L76.376.5l3.434.92-3.272 12.209zm-25.076 0L48.191 1.42 51.625.5l3.272 12.209-3.435.92z"
                                    ></path>
                                    <path
                                        d="M59.802 64.141h7.535v34.934h-7.535V64.141zm3.767-44.754c-18.485-.53-33.631 14.817-33.631 33.824 0 9.781 4.016 18.581 10.431 24.753 5.637 5.423 9.222 13.147 9.222 21.111h7.84V64.141H51.75c-4.44 0-8.051-3.612-8.051-8.051s3.612-8.051 8.051-8.051 8.052 3.612 8.052 8.051v5.681h7.535V56.09c0-4.44 3.612-8.051 8.052-8.051 4.44 0 8.051 3.612 8.051 8.051s-3.612 8.051-8.051 8.051h-5.682v34.934h7.84c0-7.964 3.584-15.688 9.222-21.111C93.184 71.792 97.2 62.992 97.2 53.211c0-19.008-15.146-34.355-33.631-33.824zM51.75 50.408a5.687 5.687 0 0 0-5.681 5.681 5.687 5.687 0 0 0 5.681 5.681h5.682v-5.681a5.688 5.688 0 0 0-5.682-5.681zM75.389 61.77h-5.682v-5.681a5.688 5.688 0 0 1 5.682-5.681 5.687 5.687 0 0 1 5.681 5.681 5.687 5.687 0 0 1-5.681 5.681z"
                                    ></path>
                                </svg>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Principal;
