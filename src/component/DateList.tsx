/**@jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';

const DateList = ({day, setDay}: DateListItemProps) => {
  const [weekList, setWeekList] = useState<Week[]>([]);

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
    setDay(i);
  }

  return (
    <ul css={dateList}>
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

const dateList = css`
  height: 290px;
  width: 250px;
  padding: 10px;
  padding-bottom: 0px;
  list-style:none;
`

const dayList = css`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  line-height: 40px;
  color: Dimgray;
  &:hover {
    cursor: pointer;
    color: Crimson;
  }
`

const selected = css`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  line-height: 40px;
  color: Red;
  &:hover {
    cursor: pointer;
    color: Crimson;
  }
`