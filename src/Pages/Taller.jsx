import { ContenidoTaller } from "../Components/Taller/ContenidoTaller";
import styled from "styled-components";

// Estilo del contenedor de la página
const StyledPage = styled.div`
    background-color: #DEF2F1;
`;

// Componente principal
export const Taller = () => {
  return (
    <StyledPage>
      <ContenidoTaller />
    </StyledPage>
  );
};
