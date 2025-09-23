import { useState } from "react";
import "./App.css";

export default function Todo() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") {
      return;
    }
    setTasks([...tasks, { id: Date.now(), content: input, done: false }]);
    setInput("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, done: !task.done } : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleChange = (e) => setInput(e.target.value);
  const handleKeyDown = (e) => e.key === "Enter" && addTask();

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => handleChange(e)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <button onClick={addTask}>추가</button>
      <ul>
        {tasks.length === 0 && <p>한가합니다.</p>}
        {tasks.map(({ id, content, done }) => (
          <li key={id} className={done ? "done" : ""}>
            <input type="checkbox" checked={done} onChange={() => toggleTask(id)} />
            <span>{content}</span>
            <button onClick={() => deleteTask(id)}>삭제</button>
          </li>
        ))}
      </ul>
    </>
  );
}
