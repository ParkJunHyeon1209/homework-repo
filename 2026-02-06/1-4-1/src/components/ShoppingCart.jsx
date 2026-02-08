import { useState } from "react";

export default function ShoppingCart() {
  const [list, setList] = useState([]);
  const total = list.reduce((a, c) => a + c.price, 0);

  function addcomputer() {
    const item = {
      id: Date.now(),
      item: "컴퓨터",
      price: 120,
    };
    setList([...list, item]);
  }

  function addmouse() {
    const item = {
      id: Date.now(),
      item: "마우스",
      price: 2,
    };
    setList([...list, item]);
  }

  function addkeyboard() {
    const item = {
      id: Date.now(),
      item: "키보드",
      price: 4,
    };
    setList([...list, item]);
  }

  function del(id) {
    setList(list.filter((item) => item.id != id));
  }

  return (
    <>
      <div className="container">
        <ul className="item-list">
          <li>
            <button onClick={addcomputer}>컴퓨터 (120 +)</button>
          </li>
          <li>
            <button onClick={addmouse}>마우스 (2 +)</button>
          </li>
          <li>
            <button onClick={addkeyboard}>키보드 (4 +)</button>
          </li>
        </ul>
        <ul className="shopping-cart">
          {list.map((item) => {
            return (
              <li key={item.id}>
                {item.item}
                <button onClick={() => del(item.id)}>delete</button>
              </li>
            );
          })}
        </ul>
        <p className="total">Total : {total}만원</p>
      </div>
    </>
  );
}
