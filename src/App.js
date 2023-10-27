import './App.css';
import {useState} from 'react';
import {Task} from './Task';

export default function App() {
    const [toDoList, setToDoList] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleChange = (event) => {
        setNewTask(event.target.value);
    }

    const addTask = () => {
        const task = {
            id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
            taskName: newTask,
            completed: false,
        };
        setToDoList(task.taskName !== "" ? [...toDoList, task] : toDoList);
    };

    const completeTask = (id) => {
        setToDoList(
            toDoList.map((task) => {
                if (task.id === id) {
                    return { ...task, completed: true };
                } else {
                    return task;
                }
            })
        );
    }

    const delTask = (id) => {
        setToDoList(toDoList.filter((task) => task.id !== id));
    }

  return (
    <div className="App">
        <div className="input-bar-container">
            <input className='input-bar' onChange={handleChange}/>
            <button className='submit' onClick={addTask}>Add Task</button>
        </div>

        <div className="to-do-list-container">
            {toDoList.map((task) => {
                return <Task
                    taskName={task.taskName}
                    id={task.id}
                    completed={task.completed}
                    completeTask={completeTask}
                    delTask={delTask}
                />;
            })}
        </div>
    </div>
  );
}


