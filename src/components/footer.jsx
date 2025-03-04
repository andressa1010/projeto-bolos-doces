import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #4B251C;
  color: #ffffff;
  text-align: center;
  padding: 20px;
  font-size: 20px;
`;

const Info = styled.p`
  margin: 5px 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Info>📍 Loja  Bolos e Doces - Feito com amor! ❤️</Info>
      <Info>🕒 Horário de Funcionamento:</Info>
      <Info>Seg a Sex: 09h as 19h | Sáb 09h as 17h e Dom: 09h as 14h</Info>
      <Info>📞 Contato: (11) 986414262</Info>
    </FooterContainer>
  );
};

export default Footer;
