import React from 'react';

/* interface TodoListItemProps {
  todo: {
    text: string,
    complete: boolean;
  }
} */

interface TodoListItemProps {
  todo: Todo;
}

/* export const TodoListItem: React.FC<TodoListItemProps> = ({todo}) => {
  return <li>
    <label className={todo.complete ? "complete" : undefined}>
      <input type="checkbox" checked={todo.complete}/>
      {todo.text}
    </label>
  </li>
} */

export const TodoListItem = ({todo}: TodoListItemProps) => {
  return(
    <div>
      <label className={todo.complete ? "complete" : undefined}>
        <input id="item" type="checkbox" checked={todo.complete}/>
        {todo.text}
      </label>
    </div>
  )
}

// label 태그 : 폼의 양식에 이름 붙이는 태그