// CartIcon.js
import React, { useState } from 'react';
import styled from 'styled-components';
import CarrinhoContainer from './carrinhoContainer';
import imgIconCarrinho from "../assets/comprar.png"

const Icon = styled.div`
 font-size: 40px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 50px;
 
`;

const CartIcon = ({ carrinho, adicionarAoCarrinho, diminuirQuantidade, removerDoCarrinho, valorTotal, abrirWhatsApp }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Icon onClick={toggleCart}>
        <img style={{width: 50}}
         src={imgIconCarrinho}/>
      </Icon>
      {isOpen && (
        <CarrinhoContainer
          carrinho={carrinho}
          adicionarAoCarrinho={adicionarAoCarrinho}
          diminuirQuantidade={diminuirQuantidade}
          removerDoCarrinho={removerDoCarrinho}
          valorTotal={valorTotal}
          abrirWhatsApp={abrirWhatsApp}
        />
      )}
    </div>
  );
};

export default CartIcon;
