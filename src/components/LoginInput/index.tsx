import React from 'react';
import { Container } from './style';

interface LoginInputProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const LoginInput: React.FC<LoginInputProps> = ({onChange}) => {
    return (
        <Container>
            <input placeholder="Usuário" className="input" name="text" type="text"  onChange={onChange} />
        </Container>
    );

}

export default LoginInput;