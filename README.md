# Typescript로 만들어보는 Todo List
## 구현해야 할 부분
1. 텍스트(Todo)를 클릭하면 빨간 줄이 그어짐
2. 날짜에 맞는 TodoList 생성
3. 색상 및 디자인 변경 가능(주 단위 Todo List는 유지)

## 기술 스택
1. React[Functional Component 사용]
2. Typescript 사용
3. Emotion[css in js]
4. 필요 시, 전역 상태 라이브러리[Recoil, ContextAPI, Redux 등]

## 참고 및 공부 링크
[타입스크립트로 TODO LIST 만들어보기](https://withseungryu.tistory.com/42)  
[Typescript로 Todo list 만들기](https://velog.io/@sugyinbrs/Typescript-%EB%A1%9C-Todo-list-%EB%A7%8C%EB%93%A4%EA%B8%B0)

## 공부 내용
* Typescript로 react 프로젝트 만드는 방법
```
yarn create reat-app [프로젝트 명] --typescript
```
```
npx create-react-app [프로젝트 명] --template typescript
```

* Function Component 방식
```
import React from 'react';

const <함수명> : React.FC = () => { // FC는 Functional Component
  return <HTML>
}
```

* typescript에서는 type을 항상 지정해주어야 한다.
typescript에서 type들만 모여 있는 파일을 만들 수 있다. (types.ts / types.d.ts)

* [파일명].d.ts는 파일명에 decoration을 해준 것으로 따로 import할 필요가 없다.