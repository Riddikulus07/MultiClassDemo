/* eslint-disable no-unused-vars */
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

class BranchDetailsClient 
{
    city;
    area;
    numemployees;
    manager;
    BranchDetailsClient()
    {
        city = '';
        area ='';
        this.numemployees = 0;
        manager = '';
    }
}



function Create()
{
    var [branch,setBranch] = useState(new BranchDetailsClient());
    
    const handleBranchChange = (event) =>
    {
        console.log(branch);
    const {name,value} = event.target;
    
    setBranch (prev =>
    {
        
        if(name === 'BranchCity')
        {
            return {
                city : value,
                area : prev.area,
                numemployees : prev.numemployees,
                manager : prev.manager
            }
        }
        else if(name === 'BranchArea')
        {
            return {
                city : prev.city,
                area : value,
                numemployees : prev.numemployees,
                manager : prev.manager
            }
        }
        else if(name === 'BranchNumEmployees')
        {
            return {
                city : prev.city,
                area : prev.area,
                numemployees : value,
                manager : prev.manager
            }
        }
        else if(name === 'BranchManager')
        {
            return {
                city : prev.city,
                area : prev.area,
                numemployees : prev.numemployees,
                manager : value
            }
        }
    });
    }
    const handleNewBranch=  async (e) => {
            e.preventDefault();
            
            try {
              const response = await fetch('http://localhost:8100/data-provider/v1/branch', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(branch),
              });
              if (response.ok) {
                console.log('Object posted successfully');
              } else {
                console.log('Object posting failed');
                console.log(response);
              }
            } catch (error) {
              console.error('Error occurred while posting object:', error);
            }
          };
    return (
        <div className='d-flex justify-content-center  ' >
        <div className = 'card cardview text-center' > 
       <div className='card-body'>
        <h3> Add a new product </h3>
        <br></br>
        <div className="input-group mb-3">
        <label className="input-group-text" id="inputGroup-sizing-default">Branch City</label>
        <input className="form-control" type = 'text' name = 'BranchCity' value = {branch.city}  placeholder= 'Branch city' onChange =  {handleBranchChange}required/> 
        </div>

        <div className="input-group mb-3">
        <label className="input-group-text" id="inputGroup-sizing-default">Branch Area</label>
        <input className="form-control" type = 'text' name = 'BranchArea' value = {branch.area}  placeholder= 'Branch Area' onChange =  {handleBranchChange}required/> 
        </div>

        <div className="input-group mb-3">
        <label className="input-group-text" id="inputGroup-sizing-default">Employees</label>
        <input className="form-control" type = 'number' name = 'BranchNumEmployees' value = {branch.numemployees}  placeholder= '0' onChange =  {handleBranchChange}required/> 
        </div>
        <div className="input-group mb-3">
        <label className="input-group-text" id="inputGroup-sizing-default"> Branch Manager</label>
        <input className="form-control" type = 'text' name = 'BranchManager' value = {branch.manager}  placeholder= 'Mr.Rana' onChange =  {handleBranchChange}required/> 
        </div>
        <br/>
        <button className = 'btn btn-primary btn-dark'  type = 'submit' onClick = {handleNewBranch}> Add new Branch </button></div>
        </div>
        </div>
    );
}
export default Create;
