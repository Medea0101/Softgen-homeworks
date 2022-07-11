import axios from "axios";
import {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Card, Modal}  from 'react-bootstrap';
import './GalleryView.scss';
import './Photos'
import Photos from "./Photos";


function GalleryView(){
    const[albums, setAlbums] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [currentAlbum, setCurrentAlbum] = useState(null);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/albums')
            .then((res) => setAlbums(res.data))
    }, []);

    const openAlbum = (album) => {
        return() => {
            setCurrentAlbum(album);
            setShowModal(true);
        }
    }

    const closeAlbum = () => setShowModal(false);

    return (
        <>
            <Row className="m-2 g-2">
                {
                    albums.map((album) =>(
                        <Col md={3} key={album.id}>
                            <Card 
                                className="h-100 album-card"
                                onClick={openAlbum(album)}>                                
                                <Card.Body>
                                    {album.title}
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
                
            </Row>
            <Modal size="lg" show={showModal} onHide={closeAlbum}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {currentAlbum && currentAlbum.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Photos album={currentAlbum}></Photos>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default GalleryView