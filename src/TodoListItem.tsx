/**@jsxImportSource @emotion/react */
import React, { MouseEventHandler, useState } from 'react';
import { css } from '@emotion/react';
import { BsTrash } from "react-icons/bs";
import { BsPencil } from "react-icons/bs";
import { useDispatch } from 'react-redux';
//import { RootState } from './Redux';
import { useSelector } from 'react-redux';
import { typeImplementation } from '@testing-library/user-event/dist/type/typeImplementation';
import { isTemplateExpression } from 'typescript';

interface TodoListItemProps {
  key: number;
  todo: Todo;
  todos: Array<Todo>;
  setTodo: (test: Array<Todo>) => void;
}

export const TodoListItem = ({key, todo, todos, setTodo}: TodoListItemProps) => {
  //const todos = useSelector((state: RootState) => state.todo.todo);
  //const day = useSelector((state: RootState) => state.todo.day);
  //const key = useSelector((state: RootState) => state.todo.dateList[day]);

  const [update, setUpdate] = useState(false);
  const [input, setInput] = useState('');

  //const item:string = `${todo.id}. ${todo.text}`;
 
  /* const dispatch = useDispatch();
  const updateTodo = React.useCallback(
    (day: number) => dispatch (
      update({day: day})), [dispatch]
  ) */

  const onDoubleClick = () => {
    let arr = todos.map((item) => {
      if (item.id === todo.id) item.complete = !item.complete;
      return item;
    })

    localStorage.setItem(key.toString(), JSON.stringify(arr));
    setTodo(JSON.parse(localStorage.getItem(key.toString()) || '{}'))
    console.log("체크")
  }

  const onUpdate = () => {
    setInput(todo.text);
    setUpdate(!update);
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      console.log("키 클릭")
      onBtnClick();
    }
  }

  const onBtnClick = () => {
    let arr = todos.map((item) => {
      if (item.id === todo.id) item.text = input;
      return item;
    })

    localStorage.setItem(key.toString(), JSON.stringify(arr));
    setTodo(JSON.parse(localStorage.getItem(key.toString()) || '{}'))
    setInput('');
    setUpdate(!update);
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }

  const onRemove = (todo: Todo) => {
    let arr = todos.filter((item) => 
      item.id !== todo.id).map((item, index) => {item.id = index+1; return item;});
    console.log(arr);
    localStorage.setItem(key.toString(), JSON.stringify(arr));
    setTodo(JSON.parse(localStorage.getItem(key.toString()) || '{}'))
  }

  return(
    <div css={css`background: gray`}>
      {update ?
        <label>
          <input
            value={input}
            onChange={onChange}
            onKeyDown={onKeyDown}
          />
          <button onClick={onBtnClick}>완료</button>
        </label> :
        <label css={container}>
          <div
            onDoubleClick = {onDoubleClick}
            css={todo.complete ? completedItem : incompleteItem}
          >
            {`${todo.id}. ${todo.text}`}
          </div>
          <BsPencil onClick={onUpdate}/>
          <BsTrash onClick={() => onRemove(todo)}/>
        </label>
      }
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