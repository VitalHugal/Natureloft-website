import React, { useState } from 'react';
import "./Home.css";

import LogoBig from "../assets/tent(4).png";
import photo1 from "../assets/photos/photo1.jpg";
import photo2 from "../assets/photos/photo2.jpg";
import photo3 from "../assets/photos/photo3.jpg";
import photo4 from "../assets/photos/photo4.jpg";
import photo5 from "../assets/photos/photo5.jpg";
import photo6 from "../assets/photos/photo6.jpg";
import photo7 from "../assets/photos/photo7.jpg";
import photo8 from "../assets/photos/photo8.jpg";
import photo9 from "../assets/photos/photo9.jpg";
import lefthButton from "../assets/button/esquerda.png";
import rigthButton from "../assets/button/direita.png";

const Home = () => {

    const photos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9];
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

    const avançarFoto = () => {
        setCurrentPhotoIndex((prevIndex) =>
            prevIndex === photos.length - 1 ? 0 : prevIndex + 1
        );
    };

    const retrocederFoto = () => {
        setCurrentPhotoIndex((prevIndex) =>
            prevIndex === 0 ? photos.length - 1 : prevIndex - 1
        );
    };

    return (
        <main>
            <section id='section-logo'>
                <div id='logo-container'>
                    <img src={LogoBig} alt="Logo" />
                    <h1>NatureLoft</h1>
                </div>
            </section>
            <section id='section-photos'>
                <div id='container-info'>
                    <h2>Aventuras ao Ar Livre com NatureLoft</h2>
                    <p>
                        Descubra a beleza e a serenidade da natureza com a NatureLoft. Nossas fotos capturam momentos únicos de aventuras ao ar livre, desde o nascer do sol refletido em lagos tranquilos até fogueiras aconchegantes sob um céu estrelado. Cada imagem é um convite para explorar, relaxar e se reconectar com a natureza.
                    </p>
                    <p>
                        Navegue por nossas galerias e deixe-se inspirar por paisagens deslumbrantes e experiências autênticas de camping. Quer você seja um campista experiente ou um iniciante em busca de sua primeira aventura, a NatureLoft está aqui para guiá-lo em cada passo do caminho.
                    </p>

                    <p>
                        Prepare-se para criar memórias inesquecíveis em meio à natureza. Venha explorar, acampar e viver a aventura com a NatureLoft.
                    </p>
                </div>
                <div id='container-photos'>
                    <button className='buttonAnimations' onClick={() => retrocederFoto()}> <img className='imgButton' src={lefthButton} alt="button" /> </button>
                    <img id='imgScroll' src={photos[currentPhotoIndex]} alt="img" />
                    <button className='buttonAnimations' onClick={() => avançarFoto()}> <img className='imgButton' src={rigthButton} alt="button" /> </button>
                </div>
            </section>
        </main>
    )
}

export default Home;
