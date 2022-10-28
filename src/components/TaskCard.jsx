import axios from "axios";

const TaskCard = ({ task }) => {
  const taskUrl = `http://localhost:8000/tasks/${task.id}/`;
  const handleDeleteClick = () => {
    axios.delete(taskUrl).then(() => {
      console.log("task deleted");
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
