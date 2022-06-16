import {Form, Button, Row, Col} from 'react-bootstrap';
import {useState} from 'react';

function Search(){
    
    const [values, setValues] = useState({
        name: '',
        username: '',
        city: '',
        company: '',
    });

    const handleChange = (event, fieldName) => {
        setValues({...values, [fieldName]: event.target.value})
    }

    return (
        <Form>
            <Row className="m-3">
                <Col lg={3}>                
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control placeholder="Enter name" 
                        value={values.name}
                        onChange={(event) => handleChange(event, 'name')}/>
                    </Form.Group>
                </Col>
                <Col lg={3}>                
                    <Form.Group className="mb-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="email" placeholder="Enter username"
                        value={values.name}
                        onChange={(event) => handleChange(event, 'username')}/>
                    </Form.Group>
                </Col>
                <Col lg={3}>                
                    <Form.Group className="mb-3">
                        <Form.Label>City</Form.Label>
                        <Form.Control placeholder="Enter city"
                        value={values.name}
                        onChange={(event) => handleChange(event, 'city')}/>
                    </Form.Group>
                </Col>
                <Col lg={3}>                
                    <Form.Group className="mb-3">
                        <Form.Label>Company</Form.Label>
                        <Form.Control placeholder="Enter company"
                        value={values.name}
                        onChange={(event) => handleChange(event, 'company')}/>
                    </Form.Group>
                </Col>
                
            </Row>
            <div className="d-flex justify-content-end m-4">
                <Button variant="info" className="me-2">
                Search
                </Button>
                <Button variant="secondary">
                Clear search
                </Button>
            </div>
            
        </Form>
    )
}

export default Search;