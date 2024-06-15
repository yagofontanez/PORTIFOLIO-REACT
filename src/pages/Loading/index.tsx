import React, { useEffect } from 'react';
import { Container } from './style';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Loading: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { username } = (location.state as { username: string }) || { username: 'Usuário' };
    const { t } = useTranslation();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/home', { state: { username } });
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigate, username]);

    return (
        <Container>
            <div className="spinner">
                <div className="spinner1"></div>
            </div>
            <div>
                <p className='bem-vindo'>{t('Bem vindo(a)')}, {username}</p>
            </div>
        </Container>
    );
}

export default Loading;
