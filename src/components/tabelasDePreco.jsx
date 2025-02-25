import React from "react";
import styled from "styled-components";
import imgBoloFesta from "../assets/bolo-festa.png";
import imgBrigadeiroTradicional from "../assets/brigadeiro-caixa.png";
import imgDocesCaixa from "../assets/doces.png"

const Container = styled.div`
  display: flex;
  align-items: center; /* Alinha verticalmente */
  gap: 20px; /* Espaço entre o texto e a imagem */
  max-width: 800px; /* Define uma largura máxima */
  margin: 0 auto; /* Centraliza na tela */

  h2{
    font-size: 30px;
    font-family: "Great Vibes", serif;
    font-weight: 400;
    font-style: normal;
  }

  @media(max-width: 412px){
    h2{
      font-size: 20px;
    }
  }

  @media(max-width: 432px){
    font-size: 16px;
  }
`;


const Texto = styled.div`
  flex: 1; /* Faz o texto ocupar o espaço disponível */
`;

const Imagem = styled.img`
  width: 300px; /* Define o tamanho da imagem */
  border-radius: 10px; /* Bordas arredondadas */

  @media(max-width: 412px){
     width: 200px;
  }

  @media(max-width:432px){
    width: 200px;
  }
`;

const ContainerDoces = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    max-width: 600px;
    font-size: 30px;
    font-family: "Great Vibes", serif;
    font-weight: 400;
    font-style: normal;
  }

  img {
    width: 300px;
    margin: 10px;
  }

  @media(max-width: 412px){
    img{
      width: 200px;
    }
  }

  @media(max-width: 432px){
     img{
      width: 200px;
     }
  }
`;

const ContainerDoceCaixa = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;

      h2{
        max-width: 600px;
      }
     
      img{
        width:450px;
      }

      @media(max-width:432px){
        img{
          width: 300px;
        }
      }

`

function TabelasDePrecos() {
  return (
    <>
      <Container>
        <Texto>
          <h2>Bolo de Festa</h2>
          <h2>Tradicional R$80,00/kg</h2>
          <p>
            Brigadeiro, Prestígio, Sensação, Beijinho, Doce de leite, Suflair,
            Ninho, Limão, Maracujá, Brigadeiro branco, Mousse de chocolate
            branco ou preto.
          </p>
        </Texto>
        <Imagem src={imgBoloFesta} alt="imagem Bolo Festa" />
      </Container>

      <ContainerDoces>
        <img src={imgBrigadeiroTradicional} />
        <h2>Brigadeiro Tradicional R$125,00</h2>
      </ContainerDoces>

      <ContainerDoceCaixa>
      <h2>Docinhos R$125,00</h2>
      <img src={imgDocesCaixa}/>
      </ContainerDoceCaixa>
    </>
  );
}

export default TabelasDePrecos;
