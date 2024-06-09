import React, { useState } from 'react';
import { Container } from './style';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import CV from '../../assets/cv/Curriculo Yago.pdf';

const ModalCV: React.FC = () => {
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
                <span className="text">Currículo</span>
            </button>

            {showPDF && (
                <div className="pdf-viewer">
                    <iframe 
                        src={CV} 
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