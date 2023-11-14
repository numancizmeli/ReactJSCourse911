import FilmCharacter from "../components/filmCharacter"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from "axios";
import { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';

const CharactersPage = () => {

    const [searchVal, setSearchVal] = useState('')
    const [filmsCharsData, setFilmCharsData] = useState([])
    const [loaded, setLoaded] = useState(false)
    const rows = [...Array(Math.ceil(filmsCharsData.length / 4))]
    const productRows = rows.map((row, idx) =>
        filmsCharsData.slice(idx * 4, idx * 4 + 4),
    )


    useEffect(() => {
        const request = axios.get('https://swapi.dev/api/people')

        request.then((response) => {

            if (response.status === 200) {
                console.log(response.data.results)
                setFilmCharsData(response.data.results)
                setLoaded(true)
            }

        })

    }, [])

    useEffect(() => {
        let newData = []

        filmsCharsData.forEach((item) => {
            if (item.name.includes(searchVal) === true)
                newData.push(item);
        })

        setFilmCharsData(newData)


    }, [searchVal])


    return <>  { loaded==false ? <b style={{color:"white"}}>Sunucudan Yanıt bekleniyor lütfen bekleyiniz</b>   :  <>
        <Form.Control type="text" placeholder="Enter search text" value={searchVal} onChange={(e) => setSearchVal(e.target.value)} >
        </Form.Control>
        <Container>
      
                {
                productRows.map((row,idx)=>{
                return <Row key={idx}>
                {
                    row.map((item, index) => {
                        return <Col sm key={item.name+index}> <FilmCharacter key={item.name}
                            filmCharImg={'https://starwars-visualguide.com/assets/img/characters/' + (idx * 4 + index + 1) + '.jpg'}
                            filmCharName={item.name}
                            dataSource={item}
                        /> </Col>

                    })
                }
            </Row>
             
            })
 
        }


        </Container>
    </>
   
    }
     </>

}

export default CharactersPage