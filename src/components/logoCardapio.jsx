import React from "react"
import bannerImg from "../assets/Post para instagram bolos e doces delicado bege rosa azul (5) (1).png"
import { ContainerCardapioBanner } from "../Styles/styled";



const LogoCardapio = () => {
    return (
        <>
         <ContainerCardapioBanner>
                <p>
                Delícias que encantam! 
                Escolha seu bolo favorito e adoce seu dia!
                </p>
                <img src={bannerImg}/>
              </ContainerCardapioBanner>
        </>
      );
}
 
export default LogoCardapio;