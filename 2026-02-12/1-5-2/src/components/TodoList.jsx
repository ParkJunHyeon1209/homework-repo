import { useReducer, useState } from "react";

const todosReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        { id: crypto.randomUUID(), text: action.payload, done: false },
      ];

    case "TOGGLE":
      return (state = state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo,
      ));

    case "DELETE":
      return (state = state.filter((todo) => todo.id !== action.payload));

    default:
      return state;
  }
};

export default function TodoList() {
  const [inputValue, setInputValue] = useState("");
  const [todosState, dispatch] = useReducer(todosReducer, []);

  function handleDispatch(type, payload) {
    if (type === "ADD") {
      if (!inputValue.trim()) return;
      setInputValue("");
    }

    dispatch({ type, payload });
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
          <button
            type="button"
            onClick={() => handleDispatch("ADD", inputValue, false)}
            className="addbtn"
          >
            추가
          </button>
        </div>
        <ul className="todo-list">
          {todosState.map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                value={todo.done}
                checked={todo.done}
                onChange={() => handleDispatch("TOGGLE", todo.id)}
              />
              {todo.text}
              <button
                onClick={() => handleDispatch("DELETE", todo.id)}
                className="delbtn"
              >
                삭제
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
