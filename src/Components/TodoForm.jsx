import { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [todoInput, setTodoInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!todoInput) return;

    addTodo((prevTodo) => [
      ...prevTodo,
      { title: todoInput, id: Date.now(), completed: false },
    ]);

    setTodoInput("");
  }

  function handleChange(event) {
    setTodoInput(event.target.value);
  }

  console.log(todoInput);

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        type="text"
        placeholder="Enter Todo"
        value={todoInput}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}
