import React from "react";
import { useState } from "react";

export default function ShoppingCart() {
  const [list, setList] = useState([]);
  const total = list.reduce((a, c) => a + c.price * c.count, 0);
  const items = [
    { item: "컴퓨터", price: 120 },
    { item: "마우스", price: 2 },
    { item: "키보드", price: 4 },
  ];

  function add(item) {
    const existingItem = list.find((i) => i.item === item.item);

    if (existingItem) {
      setList(
        list.map((i) =>
          i.item === item.item ? { ...i, count: i.count + 1 } : i,
        ),
      );
    } else {
      const newItem = { ...item, id: crypto.randomUUID(), count: 1 };
      setList([...list, newItem]);
    }
  }

  function del(id) {
    setList(list.filter((item) => item.id !== id));
  }

  function minusCount(id) {
    const updatedList = list.map((i) =>
      i.id === id ? { ...i, count: i.count - 1 } : i,
    );

    const filteredList = updatedList.filter((i) => i.count > 0);

    setList(filteredList);
  }

  return (
    <>
      <div className="container">
        <ul className="item-list">
          {items.map((item) => (
            <li key={item.item}>
              <button onClick={() => add(item)}>
                {item.item} ({item.price}) +
              </button>
            </li>
          ))}
        </ul>
        <ul className="shopping-cart">
          {list.map((item) => (
            <li key={item.id}>
              {item.item} X {item.count}
              <div className="btn-wrap">
                <button onClick={() => minusCount(item.id)}>-</button>
                <button onClick={() => del(item.id)}>삭제</button>
              </div>
            </li>
          ))}
        </ul>
        <p className="total">Total : {total}만원</p>
      </div>
    </>
  );
}
