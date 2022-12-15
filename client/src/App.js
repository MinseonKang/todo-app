import { useState, useRef, useEffect } from "react";
import axios from "axios";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import "./styles/App.scss";

const App = () => {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    console.log("첫 렌더링 완료!");

    const getTodos = async () => {
      let response = await axios.get("http://localhost:8888/todos");
      console.log(response.data);

      setTodoItems(response.data);
    };

    getTodos();
  }, []);

  const addItem = async (newItem) => {
    let response = await axios.post("http://localhost:8888/todo", newItem);
    console.log(response.data);

    // 기존 todoItems를 유지하고, 새로운 newItem을 추가
    setTodoItems([...todoItems, response.data]); // setTodoItems(todoItems.concat(newItem))

    // // newItem - {id: xx, title: xx, done: false}
    // newItem.id = todoId.current++; // key를 위한 id 설정
    // newItem.done = false; // done 초기화
  };

  const deleteItem = async (targetItem) => {
    // console.log(targetItem);
    await axios.delete(`http://localhost:8888/todo/${targetItem.id}`);
    let newTodoItems = todoItems.filter((item) => item.id !== targetItem.id);
    setTodoItems(newTodoItems);
  };

  return (
    <div className="App">
      <header>Todo App</header>
      <AddTodo addItem={addItem} />
      <div className="left-to">🚀 {todoItems.length} Todos</div>
      {todoItems.length > 0 ? (
        todoItems.map((item) => {
          // console.log(item); // {id: 1, title: 'My Todo1', done: false}
          return <Todo key={item.id} item={item} deleteItem={deleteItem} />;
        })
      ) : (
        <p className="empty-todos">Todo를 추가해주세요🔥</p>
      )}
    </div>
  );
};

export default App;
