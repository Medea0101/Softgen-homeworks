import {Form, Button, Row, Col} from 'react-bootstrap';
import {useState} from 'react';
import axios from 'axios';

function SearchForm(){
    const initialValues = {
        name: '',
        username: '',
        city: '',
        company: '',
    }
    const [values, setValues] = useState(initialValues);
    const reset = () => setValues(initialValues);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setValues({...values, [name]:value})
        }

    const search = async (event) => {
        event.preventDefault();
        console.log(values);
        const res = await axios.get('https://jsonplaceholder.typicode.com/users', {
            params: values
        })
        console.log(res.data);
    }  

    return (
        <Form onSubmit={search} onReset={reset}>
            <Row className="m-3">
                <Col lg={3}>                
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            placeholder="Enter name" 
                            value={values.name}
                            name="name"
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Col>
                <Col lg={3}>                
                    <Form.Group className="mb-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            placeholder="Enter username"
                            value={values.username}
                            name="username"
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Col>
                <Col lg={3}>                
                    <Form.Group className="mb-3">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            placeholder="Enter city"
                            value={values.city}
                            name="city"
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Col>
                <Col lg={3}>                
                    <Form.Group className="mb-3">
                        <Form.Label>Company</Form.Label>
                        <Form.Control
                            placeholder="Enter company"
                            value={values.company}
                            name="company"
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Col>
                
            </Row>
            <div className="d-flex justify-content-end m-4">
                <Button variant="info" type="submit" className="me-2">
                Search
                </Button>
                <Button variant="secondary" type="reset">
                Clear search
                </Button>
            </div>
            
        </Form>
    )
}

export default SearchForm;