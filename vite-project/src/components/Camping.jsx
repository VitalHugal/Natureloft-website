import React, { useState } from 'react';
import "./Camping.css";

import video1 from "../assets/video/video1.mp4"
import video2 from "../assets/video/video2.mp4"
import video3 from "../assets/video/video3.mp4"
import video4 from "../assets/video/video4.mp4"
import video5 from "../assets/video/video5.mp4"
import video6 from "../assets/video/video6.mp4"
import video7 from "../assets/video/video7.mp4"
import lefthButton from "../assets/button/esquerda.png";
import rigthButton from "../assets/button/direita.png";

const Camping = () => {

  const videos = [video1, video2, video3, video4, video5, video6, video7];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const avançarVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const retrocederVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  return (
    <main>
      <h1 id='camping-title'>Venha nos visitar e descubra a magia de acampar no NatureLoft!</h1>
      <div id='camping-info'>
        <p id='text-one'>No NatureLoft, oferecemos uma experiência de acampamento incomparável, onde você pode se reconectar com a natureza e desfrutar de momentos inesquecíveis. Nosso acampamento é o lugar perfeito para quem busca tranquilidade, aventura e contato direto com o ambiente natural.</p>

        <h2 id='camping-subtitle'>O que oferecemos:</h2>

        <div id='camping-list-info'>
          <ul>
            <li className='list-title'>Churrasqueira Livre:</li>
            <li className='list-information'>
              Desfrute de deliciosos churrascos ao ar livre com nossos espaços de churrasqueira disponíveis para todos os campistas.
            </li>

            <li className='list-title'>Fogueiras Permitidas:</li>
            <li className='list-information'>
              Acenda sua fogueira nas áreas delimitadas e aproveite as noites estreladas ao redor do calor do fogo, compartilhando histórias e risadas.
            </li>

            <li className='list-title'>Área para Motorhomes:</li>
            <li className='list-information'>
              Temos um espaço especialmente preparado para quem viaja de motorhome, com todas as comodidades necessárias para uma estadia confortável.
            </li>

            <li className='list-title'>Lagoa:</li>
            <li className='list-information'>
              Refresque-se na nossa lagoa cristalina, ideal para nadar, pescar ou simplesmente relaxar à beira da água.
            </li>

            <li className='list-title'>Wi-Fi em Áreas Selecionadas:</li>
            <li className='list-information'>
              Permaneça conectado com o mundo enquanto desfruta da tranquilidade do nosso acampamento.
            </li>

            <li className='list-title'>Cachoeiras:</li>
            <li className='list-information'>
              Explore nossas duas cachoeiras deslumbrantes, perfeitas para caminhadas e piqueniques, proporcionando uma experiência de imersão total na natureza.
            </li>

            <li className='list-title'>Trilhas para Caminhadas:</li>
            <li className='list-information'>
              Descubra as várias trilhas que cortam o acampamento, perfeitas para caminhadas e observação da vida selvagem.
            </li>

            <li className='list-title'>Área de Recreação:</li>
            <li className='list-information'>
              Espaços para jogos e atividades ao ar livre, garantindo diversão para toda a família.
            </li>

            <li className='list-title'>Banheiros e Duchas Quentes:</li>
            <li className='list-information'>
              Facilidades modernas para garantir seu conforto durante toda a estadia.
            </li>

          </ul>
        </div>

        <p id='text-two'>No NatureLoft, acreditamos que o contato com a natureza é essencial para o bem-estar. Venha viver momentos inesquecíveis, criando memórias que durarão para sempre. Seja com amigos, familiares ou sozinho, nosso acampamento oferece tudo o que você precisa para uma experiência autêntica e revigorante.</p>

        <h3>Esperamos por você no NatureLoft, onde a natureza encontra o conforto!</h3>
      </div>

      <h3>Coletânea dos nosso vídeos </h3>

      <div id='container-video'>
        <button className='buttonAnimations' onClick={() => retrocederVideo()}> <img className='imgButton' src={lefthButton} alt="button" /> </button>
        <video id='videoScroll' src={videos[currentVideoIndex]} alt="video" controls />
        <button className='buttonAnimations' onClick={() => avançarVideo()}> <img className='imgButton' src={rigthButton} alt="button" /> </button>
      </div>
    </main>
  )
}

export default Camping