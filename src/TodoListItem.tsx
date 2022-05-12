/**@jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

interface TodoListItemProps {
  todo: Todo;
}

export const TodoListItem = ({todo}: TodoListItemProps) => {
  return(
    <div css={css`background: gray`}>
      <label className={todo.complete ? "complete" : undefined}>
        <input id="item" type="checkbox" checked={todo.complete}/>
        {todo.text}
      </label>
    </div>
  )
}

// label 태그 : 폼의 양식에 이름 붙이는 태그