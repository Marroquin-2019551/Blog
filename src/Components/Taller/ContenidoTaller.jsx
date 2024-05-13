import React from "react";
import styled from "styled-components";
import { Container, Row, Col, Card } from 'react-bootstrap';

// Importar imágenes
import quiensoy from "../../img/quiensoy.jpg"
import gato from "../../img/gato.jpg"
import penultimo from "../../img/penultimo.png"
import examen from "../../img/examen.png"
import musica from "../../img/musica.jpg"
import ventas from "../../img/ventas.jpg"

const StyledTaller = styled.div`
    text-align: center;
    background-color: #000;
    padding: 50px 0;

    h1 {
        font-family: Helvetica;
        font-weight: 600;
        color: #fff;
        margin-bottom: 30px;
    } 

    span {
        color: #ccc;
    }

    .titulo-act {
        font-size: 24px;
        font-weight: 900;
        color: #fff;
    }

    h3 {
        font-size: 18px;
        font-weight: 700;
        color: #fff;
    }

    .contenido {
        font-size: 16px;
        color: #ccc;
    }

    .imagen {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
    }

    .carta {
        background: linear-gradient(to right, #222 0%, #000 100%);
        border: none; 
        color: #fff;
        margin-bottom: 30px;
    }

    .carta-body {
        padding: 30px;
    }

    .carta-title, .carta-text {
        color: #fff;
    }
`;

export const ContenidoTaller = () => {

    const la1 = quiensoy;
    const la2 = gato;
    const la4 = penultimo;
    const la5 = examen;
    const la6 = musica;
    const la8 = ventas;

    return (
        <StyledTaller>
            <h1>TALLER DE <span>INFORMÁTICA</span></h1>

            <Container fluid>
                <Row className="justify-content-center">
                    <Col lg={12} className="mb-4">
                        <Card className="shadow p-3 mb-5 bg-body rounded carta">
                            <Card.Body>
                                <Row>
                                    <Col lg={7}>
                                        <h1 className="titulo-act">Ejercicio #1</h1>
                                        <p className="contenido">Prueba de habilidades y conocimiento.
                                            Realice un ahorcado con HTML, CSS y JS, Realice un push a un repositorio propio de Github cada 30 mins,En este apartado debe subir únicamente el enlace al repositorio.</p>
                                        <br />
                                    </Col>
                                    <Col lg={5} className="text-lg-right">
                                        <Card.Img variant="top" src={la1} alt="" className="imagen" />
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row className="justify-content-center">
                    <Col lg={12} className="mb-4">
                        <Card className="shadow p-3 mb-5 bg-body rounded carta">
                            <Card.Body>
                                <Row>
                                    <Col lg={7}>
                                        <h1 className="titulo-act">Laboratorio #2</h1>
                                        <p className="contenido">Descripción:
                                            Sistema de adopción de mascotas.
                                            En este laboratorio deberá completar el proyecto visto en clase denominado "Adopción de mascotas". El profesor indicará las funciones que deberá de realizar para completar el sistema.
                                            Como mínimo deberán ser las siguientes funcionalidades:
                                            ANIMAL:
                                            SAVE
                                            GET
                                            SEARCH
                                            UPDATE
                                            DELETE
                                            *Validaciones para cada una de las funcionalidades son requeridas.
                                            Sin embargo, estas funcionalidades están sujetas a cambios, y pueden ser inclusive más de las aquí descritas.</p>
                                        <br />
                                    </Col>
                                    <Col lg={5} className="text-lg-right">
                                        <Card.Img variant="top" src={la2} alt="" className="imagen" />
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row className="justify-content-center">
                    <Col lg={12} className="mb-4">
                        <Card className="shadow p-3 mb-5 bg-body rounded carta">
                            <Card.Body>
                                <Row>
                                    <Col lg={7}>
                                        <h1 className="titulo-act">Revisión de avances en proyecto final de bimestre</h1>
                                        <p className="contenido">Descripción:En el documento adjunto en este apartado encontrarás las instrucciones generales para el desarrollo del proyecto bimestral,Revisión del avance del proyecto final, donde se solicita el avance de como mínimo 35% del mismo.</p>
                                        <br />
                                    </Col>
                                    <Col lg={5} className="text-lg-right">
                                        <Card.Img variant="top" src={la4} alt="" className="imagen" />
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row className="justify-content-center">
                    <Col lg={12} className="mb-4">
                        <Card className="shadow p-3 mb-5 bg-body rounded carta">
                            <Card.Body>
                                <Row>
                                    <Col lg={7}>
                                        <h1 className="titulo-act">Prueba Objetiva</h1>  
                                        <p className="contenido">Prueba corta basada en conceptos de HTML, CSS, JavaScript, NodeJS, Express, MongoDB.</p>
                                    </Col>
                                    <Col lg={5} className="text-lg-right">
                                        <Card.Img variant="top" src={la5} alt="" className="imagen" />
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row className="justify-content-center">
                    <Col lg={12} className="mb-4">
                        <Card className="shadow p-3 mb-5 bg-body rounded carta">
                            <Card.Body>
                                <Row>
                                    <Col lg={7}>
                                        <h1 className="titulo-act">Laboratorio #3</h1>
                                        <p className="contenido">Descripción: Proyecto Gestor de Empresas.</p>
                                    </Col>
                                    <Col lg={5} className="text-lg-right">
                                        <Card.Img variant="top" src={la6} alt="" className="imagen" />
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row className="justify-content-center">
                    <Col lg={12} className="mb-4">
                        <Card className="shadow p-3 mb-5 bg-body rounded carta">
                            <Card.Body>
                                <Row>
                                    <Col lg={7}>
                                        <h1 className="titulo-act">Proyecto Final Bim. I</h1>
                                        <p className="contenido">Entrega de proyecto bimestral "Ventas Online".</p>
                                        <br />
                                    </Col>
                                    <Col lg={5} className="text-lg-right">
                                        <Card.Img variant="top" src={la8} alt="" className="imagen" />
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </StyledTaller>
    );
};
