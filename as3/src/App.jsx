import { useState, useEffect } from 'react'
import Task from './components/Task'

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null); 

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handle =() => {
    if(editMode && editIndex != null){
      const taskCopy = [...tasks];
      taskCopy[editIndex] = inputValue; 
      setTasks(taskCopy);
      setEditMode(false); 
      setEditIndex(null);
    }else {
      let taskCopy = [...tasks];
      taskCopy.push(inputValue);
      setTasks(taskCopy);
    }
    setInputValue('');
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const deleteTask = (index) => {
    let taskCopy = [...tasks]; 
    taskCopy.splice(index, 1);
    setTasks(taskCopy);
  }

  const editTask = (index) => {
    setEditIndex(index);
    setEditMode(true);
  }

  return (
    <div>
      <h1>Assignment 3</h1>
      <input
        type="text"
        placeholder='Task name'
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handle}>{editMode ? 'Edit' : 'Add'}</button>
      <Task tasks={tasks} onDelete={deleteTask} onEdit={editTask}></Task>
    </div>
  )
}

export default App;
