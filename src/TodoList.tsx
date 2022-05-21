/**@jsxImportSource @emotion/react */
import React, { ChangeEvent, useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { TodoListItem } from './TodoListItem';
import { useSelector } from 'react-redux';
//import { RootState } from './Redux';
import { useDispatch } from 'react-redux';
import DateList from './DateList';

interface TodoListItemProps {
  dayKey: number;
  day: number;
  todo: Array<Todo>;
  setTodo: (todo: Array<Todo>) => void;
}

const TodoList = ({dayKey, day, todo, setTodo}: TodoListItemProps) => {
  //const todos = useSelector((state : RootState) => state.todo.todo);
  //const day = useSelector((state: RootState) => state.todo.day);
  //const key = useSelector((state: RootState) => state.todo.dateList[day]);
  
  //const dispatch = useDispatch();
  /* const updateTodo = React.useCallback(
    (day: number) => dispatch (
      update({day: day})), [dispatch]
  ) */
  
  let arr = todo;

  const week = ['일', '월', '화', '수', '목', '금', '토'];

  //const [test, setTest] = useState<Todo[]>(todo);
  // 추가하기를 클릭했는지 안했는지를 확인하기 위함
  const [onAdd, setOnAdd] = useState<boolean>(false);

  const onAddClick = () => {
    setOnAdd(!onAdd);
  }

  const onBtnClick = () => {
    console.log("버튼 클릭")
    
    const today = new Date();
    let date = new Date(today.setDate(today.getDate() + 3 - day));

    const item = {
      id: todo.length + 1,
      text: input,
      date: (date.getFullYear()-2000) * 10000 + (date.getMonth()+1) * 100 + date.getDate(),
      complete: false
    }

    console.log("==============================");
    console.log("추가할 item의 id = " + item.id);
    console.log("==============================");

    arr.push(item);
    localStorage.setItem(dayKey.toString(), JSON.stringify(arr));
    //updateTodo(day);
    setTodo(JSON.parse(localStorage.getItem(dayKey.toString()) || '{}'))
    setOnAdd(!onAdd);
    setInput('');
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      console.log("키 클릭")
      onBtnClick();
    }
  }

  const [input, setInput] = useState<string>('');

  return(
    <div>
      <div css={css`background: aqua`}>TodoList 테스트</div>
      {todo.map((item) => 
        <TodoListItem
          key={item.id}
          todo={item}
          todos={todo}
          setTodo={setTodo}
        />
      )}
      {onAdd ?
        <label>
          <input
            placeholder ='내용을 입력하세요'
            value = {input}
            onChange = {onChange}
            onKeyDown = {onKeyDown}
          />
          <button onClick={onBtnClick}>추가</button>
        </label>
        : <div onClick={onAddClick}>추가하기</div>
      }
    </div>
  )
}

export default TodoList;