import React, { useState } from 'react'
import { API_URL } from '../Constants/url'
import { Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Create = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [checked, setChecked] = useState("");

    const navigate = useNavigate();

    const postData = async() => {
        await axios.post(API_URL, {
            firstName,
            lastName,
            checked
        })
        navigate('/read');
    }

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
        </Form.Field><br/>
        <Form.Field>
            <label>Last Name</label>
            <input placeholder='Enter Last Name'
                    value={lastName}
                    onChange={event => {
                        setLastName(event.target.value)
                    }}
            />
        </Form.Field><br/>
        <Form.Field>
            <Checkbox label="Check the Terms And Conditions"
                    checked={checked}
                    onChange={() => {
                        setChecked(!checked)
                    }}
            />
        </Form.Field><br/>
        <button onClick={postData}>Submit</button>
    </Form>
  )
}

export default Create