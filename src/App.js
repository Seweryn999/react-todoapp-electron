import React, { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Timer from "./components/Timer";
import CompletedTasks from "./components/CompletedTasks";
import "../src/styles/App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [timers, setTimers] = useState({});

  return (
    <div className="app-container">
      <h1 className="header">Task Manager</h1>
      <TaskInput setTasks={setTasks} />
      <div className="task-board">
        <TaskList
          tasks={tasks}
          setTasks={setTasks}
          setTimers={setTimers}
          setCompletedTasks={setCompletedTasks}
          timers={timers}
        />
        <Timer timers={timers} tasks={tasks} />
        <CompletedTasks completedTasks={completedTasks} />
      </div>
    </div>
  );
}

export default App;
