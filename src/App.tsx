/**@jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import DateList from './DateList';
import TodoList from './TodoList';




/* const App: React.FC = () => {
  return (
    <ul>
      <React.Fragment>
        <TodoListItem todo={todos[0]}/>
        <TodoListItem todo={todos[1]}/>
      </React.Fragment>
    </ul>
  )
} */

const App = () => {

  return (
    <div css={css`background: skyblue`}>
      <TodoList/>
      <DateList/>
    </div>
  )
}

export default App;
