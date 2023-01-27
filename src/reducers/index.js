import {ADD_TODO, MOD_TODO, DEL_TODO, INIT_TODO} from "../actions/index";

// put all todos into redux store 
export const reducer = (state = [], {type, payload}) => {
    switch (type) {
        case INIT_TODO: 
            console.log(`database data: ${payload}`);
            return [...payload];
        case ADD_TODO: 
            return [...state, {...payload}] 
        case MOD_TODO: 
            return state.map((todo, index) => {
                if (index !== payload.index) {
                    return todo; 
                }

                return {
                    ...todo, 
                    isCompleted: !todo.isCompleted,
                };
            });
        case DEL_TODO: 
            return [...state.slice(0, payload.index), ...state.slice(payload.index + 1)]
        default: 
            return state;
    }

}