import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Photo } from './style';
import LoginInput from '../../components/LoginInput';
import LoginButton from '../../components/LoginButton';
import LoginArrow from '../../components/LoginArrow';

const Login: React.FC = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [username, setUsername] = useState('');
    const [showError, setShowError] = useState(false);

    const navigate = useNavigate();

    const handleClickButton = () => {
        setShowLogin(!showLogin);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
        if (showError) {
            setShowError(false);
        }
    };

    const handleLogin = () => {
        if (username.trim() !== '') {
            navigate('/loading', { state: { username } });
        } else {
            setShowError(true);
        }
    };

    const keyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            if (username.trim() !== '') {
                navigate('/loading', { state: { username } });
            } else {
                setShowError(true);
            }
        }
    };

    return (
        <Container>
            <Photo>
                <div>
                    <h1 className='title-text'>Portifólio - Yago Fontanez</h1>
                </div>
                <LoginButton onClick={handleClickButton} />
                <p className='text-login'>Por favor, inicie sua sessão</p>
                <div style={{
                    display: showLogin ? 'flex' : 'none',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <LoginInput onKeyDown={keyPress} onChange={handleInputChange} />
                    <LoginArrow onClick={handleLogin} />
                </div>
                {showError && (
                    <p className='error-text'>Por favor, digite um nome de usuário.</p>
                )}
            </Photo>
        </Container>
    );
}

export default Login;
