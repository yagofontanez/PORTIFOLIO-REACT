import React from 'react';
import { Container } from './style';
import logoIte from '../../assets/ite.png';

const ModalGraduation: React.FC = () => {

    return (
        <Container>
            <img
                onClick={() => window.location.href = 'https://ite.edu.br'}
                src={logoIte}
                width={350}
                style={{cursor: 'pointer'}}
            />
            <div className="container-texts">
                <h2>Cursando Sistemas de Informação / ADS</h2>
                <p>Duração: 3 anos - 6 semestres</p>
                <a target='_blank' href="https://ite.edu.br/cursos/bacharelado/sistemas-de-informacao">Ver Matérias</a>
            </div>
        </Container>
    );

}

export default ModalGraduation;