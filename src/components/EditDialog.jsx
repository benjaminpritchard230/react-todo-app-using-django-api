import axios from "axios";

const EditDialog = ({ task, update, setUpdate }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/tasks/${task.id}/`, {
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
      id="editModal"
      tabindex="-1"
      aria-labelledby="editModal"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="editModal">
              Edit task {task.id}
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
              <input type="text" id="taskname" placeholder={task.name} />
              <input
                type="text"
                id="taskdescription"
                placeholder={task.description}
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
                data-bs-target="#editModal"
              >
                Edit task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditDialog;
