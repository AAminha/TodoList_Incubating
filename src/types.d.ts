// 해당 파일은 타입들만 모여 있는 파일
// types.ts가 아닌 types.d.ts인 이유는 decoration을 해준 것으로 따로 import 할 필요가 없어짐.
type Todo = {
  id: number;
  text: string;
  date: number;
  complete: boolean;
};

type Week = {
  year: number;
  month: number;
  date: number;
  day: string;
}

type DateListItemProps = {
  day: number;
  dateList: Array<number>;
  setDay: (day: number) => void;
  setTodo: (todo: Array<Todo>) => void;
}

type TodoListItemProps = {
  dayKey: number;
  todo: Todo;
  todos: Array<Todo>;
  setTodo: (test: Array<Todo>) => void;
}

type TodoListProps = {
  dayKey: number;
  day: number;
  todo: Array<Todo>;
  setTodo: (todo: Array<Todo>) => void;
}