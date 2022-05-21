// 해당 파일은 타입들만 모여 있는 파일
// types.ts가 아닌 types.d.ts인 이유는 decoration을 해준 것으로 따로 import 할 필요가 없어짐.
type Todo = {
  id: number;
  text: string;
  date: number;
  complete: boolean;
};

type TodoItem = {
  todo: Array<Todo>;
  day: number;
  dateList: Array<number>;
};

type Week = {
  year: number;
  month: number;
  date: number;
  day: string;
}

type Initial = {
  day: number;
  todo: Todo[];
}

type Day = {
  day: number;
}