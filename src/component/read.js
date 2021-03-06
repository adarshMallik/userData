import React,{ useEffect,useState } from 'react'
import {Table,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import axios from 'axios';



const Read = () =>{
    //state management from API 
const [APIData, setAPIData] = useState([]);
// GETTING DATA FROM API 
useEffect(() => {
      axios.get(`https://6120eca524d11c001762ee89.mockapi.io/fakeData`)
      .then((response) => {
          setAPIData(response.data);
      })
}, [])

const setData =(data) => {
    // destructure data into id,name
    let {id,firstName,lastName} = data;
    localStorage.setItem('ID',id);
    localStorage.setItem('First Name',firstName);
    localStorage.setItem('Last Name',lastName);
}

//Delete
const onDelete =(id) =>{
    axios.delete(`https://6120eca524d11c001762ee89.mockapi.io/fakeData/${id}`)
    .then(() =>{
        getData();
    })
}

//to get all the remaining data after deleting a single record

const getData = () => {
    axios.get(`https://6120eca524d11c001762ee89.mockapi.io/fakeData`)
      .then((getdata) => {
          setAPIData(getdata.data);
      })
}
 
return (
<div>
    <Link to='/create'>
        <Button variant="primary" style={{marginBottom: "20px"}}>Create</Button>
    </Link>
<Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Update</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
      {APIData.map((data)=>{
          return(
            <tr>
            <td>{data.firstName}</td>
            <td>{data.lastName}</td>
            <Link to='/update'>
            <td><Button variant="success" onClick={() => setData(data)}>Update</Button></td>
            </Link>
            <td><Button variant="danger" onClick={() => onDelete(data.id)}>Delete</Button></td>
          </tr>
          )
      })}
   
  </tbody>
</Table>
</div>
    )
}

export default Read;