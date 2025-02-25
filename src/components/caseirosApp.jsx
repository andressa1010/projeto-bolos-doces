import { useState } from "react";
import styled from "styled-components";

const produtos = [
  { id: 1, nome: "Bolo caseiro sabor laranja 400g", preco: "12.00", imagem: "/bolo-caseiro01.png" },
  { id: 2, nome: "Bolo caseiro sabor Chocolate 400g", preco: "12.00", imagem: "/bolo-caseiro02.png" },
  { id: 3, nome: "Bolo caseiro sabor mandioca", preco: "20.00", imagem: "/bolo-caseiro03.png" },
  { id: 4, nome: "Bolo caseiro sabor formigueiro", preco: "25.99", imagem: "/bolo-formigueiro.png" },
  { id: 5, nome: "Bolo caseiro sabor iogurte", preco: "25.99", imagem: "/bolo-igout.png" },
  { id: 6, nome: "Bolo caseiro fubá com goiabada", preco: "25.99", imagem: "/bolo-fuba.png" },
  { id: 7, nome: "Bolo caseiro sabor laranja", preco: "25.99", imagem: "/bolo-laranja.png"},
  { id: 8, nome: "Bolo caseiro sabor Mandioca com coco", preco: "39.99", imagem: "/mandioca.png" },
  { id: 9, nome: "Bolo caseiro sabor fubá cremoso", preco: "39.99", imagem: "/bolo-fuba-cremoso.png "},
  { id: 10, nome: "Bolo caseiro sabor cenoura", preco: "25.99", imagem: "/bolo-laranja.png" }
];

const numeroLoja = "5511997636383"; 

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
 
  min-height: 100vh;

  @media(max-width: 412px){
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

const Card = styled.div`
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);

  @media(max-width: 412px){
    width: 160px;
  }
`;

const ImagemProduto = styled.img`
  width: 200px;
  @media(max-width: 412px){
    position: relative;
    right: 30px;
    width: 200px;
  }
`;

const Preco = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 5px 0;
`;

const NomeProduto = styled.p`
  font-size: 14px;
  color: #333;
`;

const InputQuantidade = styled.input`
  width: 40px;
  text-align: center;
  font-size: 16px;
  margin-left: 5px;
`;

const BotaoComprar = styled.button`
  width: 100%;
  background: #ff1493;
  color: white;
  font-size: 16px;
  padding: 8px 0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 5px;
  &:hover {
    background: #ff0066;
  }
`;

const Produto = ({ produto }) => {
  const [quantidade, setQuantidade] = useState(0);

  const abrirWhatsApp = () => {
    if (quantidade < 1) return alert("Selecione a quantidade antes de comprar!");

    const mensagem = `Olá, quero comprar *${quantidade}x ${produto.nome}* por *R$ ${produto.preco} cada*!%0A%0A🖼️ Foto: ${window.location.origin}${produto.imagem}`;
    const url = `https://wa.me/${numeroLoja}?text=${mensagem}`;
    window.open(url, "_blank");
  };

  return (
    <Card>
      <ImagemProduto src={produto.imagem} alt={produto.nome} />
      <Preco>R$ {produto.preco}</Preco>
      <NomeProduto>{produto.nome}</NomeProduto>
      <label>Quantidade:</label>
      <InputQuantidade
        type="number"
        min="0"
        value={quantidade}
        onChange={(e) => setQuantidade(Number(e.target.value))}
      />
      <BotaoComprar onClick={abrirWhatsApp}>Comprar</BotaoComprar>
    </Card>
  );
};

const CaseirosApp= () => {
  return (
    <Container>
      {produtos.map((produto) => (
        <Produto key={produto.id} produto={produto} />
      ))}
    </Container>
  );
};

export default CaseirosApp;