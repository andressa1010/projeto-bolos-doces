// CarrinhoContainer.js
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 50px;
  right: 10px;
  width: 300px;
  background-color: white;
  border: 1px solid #ccc;
  padding: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-height: 400px; /* Limita a altura */
  overflow-y: auto; /* Adiciona rolagem */
  z-index: 999; 
`;

const ItemCarrinho = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  

  button {
    padding: 5px;
    border: none;
    background-color: #ff4d4d;
    color: #ffffff;
    margin: 5px;
  }
`;

const BotaoRemover = styled.button`
  background: #ff4d4d;
  color: white;
  font-size: 14px;
  padding: 4px 8px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #e60000;
  }
`;

const BotaoFinalizar = styled.button`
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

const CarrinhoContainer = ({ carrinho, adicionarAoCarrinho, diminuirQuantidade, removerDoCarrinho, valorTotal, abrirWhatsApp }) => {
  return (
    <Container>
      {carrinho.length > 0 ? (
        carrinho.map((item) => (
          <ItemCarrinho key={item.id}>
            <div>
              <img src={item.imagem} alt={item.nome} width="50" />
              <span>{item.nome}</span>
              <span>{item.quantidade}x</span>
              <span>R$ {item.preco}</span>
              <button onClick={() => diminuirQuantidade(item.id)}>-</button>
              <button onClick={() => adicionarAoCarrinho(item, 1)}>+</button>
            </div>
            <BotaoRemover onClick={() => removerDoCarrinho(item.id)}>
              Remover
            </BotaoRemover>
          </ItemCarrinho>
        ))
      ) : (
        <p>O carrinho está vazio.</p>
      )}
      <p>Total: R$ {valorTotal.toFixed(2)}</p>
      <BotaoFinalizar onClick={abrirWhatsApp}>
        Finalizar Compra no WhatsApp
      </BotaoFinalizar>
    </Container>
  );
};

export default CarrinhoContainer;
