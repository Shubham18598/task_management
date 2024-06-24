import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { updateTask } from "../actions/actions"

const TaskEditForm = ({ task, setEditing }) => {
  const [title, setTitle] = useState(task.title)
  const [description, setDescription] = useState(task.description)
  const [dueDate, setDueDate] = useState(task.dueDate)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(updateTask({ ...task, title, description, dueDate }))
    setEditing(false)
  }

  return (
    <div className="task-edit-form-container">
      <h2 className="task-edit-form-title">Edit Task</h2>
      <form onSubmit={handleSubmit} className="task-edit-form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="task-edit-input"
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="task-edit-input"
        /> 
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="task-edit-input"
        />
        <div className="task-edit-buttons">
          <button type="submit" className="task-edit-button">
            Update Task
          </button>
          <button
            type="button"
            onClick={() => setEditing(false)}
            className="task-edit-button task-edit-button-cancel"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default TaskEditForm
