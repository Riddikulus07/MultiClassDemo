import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
// import navigationData from './navigationData.json';
class BranchDetailsClient {
    city;
    area;
    numEmployees;
    manager;
    BranchDetailsClient(branch) {
      city = branch.city;
      area = branch.area;
      this.numEmployees = branch.numEmployees;
      manager = branch.manager;
    }
  }
function Update()
{
    const [id,setId] = useState(0);
    const [getBranch,setGetBranch] = useState(false);
    const handleIdchange = (event) =>
    {
        const {name , value} = event.target;
        setId(Number(value));
    }
    const branchDetails = navigationData;
    console.log(branchDetails);
    var [branch, setBranch] = useState(new BranchDetailsClient(branchDetails));
    const handleBranchChange = (event) => {
        const { name, value } = event.target;
        setBranch((prev) => {
          if (name === "BranchCity") {
            return {
              city: value,
              area: prev.area,
              numEmployees: prev.numEmployees,
              manager: prev.manager,
            };
          } else if (name === "BranchArea") {
            return {
              city: prev.city,
              area: value,
              numEmployees: prev.numEmployees,
              manager: prev.manager,
            };
          } else if (name === "BranchNumEmployees") {
            return {
              city: prev.city,
              area: prev.area,
              numEmployees: Number(value),
              manager: prev.manager,
            };
          } else if (name === "BranchManager") {
            return {
              city: prev.city,
              area: prev.area,
              numEmployees: prev.numEmployees,
              manager: value,
            };
          }
        });
      };

    const handleUpdateBranch = async (e) => 
    {
        e.preventDefault();
        try {
            const url = string
            const response = await fetch(
            "http://localhost:8100/data-provider/v1/branch/" +id,
            {
                method: "PUT",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(branch),
            }
            );
            console.log(response);
            if (response.status == 200) {
                idbranch = response.json;
                console.log(idbranch);

            // console.log("Object posted successfully");

            response.text
            showSuccess();
            } else {
            console.log("Object posting failed");
            showFailure();
            }
        } catch (error) {
            console.error("Error occurred while posting object:", error);
            showFailure();
        }
    }
        
     return (
        <div className="d-flex justify-content-center  ">
      <div className="card cardview text-center">
        <div className="card-body">
          <h3> Update the product </h3>
          <br></br>
          <div className="input-group mb-3">
            <label className="input-group-text" id="inputGroup-sizing-default">
              Branch City
            </label>
            <input
              className="form-control"
              type="text"
              name="BranchCity"
              value={branch.city}
              
              onChange={handleBranchChange}
              required
            />
          </div>

          <div className="input-group mb-3">
            <label className="input-group-text" id="inputGroup-sizing-default">
              Branch Area
            </label>
            <input
              className="form-control"
              type="text"
              name="BranchArea"
              value={branch.area}
              placeholder="Branch Area"
              onChange={handleBranchChange}
              required
            />
          </div>

          <div className="input-group mb-3">
            <label className="input-group-text" id="inputGroup-sizing-default">
              Employees
            </label>
            <input
              className="form-control"
              type="number"
              name="BranchNumEmployees"
              value={branch.numEmployees}
              placeholder="0"
              onChange={handleBranchChange}
              required
            />
          </div>
          <div className="input-group mb-3">
            <label className="input-group-text" id="inputGroup-sizing-default">
              {" "}
              Branch Manager
            </label>
            <input
              className="form-control"
              type="text"
              name="BranchManager"
              value={branch.manager}
              placeholder="Mr.Rana"
              onChange={handleBranchChange}
              required
            />
          </div>
          <br />
          <button
            className="btn btn-primary btn-dark"
            type="submit"
            onClick={handleUpdateBranch}
          >
            {" "}
            Add new Branch{" "}
          </button>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
    );
}
export default Update;