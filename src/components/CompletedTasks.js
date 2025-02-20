import React from "react";

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
    <div>
      <h3>Completed Tasks</h3>
      <ul>
        {completedTasks.map((task, index) => (
          <li key={index}>
            {task.text} - Completed in {formatTime(task.duration)}
          </li>
        ))}
      </ul>
      {completedTasks.length > 0 && (
        <button onClick={sumUpTime}>Sum Up</button>
      )}
    </div>
  );
}

export default CompletedTasks;
