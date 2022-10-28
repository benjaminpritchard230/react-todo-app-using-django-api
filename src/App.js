import "./App.css";
import { useState, useEffect } from "react";
import TaskCard from "./components/TaskCard";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
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
  }, []);

  const taskCards = tasks.map((obj, i) => {
    return <TaskCard task={obj} key={i} />;
  });

  return (
    <div className="App">
      <div className="container">
        <div className="row">{taskCards}</div>
      </div>
    </div>
  );
}

export default App;
