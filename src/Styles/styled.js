import styled from "styled-components";

export const Navegacao = styled.header`
  display: flex;
  justify-content: center;

  nav ul li {
    display: inline-block;
    padding: 10px;
    font-size: 36px;
    font-family: "Great Vibes", serif;
    font-weight: 800;
    font-style: normal;
  }

  a {
    text-decoration: none;
    color: darkred;
  }

  a:hover {
    color: #ffffff;
  }

  @media (max-width: 432px) {
    nav ul li {
      font-size: 26px;
    }
  }

  @media (max-width: 360px) {
    position: relative;
    right: 14px;
    top: 5px;
    nav ul li {
      font-size: 23px;
    }
  }

  @media (max-width: 394px) {
    position: relative;
    right: 10px;
    margin: 10px;
  }

  @media (max-width: 412px) {
    position: relative;
    right: 10px;
  }
`;

export const LogoLoja = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 300px;
    border-radius: 50%;
  }

  @media (max-width: 412px) {
    img {
      width: 200px;
      margin: 10px;
    }
  }
`;

export const ContainerLogo = styled.div`
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
    width: 400px;
  }

  @media (max-width: 432px) {
    img {
      width: 200px;
    }
    h2 {
      font-size: 16px;
    }
  }

  @media (max-width: 412px) {
    img {
      width: 200px;
    }
    h2 {
      font-size: 20px;
    }
  }
`;

export const TituloDiv = styled.div`
  display: flex;
  justify-content: center;

  h2 {
    font-size: 40px;
    font-family: "Great Vibes", serif;
    font-weight: 800;
    font-style: normal;
  }

  p {
    width: 600px;
    font-size: 30px;
    font-family: "Great Vibes", serif;
    font-weight: 400;
    font-style: normal;
  }
`;

export const ContainerSobre = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    max-width: 600px;
    font-size: 30px;
    font-family: "Great Vibes", serif;
    font-weight: 500;
    font-style: normal;
  }

  img {
    width: 400px;
    border-radius: 40px;
  }

  @media (max-width: 412px) {
    img {
      width: 200px;
    }
    h2 {
      font-size: 16px;
    }
  }

  @media (max-width: 432px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    
  }
`;

export const ContainerDescricaoBolos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    max-width: 600px;
    font-size: 30px;
    font-family: "Great Vibes", serif;
    font-weight: 400;
    font-style: normal;
  }

  img {
    position: relative;
    bottom: 50px;
    width: 400px;
  }

  @media (max-width: 412px) {
    img {
      width: 200px;
    }
    p {
      font-size: 16px;
    }
  }

  @media (max-width: 432px) {
    img {
      width: 200px;
    }
    p {
      font-size: 13px;
    }
  }

  @media (max-width: 500px) {
    img {
      width: 200px;
    }
    p {
      font-size: 16px;
    }
  }
`;

export const ContainerBolosPotes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    position: relative;
    bottom: 120px;
    max-width: 600px;
    font-size: 30px;
    font-family: "Great Vibes", serif;
    font-weight: 400;
    font-style: normal;
  }

  img {
    position: relative;
    bottom: 120px;
    width: 400px;
    opacity: 1; 
    filter: none; 
  }

  @media (max-width: 412px) {
    img {
      width: 200px;
    }
    p {
      font-size: 16px;
    }
  }

  @media (max-width: 432px) {
    img {
      width: 200px;
    }
    p {
      font-size: 13px;
    }
  }

  @media (max-width: 360px) {
    position: relative;
    top: 50px;
  }
`;

export const ContainerBoloPascoca = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    position: relative;
    bottom: 120px;
    max-width: 600px;
    font-size: 30px;
    font-family: "Great Vibes", serif;
    font-weight: 400;
    font-style: normal;
  }

  img {
    position: relative;
    bottom: 180px;
    width: 400px;
  }

  @media (max-width: 412px) {
    img {
      position: relative;
      bottom: 200px;
      width: 200px;
    }
    p {
      position: relative;
      bottom: 160px;
      font-size: 16px;
    }
  }

  @media (max-width: 432px) {
    img {
      width: 200px;
    }
    p {
      font-size: 13px;
    }
  }

  @media (max-width: 500px) {
    img {
      width: 200px;
    }
    p {
      font-size: 16px;
    }
  }
`;

export const ContainerCardapioPotes = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px;

  .produto {
    margin: 10px;
    padding: 10px;
    width: 200px;
    text-align: center;
    border: 1px solid #ddd;
  }

  h2 {
    position: relative;
    top: 50px;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    border: none;
    padding: 8px;
    background-color: deeppink;
    color: black;
    border-radius: 10px;
    font-size: 20px;
  }

  button:hover {
    color: chartreuse;
  }

  @media (max-width: 412px) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .produto {
      width: 140px;
    }

    img {
      max-width: 100%;
      height: auto;
    }
  }
`;

