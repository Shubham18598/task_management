import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, updateTaskStatus } from "../actions/actions";
import TaskEditForm from "./TaskEditForm";

const TaskItem = ({ task }) => {
  const [editing, setEditing] = useState(false);
  const dispatch = useDispatch();

  const handleStatusChange = (newStatus) => {
    dispatch(updateTaskStatus(task.id, newStatus));
  };

  return (
    <div className="task-item-container">
      {editing ? (
        <TaskEditForm task={task} setEditing={setEditing} />
      ) : (
        <div> 
          <p>Title: {task.title}</p>
          <p>Description: {task.description}</p>
          <p>Due Date: {task.dueDate}</p>
          <p>Status: {task.status}</p>

          {task.status !== "Completed" && task.status !== "Pending" && (
            <button
              onClick={() => handleStatusChange("Completed")}
              className="task-button"
            >
              Complete
            </button>
          )}

          {task.status !== "Pending" && (
            <button
              onClick={() => handleStatusChange("Pending")}
              className="task-button"
            >
              Mark Pending
            </button>
          )}

          {task.status !== "In Progress" && (
            <button
              onClick={() => handleStatusChange("In Progress")}
              className="task-button"
            >
              Start Progress
            </button>
          )}

          <button onClick={() => setEditing(true)} className="task-button">
            Edit
          </button>

          <button
            onClick={() => dispatch(deleteTask(task.id))}
            className="task-button"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
