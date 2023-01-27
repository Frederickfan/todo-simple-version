//1. add todo
//2. mod todo

import { todoApi } from "../api";

//3. del todo
export const ADD_TODO = "ADD_TODO";
export const MOD_TODO = "MOD_TODO";
export const DEL_TODO = "DEL_TODO";
export const INIT_TODO = "INIT_TODO";

export const initTodo = (dispatch) => async () => {
  try {
    const todos = await todoApi.getAllTodos();
    console.log(todos);
    dispatch({
      type: INIT_TODO,
      payload: todos,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addTodo = (dispatch) => async (content) => {
  try {
    const result = await todoApi.addTodos({
      content,
      isCompleted: false,
    });

    console.log(result);

    dispatch({
      type: ADD_TODO,
      payload: {
        content,
        isCompleted: false,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const modTodo = (dispatch) => async (index) => {
  try {
    const result = await todoApi.modTodo(index);

    console.log(result);

    dispatch({
      type: MOD_TODO,
      payload: { index },
    });
  } catch (error) {
    console.log(error);
  }
};

export const delTodo = (dispatch) => async (index) => {
  try {
    const result = await todoApi.delTodo(index);

    console.log(result);

    dispatch({
      type: DEL_TODO,
      payload: { index },
    });
  } catch (error) {
    console.log(error);
  }
};
