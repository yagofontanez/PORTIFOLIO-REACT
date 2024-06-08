import React from 'react';
import { Container } from './style';
import fotoUm from '../../assets/proj_1.jpg';
import fotoDois from '../../assets/proj_2.jpg';
import fotoTres from '../../assets/proj_4.jpg';
import fotoQuatro from '../../assets/proj_5.jpg';
import { GoLinkExternal } from 'react-icons/go';

const ModalProjects: React.FC = () => {
    return (
        <Container>
            <div className='container-project'>
                <img src={fotoUm} width={250} style={{borderRadius: '8px'}} />
                <a target='_blank' href='https://previssdotempo.netlify.app' className="name-and-link">
                    <p>Previsão do Tempo</p>
                    <GoLinkExternal />
                </a>
            </div>
            <div className='container-project'>
                <img src={fotoDois} width={250} style={{borderRadius: '8px'}} />
                <a target='_blank' href='https://calcsimc.netlify.app' className="name-and-link">
                    <p>Calculadora IMC</p>
                    <GoLinkExternal />
                </a>
            </div>
            <div className='container-project'>
                <img src={fotoTres} width={250} style={{borderRadius: '8px'}} />
                <a target='_blank' href='https://testenexaas-frontend.netlify.app' className="name-and-link">
                    <p>Listagem por API</p>
                    <GoLinkExternal />
                </a>
            </div>
            <div className='container-project'>
                <img src={fotoQuatro} width={250} style={{borderRadius: '8px'}} />
                <a target='_blank' href='https://burguer-template.netlify.app/' className="name-and-link">
                    <p>Landing Page</p>
                    <GoLinkExternal />
                </a>
            </div>
        </Container>
    );

}

export default ModalProjects;