import React from "react"
import imgLogo from "../assets/logo-de-leite.jpg"
import { LogoLoja } from "../Styles/styled";


const Logo = () => {
    return ( 
        <>
        <LogoLoja>
            <img src={imgLogo} alt="imagem logo"/>
        </LogoLoja>
        </>
     );
}
 
export default Logo;