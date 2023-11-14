import FilmComponent from '../components/filmComponent';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from "axios";
import { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';

const FilmsPage = () => {

    const [searchVal, setSearchVal] = useState('')
    const [filmsData, setFilmsData] = useState([])
    const [loaded, setLoaded] = useState(false)
    const rows = [...Array(Math.ceil(filmsData.length / 4))]
    const productRows = rows.map((row, idx) =>
        filmsData.slice(idx * 4, idx * 4 + 4),
    )


    useEffect(() => {
        const request = axios.get('https://swapi.dev/api/films')

        request.then((response) => {

            if (response.status === 200) {
                
                setFilmsData(response.data.results)
                setLoaded(true)
            }

        })

    }, [])

    useEffect(() => {
        let newData = []

        filmsData.forEach((item) => {
            if (item.name.includes(searchVal) === true)
                newData.push(item);
        })

        setFilmsData(newData)


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
                        return <Col sm key={item.name+index}> <FilmComponent key={item.name}
                            filmCharImg={'https://starwars-visualguide.com/assets/img/films/' + (idx * 4 + index + 1) + '.jpg'}
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

export default FilmsPage