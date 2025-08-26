import React, { useState } from 'react';

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    const trimmedInput = input.trim();
    if (trimmedInput !== "") {
      setTasks([...tasks, { text: trimmedInput, completed: false }]);
      setInput("");
    }
  };

  const handleToggle = (index) => {
    const updatedTasks = tasks.map((task, idx) =>
      idx === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, idx) => idx !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '2rem auto' }}>
      <h1>Todo App</h1>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task"
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '0.5rem',
            }}
          >
            <span
              onClick={() => handleToggle(index)}
              style={{
                cursor: 'pointer',
                textDecoration: task.completed ? 'line-through' : 'none',
              }}
            >
              {task.text}
            </span>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
