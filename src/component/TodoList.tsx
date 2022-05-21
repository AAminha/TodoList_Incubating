/**@jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { TodoListItem } from './TodoListItem';

const TodoList = ({dayKey, day, todo, setTodo}: TodoListProps) => {
  
  let arr = todo;

  const today = new Date();
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  const todayStr = `${today.getFullYear()}년 ${today.getMonth()+1}월 ${today.getDate()}일 ${week[today.getDay()]}요일`

  const [onAdd, setOnAdd] = useState<boolean>(false);

  const onAddClick = () => {
    setOnAdd(!onAdd);
  }

  const onBtnClick = () => {    
    const today = new Date();
    let date = new Date(today.setDate(today.getDate() + 3 - day));

    const item = {
      id: todo.length + 1,
      text: input,
      date: (date.getFullYear()-2000) * 10000 + (date.getMonth()+1) * 100 + date.getDate(),
      complete: false
    }

    arr.push(item);
    localStorage.setItem(dayKey.toString(), JSON.stringify(arr));
    setTodo(JSON.parse(localStorage.getItem(dayKey.toString()) || '{}'))
    setOnAdd(!onAdd);
    setInput('');
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      onBtnClick();
    }
  }

  useEffect(() => {
    setOnAdd(false);
  }, [day])

  const [input, setInput] = useState<string>('');

  return(
    <div css={todoList_container}>
      <h3 css={css`color: Darkblue`}>{todayStr}</h3>
      {todo.map((item) => 
        <TodoListItem
          key={item.id}
          dayKey={dayKey}
          todo={item}
          todos={todo}
          setTodo={setTodo}
        />
      )}
      {onAdd ?
        <label>
          <input
            css={inputBox}
            type="text"
            placeholder ='내용을 입력하세요'
            value = {input}
            onChange = {onChange}
            onKeyDown = {onKeyDown}
          />
          <button css={inputBtn} onClick={onBtnClick}>추가</button>
        </label>
        : <div css={onInputBtn} onClick={onAddClick}>+ 추가하기</div>
      }
    </div>
  )
}

const todoList_container = css`
  background: Powderblue;
  box-shadow: 3px 3px 3px 3px gray;
  padding: 20px 10px 20px 15px;
  width: 310px;
  height: 300px;
  border-radius: 25px;
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

const onInputBtn = css `
  width: 90px;
  margin: 5px;
  margin-left: 15px;
  text-align: left;
  font-weight: bold;
  opacity: 0.5;
  &:hover {
    cursor: pointer;
    opacity: 1.0;
  }
`

export default TodoList;