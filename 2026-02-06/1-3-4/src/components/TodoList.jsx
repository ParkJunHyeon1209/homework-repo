import { useState } from "react";

export default function TodoList() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  function handleAdd() {
    if (inputValue.trim() === "") return;

    const newTodo = {
      content: inputValue,
      id: Date.now(),
    };

    setTodos([...todos, newTodo]);
    setInputValue("");
  }

  function handleDel(id) {
    setTodos(todos.filter((item) => item.id !== id));
  }

  return (
    <>
      <div className="container">
        <div className="to-add">
          <input
            className="inputTodo"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="button" onClick={handleAdd} className="addbtn">
            추가
          </button>
        </div>
        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.content}
              <button onClick={() => handleDel(todo.id)} className="delbtn">
                삭제
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
