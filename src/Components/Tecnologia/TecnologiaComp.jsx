import styled from "styled-components";
import { Container, Row, Col, Card } from 'react-bootstrap';

// Importar imágenes
import infografia from "../../img/infografia.jpg"
import prueba1 from "../../img/prueba1.jpg"
import mapamental from "../../img/mapamental.jpg"
import examen2 from "../../img/examen2.png"
import examenbimestral from "../../img/examenbimestral.jpg"

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

export const TecnologiaComp = () => {

    const tc1 = infografia;
    const tc2 = prueba1;
    const tc3 = mapamental;
    const tc4 = examen2;
    const tc6 = examenbimestral;

    return (
        <StyledTaller>
            <h1>TALLER DE <span>TECNOLOGIA</span></h1>
            
            <Container fluid>
                <Row className="justify-content-center">
                    <Col lg={12} className="mb-4">
                        <Card className="shadow p-3 mb-5 bg-body rounded carta">
                            <Card.Body>
                                <Row>
                                    <Col lg={7}>
                                        <h1 className="titulo-act">Infografía</h1>
                                    
                                        <p className="contenido">Descripción:Realiza una infografía sobre Desarrollo web y procesadores teniendo en cuenta los siguientes tópicos:HTML5, CSS3, FlexBox, Bootstrap, Preprocesadores, LESS, SASS, PUG, JADE</p>
                                        <br/>
                                    </Col>
                                    <Col lg={5} className="text-lg-right">
                                        <Card.Img variant="top" src={tc1} alt="" className="imagen" />
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
                                        <p className="contenido">Prueba corta # 1:Temas de actividades previas (infografía y mapa conceptual) sobre las diferentes tecnologías, así como los temas de Taller como NodeJS, Express y MongoDB</p>
                                    </Col>
                                    <Col lg={5} className="text-lg-right">
                                        <Card.Img variant="top" src={tc2} alt="" className="imagen" />
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
                                        <h1 className="titulo-act">Mapa Mental</h1>
                                        <p className="contenido">Descripción:Realiza un mapa mental sobre el Desarrollo web teniendo en cuenta los siguiente tópicos:Hosting, Dominio, Cliente-Servidor, Web semántica, WebM,Canvas, W3C.</p>
                                    </Col>
                                    <Col lg={5} className="text-lg-right">
                                        <Card.Img variant="top" src={tc3} alt="" className="imagen" />
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
                                        <h1 className="titulo-act">Prueba Objetiva #2</h1>
                                        <p className="contenido">Kahoot realizado en clase, No debe subir nada.</p>

                                    </Col>
                                    <Col lg={5} className="text-lg-right">
                                        <Card.Img variant="top" src={tc4} alt="" className="imagen" />
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
                                        <h1 className="titulo-act">Examen Final Bimestral</h1>
                                        <p className="contenido">Examen Final Bimestral conceptos vistos durante el 1er. bimestre.</p>
                                    </Col>
                                    <Col lg={5} className="text-lg-right">
                                        <Card.Img variant="top" src={tc6} alt="" className="imagen" />
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
