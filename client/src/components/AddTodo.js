import { useState } from "react";
import "../styles/AddTodo.scss";

const AddTodo = ({ addItem }) => {
  const [todoItem, setTodoItem] = useState({
    title: "",
  });

  const onButtonClick = () => {
    // props로 받아온 addItem 함수 실행
    addItem(todoItem);
    setTodoItem({
      title: "",
    });
  };

  const onEnterKeyPress = (e) => {
    if (e.key === "Enter") {
      onButtonClick();
    }
  };

  return (
    <div className="AddTodo">
      <input
        type="text"
        placeholder="Add your new Todo"
        onChange={(e) => setTodoItem({ title: e.target.value })}
        value={todoItem.title}
        onKeyPress={onEnterKeyPress}
      />
      <button onClick={onButtonClick}>ADD</button>
    </div>
  );
};

export default AddTodo;
