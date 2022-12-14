import axios from "axios";
import EditDialog from "./EditDialog";

const TaskCard = ({ task, update, setUpdate }) => {
  const taskUrl = `http://localhost:8000/tasks/${task.id}/`;
  const handleDeleteClick = () => {
    axios.delete(taskUrl).then(() => {
      console.log("task deleted");
      setUpdate((update = update + 1));
    });
  };
  return (
    <div>
      <div className="col-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{task.name}</h5>
            <p className="card-text">{task.description}</p>
            <button
              className="btn btn-primary"
              onClick={() => {
                handleDeleteClick();
              }}
            >
              Delete
            </button>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#editModal"
            >
              Edit
            </button>
            <p>{task.id}</p>
          </div>
        </div>
      </div>
      <EditDialog
        task={task}
        key={task.id}
        update={update}
        setUpdate={setUpdate}
      />
    </div>
  );
};

export default TaskCard;
