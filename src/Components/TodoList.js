import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state);

  return (
    <ul>
      {todos.map((todo, index) => {
        return (
          <TodoItem
            todo={todo}
            index={index}
            key={`${todo.todoContent}-${index}`}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
