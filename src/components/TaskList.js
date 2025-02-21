import React from "react";
import "../styles/TaskList.css";

function TaskList({ tasks, setTasks, setTimers, setCompletedTasks, timers }) {
  const startTask = (index) => {
    if (!timers[index]) {
      setTimers((prev) => ({ ...prev, [index]: Date.now() }));
    }
  };

  const completeTask = (index) => {
    const endTime = Date.now();
    const startTime = timers[index] || endTime;
    const duration = Math.floor((endTime - startTime) / 1000);

    setCompletedTasks((prev) => [...prev, { text: tasks[index].text, duration }]);
    setTasks((prev) => prev.filter((_, i) => i !== index));

    setTimers((prev) => {
      const newTimers = { ...prev };
      delete newTimers[index];
      return newTimers;
    });
  };

  return (
    <div className="task-list">
      <h3 className="section-header">TO DO</h3>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            {task.text}
            <button className="start-button" onClick={() => startTask(index)}>Start</button>
            <button className="done-button" onClick={() => completeTask(index)}>Done</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