export const ContainerBoloFormigueiro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    position: relative;
    bottom: 150px;
    max-width: 600px;
    font-size: 30px;
    font-family: "Great Vibes", serif;
    font-weight: 400;
    font-style: normal;
  }

  img {
    position: relative;
    bottom: 200px;
    width: 400px;
  }

  @media (max-width: 412px) {
    img {
      width: 200px;
    }
    p {
      font-size: 16px;
    }
  }

  @media (max-width: 432px) {
    img {
      width: 200px;
    }
    p {
      font-size: 13px;
    }
  }

  @media (max-width: 500px) {
    img {
      width: 200px;
    }
    p {
      font-size: 16px;
    }
  }
`;

export const ContainerLoja = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    max-width: 600px;
    font-size: 30px;
    font-family: "Great Vibes", serif;
    font-weight: 400;
    font-style: normal;
  }

  img {
    width: 500px;
    margin: 10px;
    border-radius: 40px;
  }

  @media (max-width: 432px) {
    display: flex;
    flex-wrap: wrap;
  }

  img {
    width: 400px;
  }
`;

export const ContainerBoloseDoces = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    text-align: center;
    position: relative;
    bottom: 50px;
    max-width: 600px;
    font-size: 30px;
    font-family: "Great Vibes", serif;
    font-weight: 400;
    font-style: normal;
  }

  img {
    width: 300px;
  }

  .bolo-pote {
    position: relative;
    bottom: 100px;
    width: 400px;
  }

  .img-bolo-laranja {
    position: relative;
    top: 60px;
    left: 50px;
  }

  @media (max-width: 412px) {
    h2 {
      font-size: 16px;
    }
    img {
      width: 150px;
    }
    .img-bolo-laranja {
      width: 140px;
      position: relative;
      bottom: 300px;
    }

    .bolo-pote {
      width: 300px;
    }
  }

  @media (max-width: 432px) {
    h2 {
      font-size: 10px;
      position: relative;
      left: 40px;
      bottom: 180px;
      right: 300px;
    }
    img {
      width: 150px;
    }
  }

  @media (max-width: 412px) {
    h2 {
      position: relative;
      bottom: 100px;
    }
  }
`;

export const ContainerBolosFesta = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    max-width: 600px;
    font-size: 30px;
    font-family: "Great Vibes", serif;
    font-weight: 400;
    font-style: normal;
  }

  img {
    width: 400px;
  }

  @media (max-width: 412px) {
  }

  @media (max-width: 432px) {
    img {
      width: 200px;
    }

    p {
      font-size: 16px;
    }
  }
`;

export const ContainerBolos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  p {
    max-width: 600px;
    font-size: 30px;
    font-family: "Great Vibes", serif;
    font-weight: 400;
    font-style: normal;
  }

  img {
    width: 400px;
  }

  @media (max-width: 432px) {
    img {
      width: 200px;
    }
    p {
      font-size: 16px;
    }
  }
`;

export const EncomendasBolos = styled.div`
  display: flex;
  justify-content: center;

  h2 {
    margin: 20px;
    font-size: 40px;
    font-family: "Great Vibes", serif;
    font-weight: 800;
    font-style: normal;
  }

  @media (max-width: 412px) {
    h2 {
      text-align: center;
      font-size: 20px;
      margin: 20px;
    }
  }

  @media (max-width: 432px) {
    h2 {
      font-size: 20px;
      text-align: center;
      margin: 10px;
    }
  }
`;

export const Whatsapp = styled.div`
  display: flex;
  justify-content: end;

  img {
    height: 60px;
  }
`;

export const ContainerEntregas = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    max-width: 600px;
    font-size: 30px;
    font-family: "Great Vibes", serif;
    font-weight: 400;
    font-style: normal;
  }

  img {
    width: 400px;
  }

  @media (max-width: 412px) {
    p {
      font-size: 27px;
    }
    img {
      width: 200px;
    }
  }

  @media (max-width: 432px) {
    img {
      width: 200px;
    }
    p {
      font-size: 20px;
    }
  }

  @media (max-width: 360px) {
    p {
      font-size: 16px;
      position: relative;
      left: 10px;
    }
  }

  @media (max-width: 394px) {
    p {
      position: relative;
      left: 10px;
    }
  }
`;

