import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Photo } from './style';
import LoginInput from '../../components/LoginInput';
import LoginButton from '../../components/LoginButton';
import LoginArrow from '../../components/LoginArrow';

const Login: React.FC = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [username, setUsername] = useState('');

    const navigate = useNavigate();

    const handleClickButton = () => {
        setShowLogin(!showLogin);
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }

    const handleLogin = () => {
        navigate('/loading', { state: { username } });
    }

    return (
        <Container>
            <Photo>
                <div>
                    <h1 className='title-text'>Portifólio - Yago Fontanez</h1>
                </div>
                <LoginButton onClick={handleClickButton} />
                <p className='text-login'>Por favor, inicie sua <span>sessão</span></p>
                <div style={{
                    display: showLogin ? 'flex' : 'none',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <LoginInput onChange={handleInputChange} />
                    <LoginArrow onClick={handleLogin} />
                </div>
            </Photo>
        </Container>
    );
}

export default Login;
