import { delTodo, modTodo } from "../actions";
import {useDispatch} from 'react-redux';

const TodoItem = ({todo, index}) => {
    const {content, isCompleted} = todo;
    const dispatch = useDispatch();

    return (<li>
        <span onDoubleClick={() => modTodo(dispatch)(index)} className={!isCompleted ? 'todo-regular' : 'todo-completed'}>{content}</span>
        <button onClick={() => delTodo(dispatch)(index)}>Delete</button>
    </li>);
};

export default TodoItem;