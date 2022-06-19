import {Form, Button, Row, Col} from 'react-bootstrap';
import {useState} from 'react';
import axios from 'axios';

function AddPost(){
    const[values, setValues] = useState({
        userId: '',
        title: '',
        body:'',
    });
    const handleChanges = (event) => {
        const {name, value} = event.target;
        setValues({...values, [name]:value})
    }

    return (
        <Form >
            <Row className="m-3">
                <Col lg={2}>                
                    <Form.Group className="mb-4">
                        <Form.Label>User Id</Form.Label>
                        <Form.Control
                            placeholder="Enter your id"
                            value={values.userId}
                            name='userId'
                            onChange={handleChanges}
                        />
                    </Form.Group>
                </Col>
                <Col lg={2}>                
                    <Form.Group className="mb-4">
                        <Form.Label>Post title</Form.Label>
                        <Form.Control
                            placeholder="Enter title"
                            value={values.title}
                            name='title'
                            onChange={handleChanges}
                        />
                    </Form.Group>
                </Col>
                <Col lg={8}>                
                    <Form.Group className="mb-8">
                        <Form.Label>Post text</Form.Label>
                        <Form.Control
                            placeholder="Enter post text"
                            value={values.body}
                            name='body'
                            onChange={handleChanges}
                        />
                    </Form.Group>
                </Col>                
            </Row>

            <div className="d-flex justify-content-end m-4">
                <Button variant="info" type="submit" className="me-2">
                Add post
                </Button>
            </div>
            
        </Form>
    )
}
export default AddPost