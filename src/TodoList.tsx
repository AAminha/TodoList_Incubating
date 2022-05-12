/**@jsxImportSource @emotion/react */
import React, { ChangeEvent, useState } from 'react';
import { css } from '@emotion/react';
import { TodoListItem } from './TodoListItem';


const TodoList = () => {
  // 임시로 배열에 저장하는 방식 이용
  const [todos, setTodos] = useState<Todo[]>([
    {id: 1,
    text: "first",
    date: "today",
    complete: false}
  ]);

  /* const addTodo = (event: ChangeEvent): void => {

  } */

  return(
    <div>
      <div css={css`background: aqua`}>TodoList 테스트</div>
      {todos.map((item) => <TodoListItem todo={item}/> )}
    </div>
  )
}

export default TodoList;