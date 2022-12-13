import { useState, useRef } from "react";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";

const App = () => {
  const [todoItems, setTodoItems] = useState([
    {
      id: 1,
      title: "My todo1",
      done: false,
    },
    { id: 2, title: "My todo2", done: false },
    { id: 3, title: "My todo3", done: true },
  ]);
  const todoId = useRef(4);

  const addItem = (newItem) => {
    newItem.id = todoId.current++; // key를 위한 id 설정
    newItem.done = false; // done 초기화

    // 기존 todoItems를 유지하고, 새로운 newItem을 추가
    setTodoItems([...todoItems, newItem]);
  };

  return (
    <div className="App">
      <AddTodo addItem={addItem} />
      {todoItems.map((item) => {
        return <Todo key={item.id} todo={item} />;
      })}
    </div>
  );
};

export default App;
