import axios from "axios";
import {useState, useEffect} from 'react';
import {Row, Col, Card, Modal, Image}  from 'react-bootstrap';

function Photos({album}){
    const [photos, setPhotos] = useState([]);
    const[currentPhoto, setCurrentPhoto] = useState(null);
    const[showModal, setShowModal] = useState(false);

    const closePhoto = () => setShowModal(false);

    const openPhoto = (photo) => () => {
        setCurrentPhoto(photo);
        setShowModal(true);
    }

    useEffect(() => {
        async function loadPhotos(){
            const res = await axios.get('https://jsonplaceholder.typicode.com/photos', {
                params: {
                    albumId: album.id
                }
            });
            setPhotos(res.data);        
        }
        loadPhotos().catch(console.error)
    }, [album.id])

    return(
        <>
        <Row className="m-2 g-2">
                {
                    photos.map((photo) =>(
                        <Col md={6} lg={3} key={photo.id}>
                            <Card 
                                className="h-100 album-card"
                                onClick={openPhoto(photo)}> 
                                <Card.Img src={photo.thumbnailUrl} alt={photo.title}/>
                                <Card.ImgOverlay>                                      
                                    <Card.Body>
                                        {photo.title}
                                    </Card.Body>
                                </Card.ImgOverlay> 
                            </Card>
                        </Col>
                    ))
                }
                
            </Row>
            <Modal show={showModal} onHide={closePhoto}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {currentPhoto?.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image 
                        src={currentPhoto?.url} alt={currentPhoto?.title}
                        className="w-100"    
                    />
                </Modal.Body>

            </Modal>
            </>
    )
}

export default Photos