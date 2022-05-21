/**@jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';

interface DateListItemProps {
  day: number;
  dateList: Array<number>;
  setDay: (day: number) => void;
  setTodo: (todo: Array<Todo>) => void;
}

const DateList = ({day, dateList, setDay, setTodo}: DateListItemProps) => {
  const [weekList, setWeekList] = useState<Week[]>([]);
  //const [day, onDay] = useState(3);
  
  /* const dispatch = useDispatch(); // store에 설정된 action에 대한 dispatch 연결
  const selectDay = React.useCallback(
    (day: number, dayKey: number) => dispatch(
      select({ day: day, dayKey: dayKey })
    ), [dispatch]
  ); */
  

  useEffect(() => {
    let list = [];
    const week = ['일', '월', '화', '수', '목', '금', '토'];

    for(let i = -3; i < 4; i++) {
      const today = new Date();
      let day = new Date(today.setDate(today.getDate() + i));
  
      list.push({
        year: day.getFullYear(),
        month: day.getMonth() + 1,
        date: day.getDate(),
        day: week[day.getDay()]
      })
    }

    setWeekList(list);
  }, []);

  const onClick = (e: React.FormEvent, v: Week, i: number) => {
    //e.preventDefault();
    //const key = (v.year-2000) * 10000 + (v.month+1) * 100 + v.date * 1;
    console.log(i);
    //console.log(key);
    //selectDay(i, key);
    setDay(i);
    //setTodo(JSON.parse(localStorage.getItem(dateList[i].toString()) || '{}'));
  }

  return (
    <ul css={css`
      background: yellow;
      list-style:none
    `}>
      {weekList.map((v, i) =>
        <li
          key={v.date}
          onClick={(e) => onClick(e, v, i)}
          css={day === i ? selected : dayList}
        >
          {v.year}년 {v.month}월 {v.date}일 {v.day}요일
        </li>
      )}
    </ul>
  )
}

export default DateList;

const dayList = css`
  background: Teal;
  &:hover {
    cursor: pointer;
    color: white;
  }
`

const selected = css`
  background: Teal;
  color: Blue;
  &:hover {
    cursor: pointer;
    color: white;
  }
`