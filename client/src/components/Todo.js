import { useState } from "react";
import "../styles/Todo.scss";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Todo = ({ item, deleteItem }) => {
  // console.log(item); // { id: 1, title: 'todo1', done: false, }
  const { id, title, done } = item;
  const [todoItem, setTodoItem] = useState(item);
  const [readOnly, setReadOnly] = useState(true);

  const onDeleteBtnClick = () => {
    deleteItem(todoItem);
  };

  const editEventHandler = (e) => {
    const { title, ...rest } = todoItem;
    setTodoItem({
      title: e.target.value,
      ...rest,
      // id: todoItem.id,
      // done: todoItem.done,
    });
  };

  // title input 클릭 시 readOnly state를 false로 변경 (수정할 것)
  const offReadOnly = () => {
    setReadOnly(false);
  };

  // title input에서 enter키 입력시 readOnly state를 true로 변경 (수정 완료)
  const onEnterKeyPress = (e) => {
    if (e.key === "Enter") {
      setReadOnly(true);
    }
  };

  // checkbox 업데이트
  // done: true -> false, fasle, -> true
  const checkboxEventHandler = (e) => {
    // rest: id, title 정보
    const { done, ...rest } = todoItem; // { id: 1, title: 'todo1', done: false, }
    setTodoItem({
      done: e.target.checked,
      ...rest,
    });
  };

  return (
    <div className="Todo">
      <input
        type="checkbox"
        id={`todo${id}`}
        name={`todo${id}`}
        value={`todo${id}`}
        defaultChecked={done}
        onChange={checkboxEventHandler}
      />
      {/* <label htmlFor={`todo${id}`}>{title}</label> */}
      <input
        type="text"
        value={todoItem.title}
        onChange={editEventHandler}
        onClick={offReadOnly}
        onKeyPress={onEnterKeyPress}
        readOnly={readOnly}
      />
      <button onClick={onDeleteBtnClick}>
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
    </div>
  );
};

export default Todo;
