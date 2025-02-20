import React, { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Timer from "./components/Timer";
import CompletedTasks from "./components/CompletedTasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [timers, setTimers] = useState({});
  
  return (
    <div>
      <h1>Task Manager</h1>
      <TaskInput setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} setTimers={setTimers} setCompletedTasks={setCompletedTasks} timers={timers} />
      <Timer timers={timers} tasks={tasks} />
      <CompletedTasks completedTasks={completedTasks} />
    </div>
  );
}

export default App;
