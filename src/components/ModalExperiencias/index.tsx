import React from 'react';
import { Container } from './style';

const ModalProjects: React.FC = () => {
    return (
        <Container>
            <div className='experiencia-tdp'>
                <div className="parte-cima">
                    <h1>Desenvolvedor FullStack Web</h1>
                </div>
                <div className="parte-baixo">
                    <h2><span>TDP Sistemas</span> - 02/2024 até dias atuais</h2>
                    <p>Atuo como desenvolvedor fullstack web, criando e alterando sistemas de gestão para empresas. Linguagens utilizadas: <span>React, TypeScript, JavaScript, NodeJS.</span></p>
                </div>
            </div>
        </Container>
    );

}

export default ModalProjects;