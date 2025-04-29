import React from "react";
import Menu from "../components/menu";
import Logo from "../components/logo";
import {
  ContainerBanner,
  ContainerBoloCaseiroMini,
  ContainerBoloChocolateCaseiro,
  ContainerBoloFormigueiro,
  ContainerBoloLaranja,
  ContainerBoloMilho,
  ContainerBoloPascoca,
  ContainerBoloPoteMaracuja,
  ContainerBolosPotes,
  ContainerBotaoCardapio,
  ContainerCardBanner,
  ContainerDescricaoBolos,
  ContainerEntregas,
  ContainerLogo,
  ContainerLoja,
  ContainerMaps,
  ContainerSobre,
  TituloDiv,
  VerCardapio,
  Whatsapp,
} from "../Styles/styled";
import imgBolosLogo from "../assets/Post para instagram bolos e doces delicado bege rosa azul (5) (1).png";
import imgIreneElaine from "../assets/Logo para confeitaria simples rosa.png";
import imgLoja from "../assets/foto-loja02.jpg";
import imgBoloPote from "../assets/bolo-pote-deleite.png";
import imgBoloLaranja from "../assets/bolo-laranja.png";
import imgBanner from "../assets/Banner Promoção Loja de Bolo Padaria Confeitaria Moderno Marrom Rosa Amarelo (4).png";
import imgBolosBanner from "../assets/Banner Promoção Loja de Bolo Padaria Confeitaria Moderno Marrom Rosa Amarelo (3).png";

import imgBoloPoteMaracuja from "../assets/bolo-pote-pequeno02.png";
import imgZap from "../assets/whatsapp.png";
import imgEntrega from "../assets/entregas-delivery.png";
import imgLojaDeLeite from "../assets/img-loja-fora.jpg";
import imgAmbiente from "../assets/foto-ambiente-loja.jpg";
import imgBoloMilho from "../assets/bolo-milho.png";
import imgCaseiroChocolate from "../assets/bolo-caseiro02.png";
import imgBoloCaseiro from "../assets/bolo-caseiro01.png";
import imgBoloPoteNinho from "../assets/bolo-pote-deleite04.png";
import boloPoteNinho from "../assets/bolo-pote-deleite01.png";
import imgBoloPascoca from "../assets/bolo-pote-deleite02.png";
import imgBoloFuba from "../assets/bolo-fuba.png";
import imgBoloIougut from "../assets/bolo-igout.png";
import imgBoloFormigueiro from "../assets/bolo-formigueiro.png";
import imgBannerCard from "../assets/bolo-brawler.png";
import bannerCaseiros from "../assets/Banner Promoção Loja de Bolo Padaria Confeitaria Moderno Marrom Rosa Amarelo (5).png";
import imgPaodeMelBrigadeiro from "../assets/pao-de-mel04.png";
import imgPaodeMell from "../assets/pão-de-mel01.png";
import imgLogoContainer from "../assets/Banner Loja Virtual Confeitaria Padaria Colorido Vermelho Bege (1).png";
import Avaliacoes from "./avaliacoes.jsx";
import Footer from "../components/footer.jsx";
import { Link } from "react-router-dom";
import ImageSlider from "../components/slider.jsx";

const Home = () => {
  return (
    <>
      <Menu />
      <Logo />
      <ContainerLogo>
        <h2>
          Transformamos momentos em memórias doces! Bolo de festa, bolo no pote,
          doces caseiros… Tudo feito com carinho para deixar seu dia ainda mais
          especial. Experimente o sabor da felicidade!
        </h2>
        <img src={imgBolosLogo} />
      </ContainerLogo>

      <TituloDiv>
        <h2>Nossos bolos e doces</h2>
      </TituloDiv>

      <ImageSlider />

      <ContainerCardBanner>
        <p>
          Bolos feitos com amor para adoçar seu dia! Escolha o seu favorito e
          aproveite cada pedacinho! Clique no botão abaixo e confira nosso
          cardápio completo!
        </p>
        <img src={imgBannerCard} />
      </ContainerCardBanner>

      <ContainerBotaoCardapio>
        <Link className="link-cardapio" to="/boloscarrinho">
          Ver Cardápio
        </Link>
      </ContainerBotaoCardapio>

      <TituloDiv>
        <h2>Sobre Nós</h2>
      </TituloDiv>

      <ContainerSobre>
        <h2>
          Com 15 anos de experiência, trazemos o doce perfeito para cada momento
          especial! Nossos bolos e doces são feitos com cuidado, qualidade e
          aquele toque de amor que só quem ama o que faz pode oferecer.
          Surpreenda-se com sabores que encantam e cada partida inesquecível.
          Encomende e experimente o sabor da perfeição!
        </h2>
        <img src={imgIreneElaine} />
      </ContainerSobre>

      <TituloDiv>
        <h2>Nossa Localização</h2>
      </TituloDiv>

      <ContainerMaps>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14632.627359217023!2d-46.5645981!3d-23.6914091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce42332a23ad91%3A0x57f4e2493b5f7a4b!2sS%C3%A3o%20Bernardo%20do%20Campo%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1714325123456!5m2!1spt-BR!2sbr"
          width="100%"
          height="450"
          style={{ border: 0, borderRadius: "10px" , margin: "10px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </ContainerMaps>

      <Avaliacoes />

      <Whatsapp>
        <a href="https://wa.me/5511986414262" target="_blank">
          <img src={imgZap} />
        </a>
      </Whatsapp>

      <Footer />
    </>
  );
};

export default Home;
