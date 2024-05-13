import React from "react";
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from "styled-components";

const changeColor = keyframes`
  0% {
    background-image: linear-gradient(260deg, #111111, #333333);
  }
  100% {
    background-image: linear-gradient(260deg, #222222, #444444);
  }
`;

const StyledNavbar = styled.nav`
  animation: ${changeColor} 10s linear infinite;
  height: 10vh;
  align-items: center;
  display: flex;
  justify-content: center; /* Centrar verticalmente el contenido */

  h1 {
    text-align: center;
    color: white;
    margin: 0; 
    padding: 0 20px; 
    cursor: pointer; 
  }
`;

export const Navbar = () => {
  const navigate = useNavigate();

  const goToMenu = (ruta) => {
    navigate(ruta);
  };

  return (
    <StyledNavbar>
      <h1 onClick={() => goToMenu('/')}>Brandonn Marroquín</h1>
    </StyledNavbar>
  );
};
