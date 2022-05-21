/**@jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import DateList from './DateList';
import TodoList from './TodoList';

const App = () => {
  const today = new Date();
  const key = (today.getFullYear()-2000) * 10000 + (today.getMonth()+1) * 100 + today.getDate() * 1;

  let dateArr: Array<number> = [];
  for(let i = -3; i < 4; i++) {
    const today = new Date();
    let day = new Date(today.setDate(today.getDate() + i));
    dateArr.push((day.getFullYear()-2000)*10000 + (day.getMonth()+1)*100 + day.getDate());
  }

  let arr: Array<Todo> = [];
  for(let i = 0; i < dateArr.length; i++) {
    if (localStorage.getItem(dateArr[i].toString()) === null) {
      localStorage.setItem(dateArr[i].toString(), JSON.stringify([]));
    }
  }
  arr = JSON.parse(localStorage.getItem(key.toString()) || '{}')

  const [todo, setTodo] = useState<Todo[]>(arr);
  const [day, setDay] = useState<number>(3);
  const dateList: Array<number> = dateArr;

  useEffect(() => {
    setTodo(JSON.parse(localStorage.getItem(dateList[day].toString()) || '{}'))
  }, [day])

  useEffect(() => {
    for(let i = 0; i < window.localStorage.length; i++) {
      let res = false;
      for(let j = 0; j < dateList.length; j++) {
        if(window.localStorage.key(i) === dateList[j].toString()) {
          res = true;
          break;
        }
      }
      if (!res) localStorage.removeItem(window.localStorage.key(i) || '');
    }
  })

  return (
    <div css={css`
      margin-top: 50px;
      text-align: center;
    `}>
      <div css={sub}>
        <TodoList dayKey={dateList[day]} day={day} todo={todo} setTodo={setTodo}/>
        <DateList day={day} dateList={dateList} setDay={setDay} setTodo={setTodo}/>
      </div>
    </div>
  )
}

const sub = css`
  height: 350px;
  display: flex;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`

export default App;
