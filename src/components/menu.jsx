import React from "react"
import { Navegacao } from "../Styles/styled.js";
import { Link } from "react-router-dom";


const Menu = () => {
    return (
        <>
        <Navegacao>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/cardapio">Cardápio</Link></li>
                    <li><Link to="/bolosfesta">Bolos Festa</Link></li>
    
                </ul>
            </nav>
        </Navegacao>
        </>
      );
}
 
export default Menu;