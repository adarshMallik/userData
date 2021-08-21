import React,{ useState } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { useHistory } from 'react-router';

const Create = () => {
  // state management
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  let history = useHistory();

  // creating a function to check the data is captred after submit
  const postData = (e) => {
    e.preventDefault()
    // send data to the api using axios
     axios.post(`https://6120eca524d11c001762ee89.mockapi.io/fakeData`,{
       firstName,
       lastName
     }).then(()=>{
         history.push('./')
     });
  };
  return (
    <div>
        <h4 className="sub-header">Create Page</h4>
    <Form className="create-form" onSubmit={postData}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
};

export default Create;
