import { useState } from 'react';
import './App.css';


function App() {


  const [task, setTask] = useState("")
  const [list, setList] = useState([])
  const handleChange = (event) => {
    setTask(event.target.value)
  }
  const addTask = () => {
    const newTask = {
      id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
      taskName: task,
    }
    setList([...list, newTask])
  }
  const deleteTask = (id) => {
    setList(list.filter((task) => task !== id))
  }

  return (
    <div className="App">
      <div className="addTask">
        <input type="text" onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div>
        {list.map((task) => {
          return (
            <>
              <button onClick={() => deleteTask(task)}>x</button>
              <h3>{task}</h3>
            </>
          )
        })}
      </div>
    </div>

  );
}




export default App;
