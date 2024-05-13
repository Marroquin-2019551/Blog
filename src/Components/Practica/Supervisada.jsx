import styled from "styled-components";
import { Container, Row, Col, Card } from 'react-bootstrap';

// Importar imágenes
import ag from "../../img/ag.jpg"
import ca from "../../img/ca.png"
import thunder from "../../img/thunder.png"
import scrum from "../../img/scrum.jpg"
import comentarios from "../../img/comentarios.jpg"
import evaluacion from "../../img/evaluacion.jpg"

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
        border: none; /* Eliminar el borde */
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

export const Supervisada = () => {

    const ps1 = ag;
    const ps2 = ca;
    const ps3 = thunder;
    const ps4 = scrum;
    const ps5 = comentarios;
    const ps6 = evaluacion;

    return (
        <StyledTaller>
            <h1>TALLER DE <span>PRÁCTICA SUPERVISADA</span></h1>
            
            <Container fluid>
                <Row className="justify-content-center">
                    <Col lg={12} className="mb-4">
                        <Card className="shadow p-3 mb-5 bg-body rounded carta">
                            <Card.Body>
                                <Row>
                                    <Col lg={7}>
                                        <h1 className="titulo-act">Laboratorio PS # 1</h1>    
                                        <p className="contenido">Descripción: Agenda Web.</p>                     
                                    </Col>
                                    <Col lg={5} className="text-lg-right">
                                        <Card.Img variant="top" src={ps1} alt="" className="imagen" />
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
                                        <h1 className="titulo-act">Laboratorio PS #2</h1>
                                        <p className="contenido">Proyecto Control Académico.</p>
                                    </Col>
                                    <Col lg={5} className="text-lg-right">
                                        <Card.Img variant="top" src={ps2} alt="" className="imagen" />
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
                                        <h1 className="titulo-act">Entrega de la Coleción de Thunder o Insomnia/Postman</h1>
                                        <p className="contenido">Solo debe enviar la colección de postman. NO EN .ZIP .RAR, ETC.</p>
                                    </Col>
                                    <Col lg={5} className="text-lg-right">
                                        <Card.Img variant="top" src={ps3} alt="" className="imagen" />
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
                                        <p className="contenido">Descripción:Prueba corta sobre medología SCRUM, Documento de estudio: Guía rápida de Scrum</p>
                                    </Col>
                                    <Col lg={5} className="text-lg-right">
                                        <Card.Img variant="top" src={ps4} alt="" className="imagen" />
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
                                        <h1 className="titulo-act">Laboratorio PS # 3</h1>
                                        <p className="contenido">Descripción: Proyecto, Gestor de opiniones, Gestor de opiniones.pdf Gestor de opiniones.pdf</p>
                                    </Col>
                                    <Col lg={5} className="text-lg-right">
                                        <Card.Img variant="top" src={ps5} alt="" className="imagen" />
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
                                        <h1 className="titulo-act">Evaluación bimestral PS.</h1>                            
                                        <p className="contenido">El examen bimestral de práctica supervisada se pondera con el 50% del examen bimestral de Tecnología y el 50% del proyecto bimestral de Taller.</p>
                                    </Col>
                                    <Col lg={5} className="text-lg-right">
                                        <Card.Img variant="top" src={ps6} alt="" className="imagen" />
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
