import React from 'react';
import { Container } from './style';

interface PropsModalProjects {
    language: any;
}

const ModalProjects: React.FC<PropsModalProjects> = ({ language }) => {
    return (
        <Container>
            <div className='experiencia-tdp'>
                <div className="parte-cima">
                    <h1>{language === 'PT-BR' ? 'Desenvolvedor FullStack Web' : 'Web FullStack Developer'}</h1>
                </div>
                <div className="parte-baixo">
                    <h2><span>TDP Sistemas</span>{language === 'PT-BR' ? '- 02/2024 até dias atuais' : '2024/02 until present day'}</h2>
                    <p>{language === 'PT-BR' ? 'Atuo como desenvolvedor fullstack web, criando e alterando sistemas de gestão para empresas. Linguagens utilizadas: React, TypeScript, JavaScript, NodeJS.' : 'I work as a fullstack web developer, creating and changing management systems for companies. Languages used: React, TypeScript, JavaScript, NodeJS.'}</p>
                </div>
            </div>
        </Container>
    );

}

export default ModalProjects;