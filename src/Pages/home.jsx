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
import imgBolosLogo from "../assets/Post para instagram bolos e doces delicado bege rosa azul (4) (1).png";
import imgIreneElaine from "../assets/ireneeelaine.jpg";
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
import imgBannerCard from "../assets/banner-bolos01.png"
import bannerCaseiros from "../assets/Banner Promoção Loja de Bolo Padaria Confeitaria Moderno Marrom Rosa Amarelo (5).png"
import imgPaodeMelBrigadeiro from "../assets/pao-de-mel04.png";
import imgPaodeMell from "../assets/pão-de-mel01.png";
import Avaliacoes from "./avaliacoes.jsx";
import Footer from "../components/footer.jsx";
import { Link } from "react-router-dom";


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
      <ContainerBanner>
        <img src={imgBolosBanner} />
      </ContainerBanner>

      <TituloDiv>
        <h2 style={{ margin: 14 }}>Conheça nosso cardápio bolos e doces</h2>
      </TituloDiv>

      <ContainerDescricaoBolos>
        <p>
          Bolos no pote feitos com amor e recheados de sabor! Cada colherada é
          uma explosão de felicidade, perfeita para adoçar seu dia ou presentear
          quem você ama. Feitos com ingredientes de qualidade e aquele toque
          especial de 15 anos de experiência, nossos bolos no pote são a escolha
          certa para quem busca praticidade sem abrir mão do sabor. Experimente
          e descubra seu novo doce favorito!
        </p>
        <img src={imgBoloPoteNinho} />
      </ContainerDescricaoBolos>

      <ContainerBolosPotes>
        <img src={boloPoteNinho} />
        <p>
          Uma explosão de sabor! O cremoso leite Ninho combinado com o
          irresistível chocolate em camadas que derretem na boca. Peça o seu e
          aproveite esse momento delicioso!
        </p>
      </ContainerBolosPotes>

      <ContainerBoloPascoca>
        <p>
          Sabor de festa junina o ano todo! Nosso Bolo de Pote de Paçoca tem o
          equilíbrio perfeito entre cremosidade e aquele gostinho irresistível
          de amendoim. Experimente!
        </p>
        <img src={imgBoloPascoca} />
      </ContainerBoloPascoca>

     <ContainerBanner>
      <img src={bannerCaseiros}/>
     </ContainerBanner>

      <ContainerDescricaoBolos>
        <p>
          Sabor de casa, carinho em cada pedaço! Experimente nosso bolo caseiro
          fofinho e irresistível. Perfeito para acompanhar aquele café especial!
        </p>
        <img src={imgBoloFuba} />
      </ContainerDescricaoBolos>

      <ContainerBolosPotes>
        <img src={imgBoloIougut} />
        <p>
          Super fofinho e molhadinho, o bolo de iogurte derrete na boca! Uma
          opção leve e deliciosa para qualquer momento do dia.
        </p>
      </ContainerBolosPotes>

      <ContainerBoloFormigueiro>
        <p>
          Cada fatia é uma festa! Massa fofinha com granulados que trazem um
          toque divertido e delicioso. Quem resiste?
        </p>
        <img src={imgBoloFormigueiro} />
      </ContainerBoloFormigueiro>

      <ContainerDescricaoBolos>
        <p>
          Experimente a doçura irresistível do nosso pão de mel! Macio, recheado
          e coberto com chocolate, perfeito para adoçar o seu dia. Peça já o
          seu!
        </p>
        <img src={imgPaodeMell} />
      </ContainerDescricaoBolos>

      <ContainerBolosPotes>
        <img src={imgPaodeMelBrigadeiro} />
        <p>
          Pão de mel recheado com brigadeiro: uma explosão de sabor! Massa
          macia, recheio cremoso e cobertura irresistível. Peça o seu e se
          delicie!
        </p>
      </ContainerBolosPotes>

      <ContainerBolosPotes>
        <p>
          Chocolate Sensação: "O encontro perfeito do chocolate com o morango!
          Camadas cremosas que derretem na boca e despertam seus sentidos. Peça
          já o seu!
        </p>
        <img src={imgBoloPote} />
      </ContainerBolosPotes>

      <ContainerBoloPoteMaracuja>
        <img src={imgBoloPoteMaracuja} />
        <p>
          A doçura que encontra o azedinho perfeito!Nosso Bolo de Pote de
          Maracujá é refrescante, cremoso e irresistível. Peça o seu e
          surpreenda seu paladar!
        </p>
      </ContainerBoloPoteMaracuja>

      <ContainerBoloMilho>
        <p>
          Bolo de Milho Sabor de fazenda em cada pedaço! Nosso bolo de milho é
          fofinho, aromático e feito com ingredientes fresquinhos para te trazer
          aquele gostinho caseiro irresistível. Perfeito com um café quentinho!
        </p>
        <img src={imgBoloMilho} />
      </ContainerBoloMilho>

      <ContainerBoloLaranja>
        <img src={imgBoloLaranja} />
        <p>
          Bolo de Laranja Refrescante, macio e com um aroma irresistível! Feito
          com suco natural de laranja para deixar seu dia mais leve e saboroso.
        </p>
      </ContainerBoloLaranja>

      <ContainerBoloCaseiroMini>
        <img src={imgBoloCaseiro} />
        <p>
          Sabor de Casa em Cada Fatia! Bolos caseiros fofinhos e feitos com
          carinho, perfeitos para o seu café da manhã ou aquele lanche especial.
          Peça já o seu e aproveite o sabor de aconchego!
        </p>
      </ContainerBoloCaseiroMini>
      <ContainerBoloChocolateCaseiro>
        <p>
          Bolo de Chocolate Caseiro – Puro Sabor e Afeto! Nada como um bolo de
          chocolate fofinho e molhadinho para adoçar o dia! Feito com
          ingredientes selecionados e aquele toque especial de carinho, ele é
          perfeito para acompanhar um café, presentear alguém ou simplesmente se
          deliciar.
        </p>
        <img src={imgCaseiroChocolate} />
      </ContainerBoloChocolateCaseiro>

      <ContainerCardBanner>
        <p>
          Descubra o sabor irresistível dos nossos bolos e doces!Feito com
          ingredientes selecionados e muito carinho, cada pedaço é uma
          experiência única. Clique no botão abaixo e confira nosso cardápio
          completo!
        </p>
        <img src={imgBannerCard}/>

      </ContainerCardBanner>

      <ContainerBotaoCardapio>
      <Link className="link-cardapio"
      to="/boloscarrinho">Ver Cardápio</Link>
      </ContainerBotaoCardapio>

      <ContainerEntregas>
        <p>
          Sabor e praticidade em cada pedacinho! Faça já seu pedido pelo
          WhatsApp e receba seus doces e bolos favoritos no conforto de casa!
          Entregamos com agilidade via Moto Uber. Peça agora e adoce seu dia!
        </p>
        <img src={imgEntrega} />
      </ContainerEntregas>

      <ContainerBanner>
        <img src={imgBanner} />
      </ContainerBanner>

      <VerCardapio>
        <Link className="link-cardapio" to="/boloscarrinho">
          Ver Cardápio
        </Link>
      </VerCardapio>

      <ContainerLoja>
        <img src={imgLoja} />
        <p>
          Uma experiência irresistível te espera!Venha até nossa loja e saboreie
          nossos bolos e doces fresquinhos no ambiente perfeito para adoçar seu
          dia. Ou, se preferir, leve essa delícia para casa! Esperamos por você!
        </p>
      </ContainerLoja>

      <ContainerLoja>
        <p>
          Aqui, cada detalhe é pensado para adoçar o seu dia! Experimente nossos
          doces artesanais e aproveite um momento especial em um ambiente
          aconchegante. Venha nos visitar e descubra o sabor da felicidade!
        </p>
        <img src={imgAmbiente} />
      </ContainerLoja>

      <TituloDiv>
        <h2>Nossa Localização</h2>
      </TituloDiv>

      <ContainerMaps>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.160425913829!2d-46.58779692384997!3d-23.599482878766836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce424f2c415f3d%3A0x78a1e27262e0b47c!2sR.%20Alexandre%20Bon%C3%ADcio%2C%20138%20-%20Vila%20Alves%20Dias%2C%20S%C3%A3o%20Bernardo%20do%20Campo%20-%20SP%2C%2009850-450!5e0!3m2!1spt-BR!2sbr!4v1707423299821!5m2!1spt-BR!2sbr"
          width="100%"
          height="450"
          style={{ border: 0, borderRadius: "10px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <img src={imgLojaDeLeite} />
      </ContainerMaps>

      <Avaliacoes />

      <Whatsapp>
        <a href="https://wa.me/5511997636383" target="_blank">
          <img src={imgZap} />
        </a>
      </Whatsapp>

      <Footer />
    </>
  );
};

export default Home;
