import css from "./App.module.css";
import Form from "../Form/Form";
import Filter from "../Filter/Filter";
import TaskList from "../TaskList/TaskList";
import initialTasks from "../../tasks.json";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTask] = useState(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    return savedTasks || initialTasks;
  });

  const [filterEl, setFilterEl] = useState("");

  const addTask = (newTask) => {
    setTask((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTask((prevTasks) => {
      return prevTasks.filter((task) => task.id !== taskId);
    });
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(filterEl.toLocaleLowerCase())
  );

  return (
    <>
      <div className={css.container}>
        <h1>Form To Do</h1>
        <Form onAdd={addTask}></Form>
        <Filter value={filterEl} onFilter={setFilterEl}></Filter>
        <TaskList tasks={filteredTasks} onDelete={deleteTask}></TaskList>
      </div>
    </>
  );
}

export default App;
