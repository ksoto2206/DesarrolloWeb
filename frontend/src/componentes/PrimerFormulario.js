import {Form, Button, Col, Row } from 'react-bootstrap'
function primerformulario(nombre){
    function click(){
        console.log(nombre)
      }

      return(
        <Row>
        <Col>
        <Form.Label>Martes 04</Form.Label>
        </Col>
        <Col>
        <Form.Control value={nombre}></Form.Control>
        </Col>
        <Col>
        <Button onClick={click}>ok</Button>
        </Col>
      </Row>
      )
}
export default primerformulario;