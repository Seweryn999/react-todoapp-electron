import React from "react";
import "../styles/CompletedTasks.css";

function formatTime(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;

  return `${h > 0 ? h + "h " : ""}${m > 0 ? m + "m " : ""}${s}s`;
}

function CompletedTasks({ completedTasks }) {
  const sumUpTime = () => {
    const totalTime = completedTasks.reduce((sum, task) => sum + task.duration, 0);
    alert(`Total time spent on tasks: ${formatTime(totalTime)}`);
  };

  return (
    <div className="completed-tasks">
      <h3 className="section-header">DONE</h3>
      <ul>
        {completedTasks.map((task, index) => (
          <li key={index} className="task-item">
            {task.text} - Completed in {formatTime(task.duration)}
          </li>
        ))}
      </ul>
      {completedTasks.length > 0 && (
        <button className="sum-button" onClick={sumUpTime}>Sum Up</button>
      )}
    </div>
  );
}

export default CompletedTasks;
