import React, { useState } from 'react';

interface Todo {
  id: number;
  task: string;
}

const TodoList: React.FC = () => {
  // State to hold the list of tasks
  const [todos, setTodos] = useState<Todo[]>([]);
  // State to hold the new task input
  const [newTask, setNewTask] = useState<string>('');

  // Handle input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  // Handle form submit (Add new task)
  const handleAddTask = (event: React.FormEvent) => {
    event.preventDefault();
    if (newTask.trim()) {
      const newTodo: Todo = {
        id: Date.now(), // Unique id based on timestamp
        task: newTask,
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setNewTask(''); // Clear the input after adding the task
    }
  };

  // Handle task removal
  const handleRemoveTask = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Enter a new task"
        />
        <button type="submit">Add Task</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task}
            <button onClick={() => handleRemoveTask(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
