import React, { useEffect, useState } from 'react'
import { API_URL } from '../Constants/url'
import { Form, Checkbox } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Update = () => {

    const [id, setId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checked, setChecked] = useState(false);

    const navigate = useNavigate();

    const updateUser = async() => {
        await axios.put(API_URL + id, {
            firstName,
            lastName,
            checked
        })

        navigate('/read')
    }

    useEffect(() => {
        setId(localStorage.getItem('id'));
        setFirstName(localStorage.getItem('firstName'));
        setLastName(localStorage.getItem('lastName'));
        setChecked(localStorage.getItem('checked'));
    }, [])

    return (
        <Form className='my-form'>
            <Form.Field>
                <label>First Name</label>
                <input placeholder='Enter First Name'
                    value={firstName}
                    onChange={event => {
                        setFirstName(event.target.value)
                    }}
                />
            </Form.Field><br />
            <Form.Field>
                <label>Last Name</label>
                <input placeholder='Enter Last Name'
                    value={lastName}
                    onChange={event => {
                        setLastName(event.target.value)
                    }}
                />
            </Form.Field><br />
            <Form.Field>
                <Checkbox label="Check the Terms And Conditions"
                    checked={checked}
                    onChange={() => {
                        setChecked(!checked)
                    }}
                />
            </Form.Field><br />
            <button onClick={updateUser}>Update</button>
        </Form>
    )
}

export default Update