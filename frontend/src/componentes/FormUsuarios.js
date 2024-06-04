import { Form, Button, Col, Row, Card, CardBody, CardFooter, FormLabel } from 'react-bootstrap'
function FormUsuarios(nombre) {
    function click() {
        console.log(nombre)
    }

    return (
        <Form>
            <Card>
                <CardBody>
                    <FormLabel>Formulario</FormLabel>
                </CardBody>
                <CardFooter>
                    <Row>
                        <Col>
                            <Form.Label>Razon Social</Form.Label>
                        </Col>
                        <Col>
                            <Form.Control value={nombre}></Form.Control>
                        </Col>
                         <br></br>
                         <Col>
                            <Form.Label>RFC</Form.Label>
                        </Col>
                        <Col>
                            <Form.Control value={nombre}></Form.Control>
                        </Col>
                         <br></br>
                         <Col>
                            <Form.Label>Telefono</Form.Label>
                        </Col>
                        <Col>
                            <Form.Control value={nombre}></Form.Control>
                        </Col>
                         <br></br>
                        <Col>
                            <Button onClick={click}>Aceptar</Button>
                            <Button onClick={click}>Cancelar</Button>
                        </Col>
                    </Row>
                </CardFooter>
            </Card>
        </Form>
    )
}