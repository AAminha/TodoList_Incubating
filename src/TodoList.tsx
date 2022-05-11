import React from 'react';
import { TodoListItem } from './TodoListItem';

const todos: Array<Todo> = [ // todos의 타입을 정해야 한다. => types.ts 파일생성
  {text: "First todo", complete: true},
  {text: "Second todo", complete: false},
  {text: "third todo", complete: true},
  {text: "forth todo", complete: true}
];

const TodoList = () => {
  return(
    <div>
      <div>TodoList 테스트</div>
      <div>
        <TodoListItem todo={todos[0]}/>
        <TodoListItem todo={todos[1]}/>
        <TodoListItem todo={todos[2]}/>
        <TodoListItem todo={todos[3]}/>
      </div>
    </div>
  )
}

export default TodoList;