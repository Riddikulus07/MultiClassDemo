/* eslint-disable no-unused-vars */
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Spinner } from "react-bootstrap";

class BranchDetailsClient {
  city;
  area;
  numEmployees;
  manager;
  BranchDetailsClient() {
    city = "";
    area = "";
    this.numEmployees = 0;
    manager = "";
  }
}

function Create() {
  var [branch, setBranch] = useState(new BranchDetailsClient());
  const [waiting, setWaiting] = useState(false)

  const showSuccess = () =>
    toast.success(`Successfully created branch.`);
  const showFailure = () =>
    toast.error("Couldn't execute the create operation");

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

  const handleNewBranch = async (e) => {
    e.preventDefault();
    try {
      setWaiting(true)
      const response = await fetch(
        "http://localhost:8100/data-provider/v1/branch",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(branch),
        }
      );
      setWaiting(false)
      if (response.status == 200) {
        console.log("Object posted successfully");
        showSuccess();
      } else {
        console.log("Object posting failed");
        showFailure();
      }
    } catch (error) {
      console.error("Error occurred while posting object:", error);
      showFailure();
    }
  };

  return (
    <div className="d-flex justify-content-center  ">
      <div className="card cardview text-center">
        <div className="card-body">
          <h3> Add a new product </h3>
          <br></br>
          <div className="input-group mb-3">
            <label className="input-group-text" id="inputGroup-sizing-default">
              Branch City
            </label>
            <input
              className="form-control"
              type="text"
              name="BranchCity"
              placeholder="Branch city"
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
              type="text"
              name="BranchNumEmployees"
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
              placeholder="Mr.Rana"
              onChange={handleBranchChange}
              required
            />
          </div>
          <br />
          { 
            waiting ? 
            <Spinner data-testid = "spinner"/> :
            <button
            className="btn btn-primary btn-dark"
            type="submit"
            onClick={handleNewBranch}
          >
            {" "}
            Add new Branch{" "}
          </button>
          }
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
export default Create;
