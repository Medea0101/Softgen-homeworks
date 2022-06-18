import SearchForm from "./SearchForm";
import UsersTable from "./UsersTable";
import {Stack} from 'react-bootstrap'

function UsersView(){
    return (
        <Stack>
            <SearchForm/>
            <UsersTable/>
        </Stack>
    )
}

export default UsersView