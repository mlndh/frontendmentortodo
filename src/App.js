import React, { useState } from "react";
import FilterBtn from './components/FilterBtn'
import Input from './components/Input'
import Todo from './components/Todo'
import { GlobalStyles } from './components/GlobalStyles';

const filterObject = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed
};
// Loop 
const filterName = Object.keys(filterObject);

function App(props) {
// Starter todo  
  const data = [
    ]
// State hooks 
  const [tasks, setTasks] = useState(data);
  const [filter, setFilter] = useState('All');
  const [isActive, setActive] = useState("false");
// List of todos
  const taskList = tasks
  .filter(filterObject[filter])
  .map((task, index) => (
    <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        deleteTask={deleteTask}
        taskComplete={taskComplete}
      />
    )
  );

  const filterList = filterName.map(name => (
    <FilterBtn 
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));
// Toggle darkmode
const handleToggle = () => {
  setActive(!isActive);
}; 

// Add task
  function addTask(name, id) {
    const newTask = { id: id, name: name, completed: false };
    setTasks([...tasks, newTask]);
    console.log(id)
  }
// Delete task
  function deleteTask(id) {
    const tasksLeft = tasks.filter(tasks => id !== tasks.id);
    setTasks(tasksLeft)
  }
// Get uncompleted tasks  
  function taskComplete(id, name) {
    const completed = tasks.map(tasks => {
      if(id === tasks.id) {
        return {...tasks, completed: !tasks.completed}
      }
      return tasks
    });
    setTasks(completed)
  }
// Clear completed tasks
function deleteCompletedMissions() {
    const tasksLeft = tasks.filter(tasks => !tasks.completed);
    setTasks(tasksLeft)
}  

  return (
    <React.Fragment>
    <div className={isActive ? "dark-theme" : "light-theme"}>
        <GlobalStyles />
            <header className="flex space-e">
            <h1> TO DO </h1>
              <button className="toggleBtn" onClick={handleToggle}></button>
              </header>
              <div className="container-center">
              <aside className="flex center-vertical">
                <Input addTask={addTask} />
                </aside>
                <main className="">
                  {taskList}
                </main>
                <section className="flex center-vertical space-a"> 
                  <p>{taskList.length} todos left</p>
                  {filterList}
                  <button onClick={deleteCompletedMissions}> Clear completed</button>
                </section>  
                </div>            
                  </div>
    </React.Fragment>
  );
}

export default App;
