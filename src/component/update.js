import React, { useState, useEffect}from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { useHistory } from 'react-router';

const Update = () => {
  // state management
  const [id,setID] =  useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  let history = useHistory();

  // getting value from local storage and updating state
  useEffect(() =>{
    setID(localStorage.getItem('ID'))
    setFirstName(localStorage.getItem('First Name'));
    setLastName(localStorage.getItem('Last Name'));
  }, [])
  
  // updating API using axios with the modified data using id
  const updateAPIData = (e) => {
      e.preventDefault()
      axios.put(`https://6120eca524d11c001762ee89.mockapi.io/fakeData/${id}`,{
        firstName,
        lastName
      }).then(() => {
          history.push('/')
      })
  }

  return (
      <div>
          <h4 className="sub-header">Update Page</h4>
    <Form className="create-form" onSubmit={updateAPIData}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Update
      </Button>
    </Form>
    </div>
  );
};

export default Update;
