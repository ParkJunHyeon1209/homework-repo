import { useReducer } from "react";

const todosReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: crypto.randomUUID(), text: action.payload, done: false },
        ],
        input: "",
      };

    case "TOGGLE":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, done: !todo.done } : todo,
        ),
      };

    case "DELETE":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case "INPUT":
      return { ...state, input: action.payload };

    default:
      return state;
  }
};

export default function TodoList() {
  const [todosState, dispatch] = useReducer(todosReducer, {
    todos: [],
    input: "",
  });

  function handleADD(type, payload) {
    payload.trim() ? dispatch({ type, payload }) : alert("내용을 입력하세요");
  }

  function handleDispatch(type, payload) {
    dispatch({ type, payload });
  }

  return (
    <>
      <div className="container">
        <div className="to-add">
          <input
            className="inputTodo"
            type="text"
            value={todosState.input}
            onChange={(e) =>
              dispatch({ type: "INPUT", payload: e.target.value })
            }
          />
          <button
            type="button"
            onClick={() => handleADD("ADD", todosState.input)}
            className="addbtn"
          >
            추가
          </button>
        </div>
        <ul className="todo-list">
          {todosState.todos.map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
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
