import styled, { keyframes } from "styled-components";
import foto from "../img/yo.jpg";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useState } from "react"

export const Info = ({ handleMaterias }) => {
  return (
    <StyledMe>
      <Container className="d-flex justify-content-center align-items-center mr-8" style={{ maxWidth: "100vw" }}>
        <Card>
          <Card.Body className="card-body">
            <Row className="mt-0">
              {/* left side */}
              <Col ml={6}>
                <h1>Bienvenido al Blog de Brandonn</h1>
                <p className="contenido">En este blog se van a ver las tareas realizadas en las materias de Taller, Práctica supervisada y Tecnología. ¡Buen viaje!</p>
                <div>
                  <h2 style={{ textAlign: 'center' }}>Taller</h2>
                  <p className="contenido">En esta materia realizamos ejercicios de programación.</p>
                </div>
                <div>
                  <h2 style={{ textAlign: 'center' }}>Práctica supervisada</h2>
                  <p className="contenido">En esta materia realizamos ejercicios de programación en clase para demostrar cuánto hemos aprendido.</p>
                </div>
                <div>
                  <h2 style={{ textAlign: 'center' }}>Tecnología</h2>
                  <p className="contenido">En esta materia miramos toda la teoría de programación para después ponerla en práctica en Taller y Práctica supervisada.</p>
                </div>
                <div className="button-container">
                <Button onClick={() => handleMaterias("Tecnología")}>Tecnología</Button>
                <Button onClick={() => handleMaterias("Practica")}>Práctica Supervisada</Button>
                  <Button onClick={() => handleMaterias("Taller")}>Taller</Button>
                </div>
              </Col>
              {/* right side */}
              <Col lg={5}>
                <Card.Img variant="top" src={foto} alt="Santiago" className="rounded-2xl" style={{ maxWidth: "800px" }} />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </StyledMe>
  );
};

// Definición de los keyframes para la animación
const changeColor = keyframes`
  0% {
    background: linear-gradient(to right, #111111, #333333);
  }
  100% {
    background: linear-gradient(to right, #222222, #444444);
  }
`;

const StyledMe = styled.div`
  padding-top: 20px;
  width: 100vw;
  padding: 0;
  margin: 0 auto; /* Para centrar el componente horizontalmente */
  display: flex;
  padding-bottom: 20px;

  .card-body {
    animation: ${changeColor} 10s linear infinite; /* Aplicación de la animación al fondo del recuadro */
    padding: 20px;
    border-radius: 10px;
    color: #FFFFFF; /* Color de las letras */
  }

  .yo {
    font-family: 'georgia';
    font-weight: bold;
  }

  span {
    font-weight: 600;
  }

  .button-container {
    display: flex;
    flex-direction: column;
    align-items: center;     
  }

  .informatica {
    font-family: 'georgia';
    font-size: 20px;
  }

  .contenido {
    text-align: center;
    font-weight: 500;
  }
`;

const Button = styled.button`
  margin: 10px 0;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #000000;
  color: #FFFFFF;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 188px;

  &:hover {
    background-color: #222222;
  }
`;
