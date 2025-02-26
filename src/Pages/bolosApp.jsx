import { useState } from "react";
import styled from "styled-components";
import CartIcon from "../components/CartIcon";
import Menu from "../components/menu";
import Logo from "../components/logo";
import LogoCardapio from "../components/logoCardapio";



const produtos = [
  {
    id: 1,
    nome: "Bolo pote sabor prestigio mini 150g",
    preco: "9.99",
    imagem: "/bolo-pote-pequeno01.png",
  },
  {
    id: 2,
    nome: "Bolo pote sabor maracujá mini 150g",
    preco: "9.99",
    imagem: "/bolo-pote-pequeno02.png",
  },
  {
    id: 3,
    nome: "Bolo pote sabor Brigadeiro mini 150g",
    preco: "9.99",
    imagem: "/bolo-pote-pequeno03.png",
  },
  {
    id: 4,
    nome: "Bolo pote sabor Beijinho mini 150g",
    preco: "9.99",
    imagem: "/bolo-pote-pequeno04.png",
  },
  {
    id: 5,
    nome: "Bolo Pote Chocolate com Ninho mini 150g",
    preco: "9.99",
    imagem: "/bolo-pote-pequeno05.png",
  },
  {
    id: 6,
    nome: "Bolo Chocolate Sensação 300g",
    preco: "14.99",
    imagem: "/bolo-pote-deleite.png",
  },
  {
    id: 7,
    nome: "Bolo Chocolate com Ninho 300g",
    preco: "14.99",
    imagem: "/bolo-pote-deleite01.png",
  },
  {
    id: 8,
    nome: "Bolo Pote paçoca 300g",
    preco: "14.99",
    imagem: "/bolo-pote-deleite02.png",
  },
  {
    id: 9,
    nome: "Bolo pote Brigadeiro com Prestigio 300g",
    preco: "14.99",
    imagem: "bolo-pote-deleite04.png",
  },
  {
    id: 10,
    nome: "Gelatina mini 150g",
    preco: "9.99",
    imagem: "/bolo-pote-pequeno06.png",
  },
  {
    id: 11,
    nome: "Bolo caseiro sabor laranja 400g",
    preco: "12.00",
    imagem: "/bolo-caseiro01.png",
  },
  {
    id: 12,
    nome: "Bolo caseiro sabor Chocolate 400g",
    preco: "12.00",
    imagem: "/bolo-caseiro02.png",
  },
  {
    id: 13,
    nome: "Bolo caseiro sabor mandioca",
    preco: "20.00",
    imagem: "/bolo-caseiro03.png",
  },
  {
    id: 14,
    nome: "Bolo caseiro sabor formigueiro",
    preco: "25.99",
    imagem: "/bolo-formigueiro.png",
  },
  {
    id: 15,
    nome: "Bolo caseiro sabor iogurte",
    preco: "25.99",
    imagem: "/bolo-igout.png",
  },
  {
    id: 16,
    nome: "Bolo caseiro fubá com goiabada",
    preco: "25.99",
    imagem: "/bolo-fuba.png",
  },
  {
    id: 17,
    nome: "Bolo caseiro sabor laranja",
    preco: "25.99",
    imagem: "/bolo-laranja.png",
  },
  {
    id: 18,
    nome: "Bolo caseiro sabor Mandioca com coco",
    preco: "39.99",
    imagem: "/mandioca.png",
  },
  {
    id: 19,
    nome: "Bolo caseiro sabor fubá cremoso",
    preco: "39.99",
    imagem: "/bolo-fuba-cremoso.png ",
  },
  {
    id: 20,
    nome: "Bolo caseiro sabor cenoura",
    preco: "25.99",
    imagem: "/bolo-laranja.png",
  },
  {
    id: 21,
    nome: "Pão de mel sabor Ninho mini ",
    preco: "10.00",
    imagem: "/pão-de-mel01.png",
  },
  {
    id: 22,
    nome: "Pão de mel sabor Prestigio mini",
    preco: "10.00",
    imagem: "/pao-de-mel02.png",
  },
  {
    id: 23,
    nome: "Pão de mel sabor Prestigio grande",
    preco: "14.99",
    imagem: "/pao-de-mel05.png",
  },
  {
    id: 24,
    nome: "Brigadeiro Gourmet",
    preco: "7.99",
    imagem: "/brigadeiro.png",
  },
  {
    id: 25,
    nome: "Pão de mel sabor Ninho grande",
    preco: "14.99",
    imagem: "/pão-de-mel01.png",
  },
  {
    id: 26,
    nome: "Pão de mel sabor ninho com chocolate",
    preco: "14.99",
    imagem: "/pão-de-mel01.png",
  },
  {
    id: 27,
    nome: "Pão de mel sabor Prestigio ",
    preco: "14.99",
    imagem: "/pão-de-mel01.png",
  },
  {
    id: 28,
    nome: "Pão de mel sabor Ninho",
    preco: "10.00",
    imagem: "/pão-de-mel01.png",
  },
  {
    id: 29,
    nome: "Pão de mel sabor Doce de leite",
    preco: "10.00",
    imagem: "/pao-de-mel-doce-leite.png ",
  },
  { id: 30, nome: "Gelatina", preco: "10.00", imagem: "/gelatina01.png" },
  {
    id: 31,
    nome: "Bolo caseiro sabor Milho",
    preco: 25.99,
    imagem:"/bolo-milho.png"
  },
  {
    id: 32,
    nome:"mouse sabor maracujá mini",
    preco:9.99,
    imagem:"/mouse-maracuja.png"
  },
  {
    id: 33,
    nome:"Bolo cenoura com chocolate mini",
    preco:9.99,
    imagem:"/bolo-pote-cenoura.png"
  },
  {
    id: 34,
    nome:"mousse sabor morango mini 150g",
    preco:9.99,
    imagem:"/mouse-morango.png"
  },
  {
    id: 35,
    nome:"mousse sabor limão mini 150g",
    preco:9.99,
    imagem:"/mousse-limao.png"
  }
];

