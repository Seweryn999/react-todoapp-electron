import React, { useState } from "react";

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
    <div>
      <input
        key={updateTrigger} 
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task..."
      />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
}

export default TaskInput;
