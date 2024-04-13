import Task from "../Task/Task";
import css from "./TaskList.module.css";

export default function TaskList({ tasks, onDelete }) {
  return (
    <>
      <ul className={css.list}>
        {tasks.map((task) => (
          <li key={task.id}>
            <Task data={task} onDelete={onDelete}></Task>
          </li>
        ))}
      </ul>
    </>
  );
}
