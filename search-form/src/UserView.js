import SearchForm from "./SearchForm";
import UsersTable from "./UsersTable";
import {Stack} from 'react-bootstrap'
import {useEffect, useState} from 'react';
import axios from 'axios';

function UsersView(){
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((result) => setUsers(result.data))
    }, []);

    const search = async (params) => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users', {params})
        setUsers(res.data);
    }

    return (
        <Stack>
            <SearchForm onSubmit={search}/>
            <UsersTable data ={users}/>
        </Stack>
    )
}

export default UsersView