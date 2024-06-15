import React, { useState } from 'react';
import { Container } from './style';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import cvPortuguese from '../../assets/cv/Curriculo Yago Português.pdf';
import cvEnglish from '../../assets/cv/Curriculo Yago Inglês.pdf';

interface PropsModalCV {
    language: any;
}

const ModalCV: React.FC<PropsModalCV> = ({ language }) => {
    const [showPDF, setShowPDF] = useState(false);

    const handleShowCV = () => {
        setShowPDF(!showPDF);
    };

    return (
        <Container style={{top: showPDF ? '0' : '-30rem', flexDirection: showPDF ? 'column' : 'row', gap: '1rem'}}>
            <button className="button" onClick={handleShowCV}>
                <div className="container">
                    <div className="folder folder_one"></div>
                    <div className="folder folder_two"></div>
                    <div className="folder folder_three"></div>
                    <div className="folder folder_four"></div>
                </div>
                <div className="active_line"></div>
                <span className="text">{language === 'PT-BR' ? 'Currículo' : 'CV'}</span>
            </button>

            {showPDF && (
                <div className="pdf-viewer">
                    <iframe 
                        src={language === 'PT-BR' ? cvPortuguese : cvEnglish} 
                        width="100%" 
                        height="100%"
                        title="Currículo"
                    ></iframe>
                </div>
            )}
        </Container>
    );

}

export default ModalCV;