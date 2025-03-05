import { useEffect, useState } from "react";
import styled from "styled-components";
import CartIcon from "../components/CartIcon";
import Menu from "../components/menu";
import Logo from "../components/logo";
import LogoCardapio from "../components/logoCardapio";



const produtos = [
  {
    id: 1,
    nome: " Bolo sabor Chocolate",
    preco: "9.99",
    imagem: "/bolo1.png",
  },
  {
    id: 2,
    nome: "doce de leite com chocolate",
    preco: "9.99",
    imagem: "/bolo2.png",
  },
  {
    id: 3,
    nome: "chocolate com morango",
    preco: "9.99",
    imagem: "/bolo3.png",
  },
  {
    id: 4,
    nome: "chocolate com morango",
    preco: "9.99",
    imagem: "/bolo3.png",
  },
  {
    id: 5,
    nome: " Chocolate tradicional",
    preco: "9.99",
    imagem: "/bolo5.png",
  },
  {
    id: 6,
    nome:" doce de leite com morangos",
    preco:9.99,
    imagem:"/bolo6.png"
  },
  { 
    id: 7, 
    nome: "chocolate branco tradicional",
    preco: 9.99,
    imagem:"/bolo7.png"

  },
  {
    id: 8,
    nome: "chocolate suflair",
    preco: 9.99,
    imagem:"/bolo8.png"
  },
  {
    id: 9,
    nome: "Bolo Chocolate com Ninho",
    preco: "14.99",
    imagem: "/bolo9.png",
  },
  {
    id: 10,
    nome: "Bolo Chocolate tradicional",
    preco: "14.99",
    imagem: "/bolo10.png",
  },
  {
    id: 11,
    nome: "Bolo Chocolate com morangos",
    preco: "14.99",
    imagem: "/bolo11.png",
  },
  {
    id: 12,
    nome: " Bolo sabor Maracujá",
    preco: 14.99,
    imagem: "/bolo12.png",
  },
  {
    id: 13,
    nome:"bolo ninho com doce de leite",
    preco: 14.99,
    imagem:"/bolo13.png"

  },
  {
    id: 14,
    nome:"bolo sabor laranja",
    preco:9.99,
    imagem:"/bolo14.png"
  },
  {
    id: 15,
    nome: "chocolate com brigadeiro",
    preco: 9.99,
    imagem: "/bolo15.png",
  },
  {
    id: 16,
    nome:"chocolate doce de leite",
    preco:9.99,
    imagem:"/bolo16.png"
  },
  {
    id: 17,
    nome:"bolo com cobertura de chocolate",
    preco:9.99,
    imagem:"/bolo17.png"
  },
  {
    id: 18,
    nome:"bolo com cobertura de chocolate",
    preco:9.99,
    imagem:"/bolo18.png"
  },
  {
    id: 19,
    nome: "caseiro chocolate",
    preco: 14.99,
    imagem: "/bolo19.png",
  },
  {
    id: 20,
    nome:"caseiro chocolate",
    preco:14.99,
    imagem:"/bolo20.png"
  },
  {
    id: 21,
    nome:"caseiro chocolate",
    preco:14.99,
    imagem:"/bolo20.png"
  },
 
  {
    id: 22,
    nome:"cenoura com cobertura de chocolate",
    preco: 99.99,
    imagem:"/travessaDoce03.jpg"
  },
  {
    id: 23, 
    nome:"chocolate com cobertura de chocolate",
    preco: 99.99,
    imagem:"/travessaDoce05.jpg"
  },
 
  {
    id: 24,
    nome: "Travessas Chocolate com morango",
    preco: 99.99,
    imagem: "/travessaDoce01.jpg",
  },
  {
    id: 25,
    nome: "Travessa Chocolate com Ninho",
    preco: 99.99,
    imagem: "/travessaDoce03.jpg",
  },
  {
    id: 26,
    nome: "travessa ninho com morangos",
    preco: 99.99,
    imagem: "/travessaDoce04.jpg",
  },
 
  {
    id: 27,
    nome: "bolo pote sabor doce de leite",
    preco: 9.99,
    imagem: "/bolopote03.jpg",
  },
  {
    id: 28,
    nome: "bolo pote sabor ninho",
    preco: 9.99,
    imagem: "/bolopote05.jpg",
  },
  {
    id: 29,
    nome: "bolo pote sabor chocolate ninho ",
    preco: 12.99,
    imagem: "/bolopote07.jpg",
  },
  {
    id: 30,
    nome: "bolo pote ninho com chocolate",
    preco: 12.99,
    imagem: "/bolopote09.jpg",
  },
   

  
];

const numeroLoja = "5511986414262";

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


const BolosCarrinho = () => {
  const [carrinho, setCarrinho] = useState(() => {
    const carrinhoSalvo = localStorage.getItem("carrinho");
    return carrinhoSalvo ? JSON.parse(carrinhoSalvo) : [];
  });

  // Sempre que o carrinho for atualizado, salva no localStorage
  useEffect(() => {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
  }, [carrinho]);

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
   <Menu/>
   <Logo/>
   <LogoCardapio/>
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

export default BolosCarrinho;