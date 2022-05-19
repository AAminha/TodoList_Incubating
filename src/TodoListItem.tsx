/**@jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { BsTrash } from "react-icons/bs";
import { BsPencil } from "react-icons/bs";

interface TodoListItemProps {
  todo: Todo;
}

export const TodoListItem = ({todo}: TodoListItemProps) => {
  const item:string = `${todo.id}. ${todo.text}`;

  return(
    <div css={css`background: gray`}>
      <label css={container}>
        <div css={todo.complete ? completedItem : incompleteItem}>
          {`${todo.id}. ${todo.text}`}
        </div>
        <BsPencil />
        <BsTrash />
      </label>
    </div>
  )
}

const container = css`
  display: flex;
  flex-direction: row;
  opacity: 0.2;
  &:hover {
    opacity: 1.0;
    color: red;
  }
`

const completedItem = css`
  width: 250px;
  background-color: Antiquewhite;
  text-decoration: line-through;
`

const incompleteItem = css`
  width: 250px;
  background-color: Burlywood;
`

// label 태그 : 폼의 양식에 이름 붙이는 태그