import React from 'react';
import './App.css';
import { TodoListItem } from './TodoListItem';

const todos: Array<Todo> = [ // todos의 타입을 정해야 한다. => types.ts 파일생성
  {text: "밥 먹기", complete: true},
  {text: "옷 입기", complete: false}
];

const App: React.FC = () => {
  return (
    <ul>
      <React.Fragment>
        <TodoListItem todo={todos[0]}/>
        <TodoListItem todo={todos[1]}/>
      </React.Fragment>
    </ul>
  )
}

/* function App() {
  return (
    <div>Hello!!!!</div>
  );
} */

export default App;
