import "./App.css";
import TodoHeader from "./Components/TodoHeader";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
import {useDispatch} from 'react-redux';
import { initTodo } from "./actions";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    initTodo(dispatch)();
  }, [dispatch]);

  return (<div>
    <TodoHeader todoHeaderContent={'Todo App'}/>
    <TodoInput/>
    <TodoList></TodoList>
  </div>);
}
export default App;
