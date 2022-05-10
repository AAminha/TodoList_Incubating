// 해당 파일은 타입들만 모여 있는 파일
// types.ts가 아닌 types.d.ts인 이유는 decoration을 해준 것으로 따로 import 할 필요가 없어짐.
type Todo = {
  text: string;
  complete: boolean;
}