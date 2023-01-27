import { useState } from "react";
import {useDispatch} from 'react-redux';
import { addTodo } from "../actions";

const TodoInput = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (input) => {
        if (input.trim().length === 0) {
            setInput('');
            return;
        }
        
        addTodo(dispatch)(input);
        setInput('');
    };

    return (
        <div>
            <input type='text' value={input} onChange={(e) => {setInput(e.target.value);}} />
            <button onClick={() => addTodoHandler(input)}>Add</button>
        </div>
    );
};



export default TodoInput;