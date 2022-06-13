import {useEffect, useState} from 'react';
import {Row, Col, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

// ver gavakete, ar vici 

function Photos(){
    const [photos, setPhotos] = useState([]);

    useEffect(() =>{
        async function fetchData(){
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/photos')
            setPhotos(data);
        }
        fetchData();
    }, [])


    return (
        <Row className="justify-content-md-center g-0">
            {
               photos.map((photos) =>(
                <Col lg={3} key={photos.id}>
                    <Card className="bg-light text-dark text-center p-3 m-2" style={{height:100}}>
                        <Card.Body>
                            <Card.Img src={photos.url}></Card.Img>
                        </Card.Body>                        
                    </Card>
                </Col>
               )) 
            }
        </Row>
     )
            
}


export default Photos