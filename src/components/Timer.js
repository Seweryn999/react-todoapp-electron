import React, { useEffect, useState } from "react";
import "../styles/Timer.css";

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
    <div className="timer-container">
      <h3 className="timer-header">TIME FOR TASK #{}</h3>
      <div className="timer-display">
        <ul>
          {Object.keys(timers).map((index) => (
            <li key={index}>
              Task: {tasks[index]?.text} - Time: {timeElapsed[index] || 0}s
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Timer;
