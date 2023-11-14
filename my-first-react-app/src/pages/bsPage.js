import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const BSPage=()=>
{

    // https://react-bootstrap.netlify.app/docs/layout/breakpoints
    const stil={background:'lightGray', border:'solid 1px'}
    return <Container>
      <Row>
       
        <Col lg style={stil} >1 of 2</Col>
        <Col md  style={stil}>1 of 3</Col>
        <Col md  style={stil}>1 of 4</Col>
        <Col sm  style={stil}>1 of 1</Col>
      </Row>
      <Row>
        <Col>2 of 1</Col>
        <Col>2 of 2</Col>
        <Col>2 of 3</Col>
        <Col>2 of 4</Col>
      </Row>
      <Row>
        <Col>3 of 1</Col>
        <Col>3 of 2</Col>
        <Col>3 of 3</Col>
        <Col>3 of 4</Col>
      </Row>
    </Container>
}

export default BSPage