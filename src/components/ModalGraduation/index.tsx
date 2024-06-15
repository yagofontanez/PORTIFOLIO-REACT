import React from 'react';
import { Container } from './style';
import logoIte from '../../assets/ite.png';

interface PropsModalGraduation {
    language: any;
}

const ModalGraduation: React.FC<PropsModalGraduation> = ({ language }) => {

    return (
        <Container>
            <img
                onClick={() => window.location.href = 'https://ite.edu.br'}
                src={logoIte}
                width={350}
                style={{cursor: 'pointer'}}
            />
            <div className="container-texts">
                <h2>{language === 'PT-BR' ? 'Cursando Sistemas de Informação / ADS' : 'Studying Information Systems / Systems Analysis and Development'}</h2>
                <p>{language === 'PT-BR' ? 'Duração: 3 anos - 6 semestres' : 'Duration: 3 years - 6 semesters'}</p>
                <a target='_blank' href="https://ite.edu.br/cursos/bacharelado/sistemas-de-informacao">{language === 'PT-BR' ? 'Ver Matérias' : 'See Articles'}</a>
            </div>
            <div className="cursos-realizados">
                <h2>{language === 'PT-BR' ? 'Cursos Realizados:' : 'Completed courses:'}</h2>
                <ul>
                    <li>{language === 'PT-BR' ? 'Informática Master' : 'Computing'} - Prepara Cursos</li>
                    <li>{language === 'PT-BR' ? 'Montagem e Manutenção de Computadores, Notebooks e Celulares' : 'Assembly and Maintenance of Computers, Notebooks and Cell Phones'} - Prepara Cursos</li>
                    <li>{language === 'PT-BR' ? 'Redes' : 'Networks'} - Prepara Cursos</li>
                    <li>UX Designer - Dio.me</li>
                    <li>HTML Web Developer - Dio.me</li>
                    <li>CSS Web Developer - Dio.me</li>
                    <li>JavaScript Developer - Dio.me</li>
                    <li>{language === 'PT-BR' ? 'Bootcamp SPTech Desenvolvimento Frontend' : 'Frontend Development Bootcamp SPTech'} - Dio.me</li>
                    <li>{language === 'PT-BR' ? 'Criação de Aplicativos' : 'Application Creation'} - CEBRAC</li>
                    <li>{language === 'PT-BR' ? 'JavaScript do Básico ao Avançado': 'JavaScript from Basic to Advanced' } - Udemy</li>
                    <li>{language === 'PT-BR' ? 'Curso JavaScript e TypeScript do básico ao avançado' : 'JavaScript and TypeScript from Basic to Advanced'} - Udemy</li>
                </ul>
            </div>
        </Container>
    );

}

export default ModalGraduation;