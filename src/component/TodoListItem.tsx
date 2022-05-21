/**@jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css } from '@emotion/react';
import { BsTrash } from "react-icons/bs";
import { BsPencil } from "react-icons/bs";

export const TodoListItem = ({dayKey, todo, todos, setTodo}: TodoListItemProps) => {

  const [update, setUpdate] = useState(false);
  const [input, setInput] = useState('');

  const onClick = () => {
    let arr = todos.map((item) => {
      if (item.id === todo.id) item.complete = !item.complete;
      return item;
    })
    
    localStorage.setItem(dayKey.toString(), JSON.stringify(arr));
    setTodo(JSON.parse(localStorage.getItem(dayKey.toString()) || '{}'))
  }

  const onUpdate = () => {
    setInput(todo.text);
    setUpdate(!update);
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      onBtnClick();
    }
  }

  const onBtnClick = () => {
    let arr = todos.map((item) => {
      if (item.id === todo.id) item.text = input;
      return item;
    })

    localStorage.setItem(dayKey.toString(), JSON.stringify(arr));
    setTodo(JSON.parse(localStorage.getItem(dayKey.toString()) || '{}'))
    setInput('');
    setUpdate(!update);
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }

  const onRemove = (todo: Todo) => {
    let arr = todos.filter((item) => 
      item.id !== todo.id).map((item, index) => {item.id = index+1; return item;});
    
    localStorage.setItem(dayKey.toString(), JSON.stringify(arr));
    setTodo(JSON.parse(localStorage.getItem(dayKey.toString()) || '{}'))
  }

  return(
    <div css={main_container}>
      {update ?
        <label>
          <input
            css={inputBox}
            value={input}
            onChange={onChange}
            onKeyDown={onKeyDown}
          />
          <button css={inputBtn} onClick={onBtnClick}>수정</button>
        </label> :
        <label css={container}>
          <div
            onClick = {onClick}
            css={todo.complete ? completedItem : incompleteItem}
          >
            {`${todo.id}. ${todo.text}`}
          </div>
          <div css={icons}>
            <BsPencil size="17px" onClick={onUpdate}/>
            <BsTrash css={css`margin-left: 6px;`} size="17px" onClick={() => onRemove(todo)}/>
          </div>
        </label>
      }
    </div>
  )
}

const main_container = css`
  width: 310px;
`

const container = css`
  display: flex;
  flex-direction: row;
`

const inputBox = css`
  width: 230px;
  height: 19px;
  padding: 3px;
  padding-left: 10px;
  margin-right: 8px;
  border:0 solid black;
  border-radius: 10px;
`
const inputBtn = css`
  margin-top: 5px;
  width: 50px;
  height: 27px;
  border: 0px;
  border-radius: 10px;
  font-weight: bold;
  background: White;
`

const completedItem = css`
  width: 285px;
  font-size: 17px;
  text-align: left;
  font-weight: bold;
  margin: 4px 7px 4px 7px;
  text-decoration: line-through;
  text-decoration-color: red;
`

const incompleteItem = css`
  width: 285px;
  font-size: 17px;
  font-weight: bold;
  text-align: left;
  margin: 4px 7px 4px 7px;
`
const icons = css`
  display: flex;
  flex-direction: row;
  margin: 6px 7px 4px 0px;
  opacity: 0.5;
  &:hover {
    cursor: pointer;
    opacity: 1.0;
  }
`

// label 태그 : 폼의 양식에 이름 붙이는 태그