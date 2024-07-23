import { useState } from "react";
import "./App.css";
import { FaTrash } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";

export default function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([
    { id: 1, item: "Bu projeyi tamamla." },
    { id: 2, item: "Diğer Projeye Geç" },
  ]);
  const [edit, setEdit] = useState(false);

  const itemEkle = () => {
    if (inputValue.trim() !== "") {
      const newTodo = {
        id: todoList.length + 1,
        item: inputValue,
      };
      setTodoList([...todoList, newTodo]);
      setInputValue("");
    }
  };

  const sil = (aydi) => {
    setTodoList(todoList.filter((todo) => todo.id !== aydi));
  };

  return (
    <>
      <div>
        <h1>Todo</h1>
      </div>
      <div className="add">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={itemEkle}>Ekle</button>
        <div>Değer: {inputValue}</div>
      </div>

      <div className="list">
        {todoList.map((eleman) => (
          <div key={eleman.id} className="todo-item">
            <div className="items">{eleman.item}</div>
            <MdModeEdit
              className="icon edit-icon"
              onClick={() => alert("basıldı")}
            />
            <FaTrash
              className="icon delete-icon"
              onClick={() => sil(eleman.id)}
            />
          </div>
        ))}
      </div>
    </>
  );
}
