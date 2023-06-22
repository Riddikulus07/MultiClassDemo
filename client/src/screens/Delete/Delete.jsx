import "./Delete.scss";
import Header from "../../components/Header/Header";
import { useState } from "react";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Spinner } from "react-bootstrap";

const Delete = () => {
  const [id, setId] = useState("");
  const [waiting, setWaiting] = useState(false);

  const showSuccess = () =>
    toast.success(`Successfully deleted branch with id = ${id}.`);
  const showFailure = () =>
    toast.error("Couldn't execute the delete operation");

  const deleteById = () => {
    setWaiting(true);
    axios
      .delete(`http://localhost:8100/data-provider/v1/branch/${id}`)
      .then((response) => {
        if (response.status == 200) {
          showSuccess();
        } else {
          showFailure();
        }
        setWaiting(false);
      })
      .catch((e) => {
        showFailure();
        setWaiting(false);
      });
  };

  return (
    <div className="Delete">
      <Header
        title="Delete"
        description="Use retrieve to fetch the id of the branch you wish to delete and enter it here"
      />
      <div className="deleteinp d-flex flex-row justify-content-center">
        <input
          type="text"
          className="form-control shadow-none"
          placeholder="id"
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        {waiting ? (
          <Spinner />
        ) : (
          <button className="btn btn-dark" onClick={deleteById}>
            Delete
          </button>
        )}
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
};

export default Delete;
