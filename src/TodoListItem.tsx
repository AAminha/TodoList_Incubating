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

export const TodoListItem: React.FC<TodoListItemProps> = ({todo}) => {
  return <li>
    <label className={todo.complete ? "complete" : undefined}>
      <input type="checkbox" checked={todo.complete}/>
      {todo.text}
    </label>
  </li>
}