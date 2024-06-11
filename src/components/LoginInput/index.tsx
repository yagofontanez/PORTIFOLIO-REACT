import React from 'react';
import { Container } from './style';

interface LoginInputProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const LoginInput: React.FC<LoginInputProps> = ({onChange, onKeyDown}) => {
    return (
        <Container>
            <input placeholder="Usuário" className="input" name="text" type="text" onKeyDown={onKeyDown} onChange={onChange} />
        </Container>
    );

}

export default LoginInput;