 import CharactersPage from './charactersPage';
import FilmsPage from './filmsPage';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
const MainPage =()=>
{

    const [activePage, setActivePage] = useState('films')

return  <>
 <Container style={{background:'black',width:'80%'}}>
      <Row>
        <Col><img src='./Star_Wars_Logo.png' style={{width:'100px'}} /></Col>
        <Col>
         <Button variant="success" onClick={()=>setActivePage('films')} >Filmler</Button>
        
        </Col>
        <Col>
        <Button variant="warning" onClick={()=>setActivePage('charachters')}>Karakterler</Button>

        </Col>

      </Row>
      {activePage==='films'? <FilmsPage />:<CharactersPage /> }
    </Container>
  
    
    

</>
}
export default MainPage