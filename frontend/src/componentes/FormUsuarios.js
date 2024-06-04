import { Form, Button, Col, Row, Card, CardBody, CardFooter, FormLabel } from 'react-bootstrap'
function FormUsuarios({showForm}) {
    function click() {
        showForm()
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
                            <Form.Label>Razón Social</Form.Label>
                        </Col>
                        <Col>
                            <Form.Control ></Form.Control>
                        </Col>
                         <br></br>
                         <Col>
                            <Form.Label>RFC</Form.Label>
                        </Col>
                        <Col>
                            <Form.Control ></Form.Control>
                        </Col>
                         <br></br>
                         <Col>
                            <Form.Label>Teléfono</Form.Label>
                        </Col>
                        <Col>
                            <Form.Control ></Form.Control>
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
    );
}
export default FormUsuarios;