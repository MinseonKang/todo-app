import { useState, useRef } from "react";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

const App = () => {
  const [todoItems, setTodoItems] = useState([
    {
      id: 1,
      title: "My Todo1",
      done: false,
    },
    {
      id: 2,
      title: "My Todo2",
      done: false,
    },
    {
      id: 3,
      title: "My Todo3",
      done: true,
    },
  ]);
  const todoId = useRef(4);

  const addItem = (newItem) => {
    // newItem - {id: xx, title: xx, done: false}
    newItem.id = todoId.current++; // key를 위한 id 설정
    newItem.done = false; // done 초기화
    // 기존 todoItems를 유지하고, 새로운 newItem을 추가
    setTodoItems([...todoItems, newItem]); // setTodoItems(todoItems.concat(newItem))
  };

  const deleteItem = (targetItem) => {
    console.log(targetItem);
    let newTodoItems = todoItems.filter((item) => item.id !== targetItem.id);
    setTodoItems(newTodoItems);
  };

  return (
    <div className="App">
      <AddTodo addItem={addItem} />
      {todoItems.map((item) => {
        // console.log(item); // {id: 1, title: 'My Todo1', done: false}
        return <Todo key={item.id} item={item} deleteItem={deleteItem} />;
      })}
    </div>
  );
};

export default App;
