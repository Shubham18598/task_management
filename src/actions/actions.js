export const addTask = (task) => ({
    type: "ADD_TASK",
    payload: task,
  });
   
  export const deleteTask = (id) => ({
    type: "DELETE_TASK",
    payload: id,
  });
  
  export const updateTask = (task) => ({
    type: "UPDATE_TASK",
    payload: task,
  });
  
  export const updateTaskStatus = (id, status) => ({
    type: "UPDATE_TASK_STATUS",
    payload: { id, status },
  });
  