export const ContainerBoloChocolateFesta = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    position: relative;
    bottom: 120px;
    max-width: 600px;
    font-size: 30px;
    font-family: "Great Vibes", serif;
    font-weight: 400;
    font-style: normal;
  }

  img {
    position: relative;
    bottom: 120px;
    width: 400px;
  }

  @media (max-width: 412px) {
    img {
      width: 200px;
    }
    p {
      font-size: 16px;
    }
  }

  @media (max-width: 432px) {
    img {
      width: 200px;
    }
    p {
      font-size: 13px;
    }
  }

  @media (max-width: 360px) {
    img {
      position: relative;
      bottom: 90px;
    }
  }

  @media (max-width: 394px) {
    img {
      position: relative;
      bottom: 90px;
    }
    p {
      position: relative;
      left: 10px;
    }
  }
`;

export const ContainerBoloRedValvet = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    position: relative;
    bottom: 120px;
    max-width: 600px;
    font-size: 30px;
    font-family: "Great Vibes", serif;
    font-weight: 400;
    font-style: normal;
  }

  img {
    position: relative;
    bottom: 120px;
    width: 400px;
  }

  @media (max-width: 412px) {
    img {
      width: 200px;
    }
    p {
      font-size: 16px;
    }
  }

  @media (max-width: 432px) {
    img {
      width: 200px;
    }
    p {
      font-size: 13px;
    }
  }

  @media (max-width: 394px) {
    p {
      position: relative;
      left: 10px;
    }
  }
`;

export const ContainerBoloPoteMaracuja = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    position: relative;
    bottom: 200px;
    max-width: 600px;
    font-size: 30px;
    font-family: "Great Vibes", serif;
    font-weight: 400;
    font-style: normal;
  }

  img {
    position: relative;
    bottom: 250px;
    width: 400px;
    opacity: 1; /* Garante que a imagem não fique transparente */
    filter: none; /* Remove qualquer filtro */
  }

  @media (max-width: 412px) {
    img {
      width: 200px;
    }
    p {
      font-size: 16px;
    }
  }

  @media (max-width: 432px) {
    img {
      width: 200px;
      position: relative;
      bottom: 200px;
    }
    p {
      font-size: 13px;
      position: relative;
      bottom: 200px;
      right: 30px;
    }
  }

  @media (max-width: 394px) {
    img {
      position: relative;
      bottom: 200px;
    }
    p {
      position: relative;
      bottom: 200px;
      right: 30px;
    }
  }
`;

export const ContainerBoloMilho = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    position: relative;
    bottom: 400px;
    max-width: 600px;
    font-size: 30px;
    font-family: "Great Vibes", serif;
    font-weight: 400;
    font-style: normal;
  }

  img {
    position: relative;
    bottom: 450px;
    width: 400px;
  }

  @media (max-width: 412px) {
    img {
      width: 200px;
    }
    p {
      font-size: 16px;
    }
  }

  @media (max-width: 432px) {
    img {
      width: 200px;
      position: relative;
      bottom: 200px;
    }
    p {
      font-size: 13px;
      position: relative;
      bottom: 200px;
      right: 30px;
      left: 10px;
    }
  }

  @media (max-width: 394px) {
    img {
      position: relative;
      bottom: 200px;
    }
    p {
      position: relative;
      bottom: 200px;
      right: 30px;
    }
  }
`;

export const ContainerBoloLaranja = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    position: relative;
    bottom: 400px;
    max-width: 600px;
    font-size: 30px;
    font-family: "Great Vibes", serif;
    font-weight: 400;
    font-style: normal;
  }

  img {
    position: relative;
    bottom: 450px;
    width: 400px;
  }

  @media (max-width: 412px) {
    img {
      width: 200px;
    }
    p {
      font-size: 16px;
    }
  }

  @media (max-width: 432px) {
    img {
      width: 200px;
      position: relative;
      bottom: 200px;
    }
    p {
      font-size: 13px;
      position: relative;
      bottom: 200px;
      right: 30px;
      left: 4px;
    }
  }

  @media (max-width: 394px) {
    img {
      position: relative;
      bottom: 200px;
    }
    p {
      position: relative;
      bottom: 200px;
      right: 30px;
    }
  }
`;

export const ContainerTabela = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 p {
    max-width: 600px;
  }

  img {
    width: 400px;
  }
`;

export const ContainerMaps = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  iframe {
    width: 500px;
  }

  img {
    width: 600px;
    border-radius: 40px;
  }

  @media (max-width: 432px) {
    display: flex;
    flex-wrap: wrap;

    iframe {
      width: 390px;
    }
    img {
      width: 400px;
    }
  }
