import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../actions/actions";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !dueDate) {
      alert("Please fill in all fields");
      return;
    }
    dispatch(addTask({ title, description, dueDate }));
    setTitle("");
    setDescription("");
    setDueDate("");
  };

  return (
    <div className="task-form-container">
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="task-input"
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="task-input"
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="task-input"
        />
        <button type="submit" className="task-button">
          Add Task
        </button>
      </form> 
    </div>
  );
};

export default TaskForm;
