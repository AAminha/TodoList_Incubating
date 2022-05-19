// types.ts를 이용해 구현하는 이유
// 타입스크립트에서 type을 따로 정의하는 것은 나중에 코드를 볼 때 type에 대한 이해가 빠름


import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type TodoAction = ActionType<typeof actions>;

export type TodoItem = {
  todo: Array<Todo>;
  day: number;
};

