import React from 'react'
import { Button, Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import array from './array';
import { Link, useNavigate } from 'react-router-dom';
  
function Home() {
  
    let history = useNavigate()
  
    function setID(id, name, age) {
        localStorage.setItem('id', id);
        localStorage.setItem('city', city);
        localStorage.setItem('area', area);
        localStorage.setItem('Manager', Manager);
    }
  
    // Deleted function - functionality 
    // for deleting the entry made in the Home page
    function deleted(id) {
  
        var index = array.map(function (e) { 
            return e.id; }).indexOf(id);
  
        // deleting the entry with array index
        array.splice(index, 1)
  
        // We need to re-render the page for getting 
        // the results so redirect to the same page.
        history('/')
    }
  
    return (
        <div style={{ margin: '10rem' }}>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>city</th>
                        <th>area</th>
                        <th>id</th>
                        <th>Manager</th>
                        </tr>
                </thead>
                <tbody>
  
                    {/* Mapping through every element 
                        in the array and showing the 
                        data in the form of a table */}
                    {array.map((item) => {
                        return (
                            <tr>
                                <td>{item.city}</td>
                                <td>{item.area}</td>
                                <td>{item.id}</td>
                                <td>{item.Manager}</td>
  
                                {/* getting their, city, area and 
                                    Manager for storing these
                                    value in the JSX with 
                                    on click event */}
                                <td><Link to={`/edit`}>
                                    <Button onClick={(e) =>
                                    setID(item.id, item.city, item.area,item.Manager)} 
                                    variant="info">
                                    Update</Button></Link>
                                </td>
  
                                {/* Using the deleted function passing
                                    the id of an entry */}
                                <td><Button onClick={e => deleted(item.id)}
                                    variant="danger">Delete</Button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
  
            {/* Button for redirecting to create a page for
                insertion of values */}
            <Link className="d-grid gap-2" to='/create'>
                <Button variant="warning" size="lg">Create</Button>
            </Link>
        </div>
    )
}
  
export default Home
