import { Provider } from "react-redux"
import "./App.css"
import store from "./store/store.js"
import TaskForm from "./components/TaskForm.js"
import TaskList from "./components/TaskList.js"
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TaskForm />
        <TaskList />
      </div>
    </Provider>
  )
}

export default App
