import { useState } from "react";
import axios from "axios";

const AddTaskDialog = ({ update, setUpdate }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/tasks/", {
        name: e.target[0].value,
        description: e.target[1].value,
      })
      .then(function (response) {
        console.log(response);
        setUpdate(update + 1);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Add new task
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <input type="text" id="taskname" placeholder="Task name" />
              <input
                type="text"
                id="taskdescription"
                placeholder="Task description"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Add task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTaskDialog;
