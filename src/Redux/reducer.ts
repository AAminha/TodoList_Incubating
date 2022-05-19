/* // https://devlog-h.tistory.com/33


// 실질적으로 Action들이 어떤 기능을 하는지 구현하는 파일
import {TodoAction, Todo} from './types';
import {createReducer} from 'typesafe-actions';
import {ADD, REMOVE, UPDATE, SELECT} from "./actions";
import produce from "immer";

const initialState: Initial = {
  day: 3,
  todo: []
}

const todo = createReducer<Initial, TodoAction>(initialState, {
  [ADD] : (state, action) => ({
    ...state,
    todo: [...state.todo, action.payload],
  }),

  [REMOVE] : (state, action) => ({
    ...state,
    todo: state.todo.filter(
      (todo: { id: number }) => todo.id !== action.payload
    ),
  }),

  [UPDATE] : (state, action) => ({
    ...state,
    todo: state.todo.map((todo) => 
      todo.id === action.payload.id ? {...todo, text: action.payload.text } : todo
    )
  }),

  [SELECT] : (state, action) => ({
    ...state,
    state: action.payload
  })
})

export default todo; */

import { TodoAction, TodoItem } from "./types";
import {createReducer} from "typesafe-actions";
import {ADD, REMOVE, UPDATE, CHECK, SELECT} from "./actions";
import produce from "immer";

const initialState : TodoItem = {
  todo : [],
  day : 3
};

const todo = createReducer<TodoItem, TodoAction>(initialState, {
  [ADD] : (state, action) => ({
    ...state,
    todo: [...state.todo, action.payload.todo],
  }),

  [REMOVE] : (state, action) => ({
    ...state,
    todo: state.todo.filter(
      (todo: { id: number }) => todo.id !== action.payload.id
    ),
  }),

  [UPDATE] : (state, action) => ({
    ...state,
    todo: state.todo.map((todo) => 
      todo.id === action.payload.id ? {...todo, text: action.payload.text } : todo
    )
  }),

  [CHECK] : (state, action) => ({
    ...state,
    todo: state.todo.map((todo) =>
      todo.id === action.payload.id ? {...todo, complete: !(todo.complete)} : todo
    )
  }),

  [SELECT] : (state, action) => ({
    ...state,
    day: action.payload.day
  })

})

export default todo;