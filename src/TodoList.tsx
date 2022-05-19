/**@jsxImportSource @emotion/react */
import React, { ChangeEvent, useState } from 'react';
import { css } from '@emotion/react';
import { TodoListItem } from './TodoListItem';


const TodoList = () => {
  // 추가하기를 클릭했는지 안했는지를 확인하기 위함
  const [onAdd, setOnAdd] = useState<boolean>(false);

  const onAddClick = () => {
    setOnAdd(!onAdd);
  }

  // 임시로 배열에 저장하는 방식 이용
  const [test, setTest] = useState<Todo[]>([
    {id: 1,
    text: "first",
    date: "today",
    complete: true},
    {id: 2,
    text: "second",
    date: "today",
    complete: false}
  ]);

  const [todos, setTodos] = useState<Todo[]|null>([]);

  //const handleSelected = (e: React.MouseEvent)

  return(
    <div>
      <div css={css`background: aqua`}>TodoList 테스트</div>
      {test.map((item) => <TodoListItem key={item.id} todo={item}/> )}
      {onAdd ? <input /> : <div onClick={onAddClick}>추가하기</div>}
    </div>
  )
}

export default TodoList;