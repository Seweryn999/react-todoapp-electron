import React, { useState } from "react";
import "../styles/TaskInput.css";

function TaskInput({ setTasks }) {
  const [task, setTask] = useState("");
  const [updateTrigger, setUpdateTrigger] = useState(0);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks((prev) => [...prev, { text: task }]);
    setTask("");
    setUpdateTrigger((prev) => prev + 1);
  };

  return (
    <div className="task-input">
      <input
        key={updateTrigger}
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task..."
        className="task-input-field"
      />
      <button className="add-task-button" onClick={addTask}>Add Task</button>
    </div>
  );
}

export default TaskInput;