`;

export const ContainerBoloChocolateCaseiro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    position: relative;
    bottom: 400px;
    max-width: 600px;
    font-size: 30px;
    font-family: "Great Vibes", serif;
    font-weight: 400;
    font-style: normal;
  }

  img {
    position: relative;
    bottom: 450px;
    width: 400px;
  }

  @media (max-width: 412px) {
    img {
      width: 200px;
    }
    p {
      font-size: 16px;
    }
  }

  @media (max-width: 432px) {
    img {
      width: 200px;
      position: relative;
      bottom: 200px;
    }
    p {
      font-size: 13px;
      position: relative;
      bottom: 200px;
      left: 10px;
    }
  }

  @media (max-width: 394px) {
    img {
      position: relative;
      bottom: 200px;
    }
    p {
      position: relative;
      bottom: 200px;
      right: 30px;
    }
  }
`;

export const ContainerBoloCaseiroMini = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    position: relative;
    bottom: 400px;
    max-width: 600px;
    font-size: 30px;
    font-family: "Great Vibes", serif;
    font-weight: 400;
    font-style: normal;
  }

  img {
    position: relative;
    bottom: 450px;
    width: 400px;
  }

  @media (max-width: 412px) {
    img {
      width: 200px;
    }
    p {
      font-size: 16px;
    }
  }

  @media (max-width: 432px) {
    img {
      width: 200px;
      position: relative;
      bottom: 200px;
    }
    p {
      font-size: 13px;
      position: relative;
      bottom: 200px;
      right: 30px;
    }
  }

  @media (max-width: 394px) {
    img {
      position: relative;
      bottom: 200px;
    }
    p {
      position: relative;
      bottom: 200px;
      right: 30px;
    }
  }
`;

export const VerCardapio = styled.div`
  display: flex;
  justify-content: center;

  .link-cardapio {
    margin: 20px;
    padding: 10px;
    text-decoration: none;
    background-color: #32cd32;
    color: #ffffff;
    font-size: 40px;
    font-family: "Great Vibes", serif;
    font-weight: 400;
    font-style: normal;
    border: 1px solid #dddd;
    border-radius: 40px;
  }

  .link-cardapio:hover {
    background-color: maroon;
  }
`;

export const ContainerDescricao = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    margin: 20px;
    max-width: 900px;
    font-size: 40px;
    font-family: "Great Vibes", serif;
    font-weight: 400;
    font-style: normal;
  }

  @media (max-width: 432px) {
    p {
      font-size: 20px;
    }
  }
`;

export const ContainerBanner = styled.div`
     display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  img {
    width: 100%;
    max-width: 1320px;
    border-radius: 40px;
  }

  @media (max-width: 768px) {
    img {
      border-radius: 20px;
    }
  }

  @media (max-width: 480px) {
    img {
      border-radius: 15px;
    }
  }

`;

export const BannerCardapio = styled.div`
  img {
    width: 1400px;
  }
`;

export const ContainerCardapioBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    max-width: 600px;
    font-size: 40px;
    color: #4b251c;
    font-family: "Great Vibes", serif;
    font-weight: 800;
    font-style: normal;
  }

  img {
    width: 400px;
    margin: 25px;
  }

  @media (max-width: 432px) {
    img {
      width: 200px;
    }
    p {
      font-size: 20px;
    }
  }
`;

export const ContainerCardBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    max-width: 600px;
    font-size: 30px;
    color: #4b251c;
    font-family: "Great Vibes", serif;
    font-weight: 800;
    font-style: normal;
  }

  img {
    width: 400px;
    border-radius: 40px;
  }

  @media (max-width: 432px) {
    img {
      width: 200px;
    }
    p {
      font-size: 16px;
    }
  }
`;

export const ContainerBotaoCardapio = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  bottom: 250px;
  right: 200px;

  .link-cardapio {
    text-decoration: none;
    background-color: #32cd32;
    color: #ffffff;
    font-size: 40px;
    font-family: "Great Vibes", serif;
    font-weight: 400;
    font-style: normal;
    border-radius: 20px;
  }

  .link-cardapio:hover {
    background-color: darkred;
  }

  @media (max-width: 432px) {
    position: relative;
    bottom: 100px;
    right: 60px;

    .link-cardapio {
      font-size: 25px;
    }
  }

  @media (max-width: 394px) {
    position: relative;
    bottom: 100px;
    right: 10px;
  
    .link-cardapio {
      font-size: 20px;
    }
  }
`;

export const ContainerBannerBolos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4b251c;
  margin: 20px;
  height: 400px;
  border-radius: 40px;

  img {
    width: 900px;
    position: relative;
    left: 150px;
  }

  p {
    position: relative;
    right: 150px;
    max-width: 600px;
    font-size: 30px;
    color: #ffffff;
    font-family: "Pacifico", serif;
    font-weight: 400;
    font-style: normal;
  }

  @media(max-width:432px){
    display: flex;
    flex-wrap: wrap;
    img{
    
      width: 600px;
    }
    p{

      position: relative;
      text-align: center;
      left: 10px;
      font-size: 15px;
    }
  }
`;
