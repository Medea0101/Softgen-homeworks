import {Table} from 'react-bootstrap'

function UsersTable({data = []}){


    return(
        <Table>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Username</td>
                    <td>Email</td>
                    <td>Address</td>
                    <td>Company</td>
                </tr>
            </thead>
            <tbody>
                {
                    data.map(user => (
                        <tr key = {user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.address.city}</td>
                            <td>{user.company.name}</td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    )
}

export default UsersTable