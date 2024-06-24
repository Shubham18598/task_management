import React, { useState } from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const [filter, setFilter] = useState("All");

  const filterTasks = (filter) => {
    switch (filter) {
      case "All":
        return tasks;
      case "Pending":
        return tasks.filter((task) => task.status === "Pending");
      case "In Progress":
        return tasks.filter((task) => task.status === "In Progress");
      case "Completed":
        return tasks.filter((task) => task.status === "Completed");
      default:
        return tasks;
    }
  };

  const filteredTasks = filterTasks(filter);

  return (
    <div className="task-list-container">
      <h2>Tasks</h2>
      <div>
        <label>
          Filter:
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">All</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </label>
      </div>
      <div className="task-section">
        <h3>Pending</h3>
        <div className="inner-task-section">
        {filteredTasks.filter((task) => task.status === "Pending").length === 0 ? (
          <p>No data in Pending</p>
        ) : (
          filteredTasks.map((task) => {
            if (task.status === "Pending") {
              return <TaskItem key={task.id} task={task} />;
            }
            return null;
          })
        )}
        </div>
      </div>
      <div className="task-section">
        <h3>In Progress</h3>
        <div className="inner-task-section">
        {filteredTasks.filter((task) => task.status === "In Progress").length === 0 ? (
          <p>No data in Progress</p>
        ) : (
          filteredTasks.map((task) => {
            if (task.status === "In Progress") {
              return <TaskItem key={task.id} task={task} />;
            }
            return null;
          })
        )}
        </div>
      </div>
      <div className="task-section">
        <h3>Completed</h3>
        <div className="inner-task-section">
        {filteredTasks.filter((task) => task.status === "Completed").length === 0 ? (
          <p>No data in Completed</p>
        ) : (
          filteredTasks.map((task) => {
            if (task.status === "Completed") {
              return <TaskItem key={task.id} task={task} />;
            }
            return null;
          })
        )}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
