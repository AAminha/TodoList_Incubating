/* // Redux의 action 정의
// https://devlog-h.tistory.com/33

// typesafe-actions 라이브러리 이용
//import { deprecated } from "typesafe-actions";
import { ActionType, createAction } from 'typesafe-actions';

//const { createStandardAction } = deprecated;

// 액션 타입 (대문자로 정의)
// 문자열의 내용은 '모듈 이름/액션 이름'의 형태로 작성
// 문자열 안에 모듈 이름 넣음으로써, 프로젝트가 커졌으 ㄹ때 액션의 이름이 충돌되지 않도록
interface TodoItem {
  todo : Todo;
}

export const ADD = 'Redux/ADD';
export const REMOVE = 'Redux/REMOVE';
export const UPDATE = 'Redux/UPDATE';
export const SELECT = 'Redux/SELECT';

// 액션 생성 함수 구현
export const add = createAction(ADD)<Todo>();
export const remove = createAction(REMOVE)<number>();
export const update = createAction(UPDATE)<Todo>();
export const select = createAction(SELECT)<number>();

const actions = { add, remove, update, select };
type TodoActions = ActionType<typeof actions>;
 */


import { deprecated } from "typesafe-actions";

const { createStandardAction } = deprecated;

export const ADD = "Redux/ADD";
export const REMOVE = "Redux/REMOVE";
export const UPDATE = "Redux/UPDATE";
export const CHECK = "Redux/CHECK";
export const SELECT = "Redux/SELECT";

export const add = createStandardAction(ADD)<{todo: Todo;}>();
export const remove = createStandardAction(REMOVE)<{id: number}>();
export const update = createStandardAction(UPDATE)<{id: number; text: string;}>();
export const check = createStandardAction(CHECK)<{id: number}>();
export const select = createStandardAction(SELECT)<{day: number}>();
