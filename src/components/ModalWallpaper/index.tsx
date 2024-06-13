import React from 'react';
import { Container } from './style';
import bgd1 from "../../assets/backgroundLogin.png";
import bgd2 from "../../assets/backgroundLoginV2.jpeg";
import bgd3 from "../../assets/backgroundLoginV3.jpg";
import bgd4 from "../../assets/backgroundLoginV4.jpg";

interface ModalWallpaperProps {
    onSelect: (src: string) => void;
}

const ModalWallpaper: React.FC<ModalWallpaperProps> = ({ onSelect }) => {

    return (
        <Container>
            <h1 style={{color: '#fff'}}>Selecione o Wallpaper</h1>
            <div className="container-examples-wpp">
                <img src={bgd1} width={250} onClick={() => onSelect(bgd1)} />
                <img src={bgd2} width={250} onClick={() => onSelect(bgd2)} />
                <img src={bgd3} width={250} onClick={() => onSelect(bgd3)} />
                <img src={bgd4} width={250} onClick={() => onSelect(bgd4)} />
            </div>
        </Container>
    );

}

export default ModalWallpaper;