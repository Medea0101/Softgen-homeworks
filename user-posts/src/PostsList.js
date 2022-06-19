import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap';
import {useState, useEffect} from 'react';
import axios from 'axios';

function PostsList(){
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/posts")
        .then((result) => setUsers(result.data))
    }, []);

    return (
        <Table>
            <thead>
                <tr>
                    <td>userId</td>
                    <td>id</td>
                    <td>title</td>
                    <td>body</td>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user => (
                        <tr key = {user.id}>
                            <td>{user.userId}</td>
                            <td>{user.id}</td>
                            <td>{user.title}</td>
                            <td>{user.body}</td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    )
}

export default PostsList