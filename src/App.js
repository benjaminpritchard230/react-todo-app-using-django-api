import "./App.css";
import { useState, useEffect } from "react";
import TaskCard from "./components/TaskCard";
import NavBar from "./components/NavBar";
import axios from "axios";
import AddTaskDialog from "./components/AddTaskDialog";

function App() {
  const [tasks, setTasks] = useState([]);
  const [update, setUpdate] = useState(0);
  // const axios = require("axios").default;
  useEffect(() => {
    axios
      .get("http://localhost:8000/tasks/")
      .then((response) => {
        console.log(response);
        setTasks(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  }, [update]);

  const taskCards = tasks.map((obj, i) => {
    return (
      <TaskCard task={obj} key={i} update={update} setUpdate={setUpdate} />
    );
  });

  return (
    <div className="App">
      <NavBar />
      <AddTaskDialog update={update} setUpdate={setUpdate} />
      <div className="container">
        <div className="row">{taskCards}</div>
      </div>
    </div>
  );
}

export default App;
