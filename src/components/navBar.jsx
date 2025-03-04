import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { List, X } from "@phosphor-icons/react"; // Ícones
import logoImg from "../assets/Logotipo confeitaria bolos delicado rosa .png"

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  background: #4B251C;
  color: white;
  position: relative;
  width: 100%;
  top: 0;
  left: 0;
    font-family: "Great Vibes", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 40px;
`;

const Logo = styled.img`
  height: 50px;
  border-radius: 50%;
`;

const MenuLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 24px;
 
  @media (max-width: 768px) {
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 80px;
    right: 0;
    background: #222;
    width: 200px;
    padding: 20px;
    border-radius: 8px;
  }
`;

const MenuItem = styled.li`
  cursor: pointer;
  font-size: 18px;
  
  a {
    text-decoration: none;
    color: white;
    font-size: 40px;
    
    &:hover {
      color: #f4a261;
    }
  }


`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: white;

  @media (max-width: 768px) {
    display: block;
  }
`;

 function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar>
      <Logo src={logoImg} />
      <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={32} /> : <List size={32} />}
      </MenuButton>
      <MenuLinks open={menuOpen}>
        <MenuItem>
          <Link className="link-item" 
          to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        </MenuItem>
        <MenuItem>
          <Link className="link-item"
          to="/cardapio" onClick={() => setMenuOpen(false)}>Cardápio</Link>
        </MenuItem>
        <MenuItem>
          <Link className="link-item"
          to="/bolosfesta" onClick={() => setMenuOpen(false)}>Bolos festa</Link>
        </MenuItem>
      </MenuLinks>
    </Navbar>
  );
}


export default NavBar 