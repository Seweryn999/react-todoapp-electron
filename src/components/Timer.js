import React, { useEffect, useState } from "react";

function Timer({ timers, tasks }) {
  const [timeElapsed, setTimeElapsed] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeElapsed((prev) => {
        const updatedTimers = {};
        Object.keys(timers).forEach((index) => {
          updatedTimers[index] = Math.floor((Date.now() - timers[index]) / 1000);
        });
        return updatedTimers;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [timers]);

  return (
    <div>
      <h3>Timer</h3>
      <ul>
        {Object.keys(timers).map((index) => (
          <li key={index}>
            Task: {tasks[index]?.text} - Time: {timeElapsed[index] || 0}s
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Timer;
