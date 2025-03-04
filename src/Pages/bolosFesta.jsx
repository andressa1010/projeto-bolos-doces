import React from "react";
import Menu from "../components/menu";
import Logo from "../components/logo";
import imgBoloFesta from "../assets/bolo-festa01.png";
import imgBoloNinho from "../assets/bolo-festa03.png";
import imgBoloChocolate from "../assets/bolo-festa02.png";
import imgBoloRed from "../assets/bolo-festa09.png";
import imgBoloValvet from "../assets/bolo-festa04.png";
import {
  ContainerBoloChocolateFesta,
  ContainerBoloRedValvet,
  ContainerBolos,
  ContainerBolosFesta,
  ContainerBolosPotes,
  EncomendasBolos,
  TituloDiv,
  Whatsapp,
} from "../Styles/styled";
import TabelasDePrecos from "../components/tabelasDePreco";
import imgZap from "../assets/whatsapp.png";

const BolosFesta = () => {
  return (
    <>
      <Menu />
      <Logo />

      <EncomendasBolos>
        <h2>
          Bolos Recheados de Festa – Feitos com Amor, Sob Encomenda!
          <br></br>
          Peça pelo WhatsApp e torne seu momento ainda mais especial!{" "}
        </h2>
      </EncomendasBolos>

      <ContainerBolosFesta>
        <p>
          Transforme sua festa em um momento inesquecível! Surpreenda seus
          convidados com nossos bolos recheados de chocolate, feitos com os
          melhores ingredientes e muito amor! Temos sabores irresistíveis para
          todos os gostos: do clássico brigadeiro ao sofisticado chocolate
          trufado. Encomendas personalizadas para festas, eventos ou aquele
          momento especial. Faça já a sua encomenda e garanta o sabor que vai
          conquistar todos os paladares!Entre em contato e leve doçura e
          qualidade para sua celebração!
        </p>
        <img src={imgBoloFesta} />
      </ContainerBolosFesta>

      <ContainerBolos>
        <img src={imgBoloNinho} style={{ margin: 10 }} />
        <p>
          Ninho com Chocolate – A cremosidade do leite Ninho com a intensidade
          do chocolate em uma combinação irresistível! Peça já o seu!
        </p>
      </ContainerBolos>

      <ContainerBoloChocolateFesta>
        <p>
          Brigadeiro Todo Chocolate – Para os chocólatras de plantão! Uma
          explosão de sabor com muito brigadeiro e chocolate em cada pedaço!
          Faça sua encomenda!
        </p>
        <img src={imgBoloChocolate} />
      </ContainerBoloChocolateFesta>

      <ContainerBolosPotes>
        <img src={imgBoloRed} />
        <p>
          Chocolate com Cenoura – O clássico bolo de cenoura com um toque extra
          de chocolate para deixar seu dia ainda mais doce!
        </p>
      </ContainerBolosPotes>

      <ContainerBoloRedValvet>
        <p>
          Red Velvet com Ninho – A elegância do Red Velvet com a cremosidade do
          leite Ninho! Um bolo sofisticado e delicioso para qualquer ocasião!
        </p>
        <img src={imgBoloValvet} />
      </ContainerBoloRedValvet>

      <TituloDiv>
        <h2>Sua Festa está aqui</h2>
      </TituloDiv>

      <TabelasDePrecos />

      <Whatsapp>
        <a href="https://wa.me/55119986414262" target="_blank">
          <img src={imgZap} />
        </a>
      </Whatsapp>
    </>
  );
};

export default BolosFesta;
