
import {useEffect, useState} from 'react';
import {Row, Col, Card, Modal, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Photos from './Photos'

function AlbumsCards({data, onOpen}){
    const{id, title} = data;

    const openHandler = () => {
        onOpen && onOpen(data);
    }   
    return (
        <Card className="bg-light text-dark text-center p-3 m-2" style={{height:200}}>
            <Card.Body> 
                <Card.Title>{title}</Card.Title>
                <Card.Text>{id}</Card.Text>
                <Button variant="secondary" onClick={openHandler}>
                    Open Album
                </Button>
            </Card.Body>                        
        </Card>
    )
}

function AlbumsList(){
    const [albums, setAlbums] = useState([]);
    const [show, setShow] = useState(false);
    const[currentAlbum, setCurrentAlbum] = useState({});

    useEffect(() =>{
        async function fetchData(){
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/albums')
            setAlbums(data);
        }
        fetchData();
    }, [])

    const handleClose = () => setShow(false);   

    const albumOpenHandler = (albumData) => {
        setShow(true);
        setCurrentAlbum(albumData);
    }
    return (
        <>
            <Row className="justify-content-md-center g-0">
                {
                albums.map((albums) => (
                    <Col lg={3} key={albums.id}>
                        <AlbumsCards data={albums} onOpen={albumOpenHandler}>
                        </AlbumsCards>
                    </Col>
                )) 
                }
            </Row>

            <Modal
                show={show}
                onHide={handleClose}
                keyboard={false}
                size="lg"
            >
                <Modal.Header>
                    <Modal.Title>{currentAlbum.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body >{currentAlbum.id}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )

}


export default AlbumsList