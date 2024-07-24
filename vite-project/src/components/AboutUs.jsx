import React from 'react'

import "./AboutUs.css";

const AboutUs = () => {
  return (
    <main>
      <h1 id='about-us-title'>Sobre Nós</h1>
      <div id='about-us-info'>
        <p id='about-us-text-one'>
          Bem-vindo ao NatureLoft, um refúgio natural onde você pode se desconectar do estresse da vida cotidiana e se reconectar com a beleza da natureza. Localizado no coração da Serra Verde, nosso acampamento é o destino perfeito para aventureiros, famílias e entusiastas da natureza.
        </p>

        <h2 className='about-us-subtitle'>Nossa História</h2>
        <p id='about-us-text-two'>
          O NatureLoft foi fundado em 2010 por um grupo de amigos apaixonados por camping e natureza. Com o objetivo de criar um espaço onde todos pudessem desfrutar da tranquilidade e beleza do ambiente natural, transformamos uma área de 100 hectares em um acampamento sustentável e acolhedor.
        </p>

        <h2 className='about-us-subtitle'>Nossa Missão</h2>
        <p id='about-us-text-three'>
          Nossa missão é proporcionar uma experiência autêntica e inesquecível de camping, combinando conforto, segurança e respeito ao meio ambiente. Acreditamos que o contato com a natureza é essencial para o bem-estar físico e mental, e estamos comprometidos em oferecer um ambiente onde todos possam desfrutar dessa conexão.
        </p>

        <h2 className='about-us-subtitle'>Localização</h2>
        <p id='about-us-text-four'>
          NatureLoft está situado na Estrada da Cachoeira, Km 35, Serra Verde, Estado do Paraíso. Estamos a apenas 2 horas de carro da capital, oferecendo fácil acesso para quem deseja uma escapada rápida da cidade.
        </p>

        <h2 className='about-us-subtitle'>Contato</h2>
        <ul>
          <li className='list-about-us'>Telefone: (11) 1234-5678</li>
          <li className='list-about-us'>Email: contato@natureloft.com.br</li>
        </ul>

        <h2 className='about-us-subtitle'>Redes Sociais:</h2>
        <ul>
          <li className='list-about-us'>Facebook: facebook.com/natureloft</li>
          <li className='list-about-us'>Instagram: instagram.com/natureloft</li>
        </ul>

        <h2 className='about-us-subtitle'>Venha Nos Visitar!</h2>
        <p id='about-us-text-five'>
          No NatureLoft, você encontrará um ambiente acolhedor e uma equipe dedicada a proporcionar a melhor experiência de camping possível. Seja para uma aventura emocionante ou um retiro tranquilo, estamos prontos para recebê-lo de braços abertos.
        </p>

        <h3>
          NatureLoft - Onde a Natureza Encontra o Conforto.
        </h3>
      </div>
    </main>
  )
}

export default AboutUs