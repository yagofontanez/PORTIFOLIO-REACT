import React, { useEffect } from 'react';
import { Container } from './style';
import { useNavigate, useLocation } from 'react-router-dom';

const Loading: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { username } = (location.state as { username: string }) || { username: 'Usuário' };

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/home', { state: { username } });
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <Container>
            <div className="spinner">
                <div className="spinner1"></div>
            </div>
            <div>
                <p className='bem-vindo'>Bem vindo(a), {username}</p>
            </div>
        </Container>
    );
}

export default Loading;
