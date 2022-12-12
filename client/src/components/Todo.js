const Todo = ({ todo }) => {
  console.log(todo);
  return (
    <div className="Todo">
      <input
        type="checkbox"
        name="todo"
        id={todo.id}
        value="todo"
        defaultChecked={todo.done}
      />
      <label htmlFor={todo.id}>{todo.title}</label>
    </div>
  );
};

export default Todo;
