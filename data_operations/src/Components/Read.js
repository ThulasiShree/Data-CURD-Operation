import React, { useEffect, useState } from 'react'
import { API_URL } from '../Constants/url'
import { Table, Button, Tab } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Read = () => {

    const [apiData, setAPIData] = useState([]);

    const navigate = useNavigate();

    const updateUser = ({id, firstName, lastName, checked}) => {

        localStorage.setItem('id', id);
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
        localStorage.setItem('checked', checked);

        navigate('/update');
    }

    const deleteUser = async (id) => {
        await axios.delete(API_URL + id);
        callGetAPI();
    }

    const callGetAPI = async () => {
        const resp = await axios.get(API_URL);
        setAPIData(resp.data);
    }

    useEffect(() => {
        callGetAPI();
    }, []);

    return (
        <Table singleLine>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>
                        First Name
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                        Last Name
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                        Checked
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                        Delete_User
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                        Update_User
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {
                    apiData.map(data => (
                        <Table.Row key={data.id}>
                            <Table.Cell>
                                {data.firstName}
                            </Table.Cell>
                            <Table.Cell>
                                {data.lastName}
                            </Table.Cell>
                            <Table.Cell>
                                {data.checked ? 'True' : 'False'}
                            </Table.Cell>
                            <Table.Cell>
                                <Button onClick={() => {deleteUser(data.id)}}>Delete</Button>
                            </Table.Cell>
                            <Table.Cell>
                                <Button onClick={() => {updateUser(data)}}>Update</Button>
                            </Table.Cell>
                        </Table.Row>
                    ))
                }
            </Table.Body>
        </Table>
    )
}

export default Read