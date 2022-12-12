import { useState } from "react";
import Todo from "./components/Todo";

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

  return (
    <div className="App">
      {todoItems.map((item) => {
        return <Todo key={item.id} todo={item} />;
      })}
    </div>
  );
};

export default App;
