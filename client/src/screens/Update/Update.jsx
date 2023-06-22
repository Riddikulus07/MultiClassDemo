import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
class BranchDetailsClient 
{
    id;
    city;
    area;
    numemployees;
    manager;
    // BranchDetailsClient()
    // {
    //     city = '';
    //     area ='';
    //     this.numemployees = 0;
    //     manager = '';
    // }
}
function Update()
{
    const [id,setId] = useState(0);
    const handleIdchange = (event) =>
    {
        const {name , value} = event.target;
        setId(Number(value));
    }
    <div>
        <div className="input-group mb-3">
        <label className="input-group-text" id="inputGroup-sizing-default"> Enter Branch Id</label>
        <input className="form-control" type = 'Number' name = 'id' value = {id}  placeholder= 'Branch Id' onChange =  {handleIdchange}required/> 
        </div>
        <button className = 'btn btn-primary btn-dark'  type = 'submit' onClick = {handleNewBranch}> Add new Branch </button></div>
    </div>
}
export default Update;