const numeroLoja = "5511997636383";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  padding: 10px;
  min-height: 100vh;

  @media (max-width: 412px) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  @media (max-width: 360px) {
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

  @media (max-width: 412px) {
    width: 160px;
  }

  @media (max-width: 432px) {
    width: 180px;
  }

  @media (max-width: 360px) {
    width: 300px;
  }

  @media (max-width: 394px) {
    width: 160px;
  }

  @media (max-width: 480px) {
    width: 150px;
  }

  
`;

const ImagemProduto = styled.img`
  width: 200px;

  @media (max-width: 412px) {
    width: 150px;
  }

  @media (max-width: 360px) {
    width: 130px;
  }

  @media (max-width: 432px) {
    width: 150px;
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

const BotaoAdicionar = styled.button`
  width: 100%;
  background: deeppink;
  color: white;
  font-size: 16px;
  padding: 8px 0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 5px;
  &:hover {
    background: #914f2b;
  }
`;


const BolosApp = () => {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (produto, quantidade) => {
    if (quantidade < 1)
      return alert("Selecione a quantidade antes de adicionar!");
    const itemExistente = carrinho.find((item) => item.id === produto.id);
    if (itemExistente) {
      setCarrinho(
        carrinho.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + quantidade }
            : item
        )
      );
    } else {
      setCarrinho([...carrinho, { ...produto, quantidade }]);
    }
  };

  const diminuirQuantidade = (produtoId) => {
    setCarrinho(
      carrinho
        .map((item) =>
          item.id === produtoId
            ? { ...item, quantidade: Math.max(item.quantidade - 1, 0) }
            : item
        )
        .filter((item) => item.quantidade > 0)
    );
  };

  const removerDoCarrinho = (produtoId) => {
    setCarrinho(carrinho.filter((item) => item.id !== produtoId));
  };

  const valorTotal = carrinho.reduce(
    (total, item) => total + item.preco * item.quantidade,
    0
  );

  const abrirWhatsApp = () => {
    if (carrinho.length === 0)
      return alert("Adicione itens ao carrinho antes de finalizar a compra!");
    const mensagem = carrinho
      .map(
        (item) =>
          `*${item.quantidade}x ${item.nome}* - R$ ${item.preco} cada\n🖼️ Foto: ${window.location.origin}${item.imagem}`
      )
      .join("\n\n");
    const url = `https://wa.me/${numeroLoja}?text=${encodeURIComponent(
      mensagem + `\n\n💰 Total: R$ ${valorTotal.toFixed(2)}`
    )}`;
    window.open(url, "_blank");
  };

  return (
   <>
    <div>
      <header>
        <CartIcon
          carrinho={carrinho}
          adicionarAoCarrinho={adicionarAoCarrinho}
          diminuirQuantidade={diminuirQuantidade}
          removerDoCarrinho={removerDoCarrinho}
          valorTotal={valorTotal}
          abrirWhatsApp={abrirWhatsApp}
        />
      </header>
      <Container>
        {produtos.map((produto) => (
          <Produto
            key={produto.id}
            produto={produto}
            adicionarAoCarrinho={adicionarAoCarrinho}
          />
        ))}
      </Container>
    </div>
   </>
  );
};

const Produto = ({ produto, adicionarAoCarrinho }) => {
  const [quantidade, setQuantidade] = useState(0);

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
      <BotaoAdicionar onClick={() => adicionarAoCarrinho(produto, quantidade)}>
        Comprar
      </BotaoAdicionar>
    </Card>
  );
};

export default BolosApp;