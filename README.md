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
[Typescript 관련 자료(영어)]( https://react-typescript-cheatsheet.netlify.app/)  
[Typescript로 TodoList 만들기 - 컴포넌트 만들기](https://intrepidgeeks.com/tutorial/create-your-own-todolist-using-and-typescript-part-2-create-components-and-storybook)  
[CSS-in-JS](https://d0gf00t.tistory.com/22)  
[emotion으로 React 프로젝트 시작하기](https://velog.io/@joabyjoa/create-react-app-typescript-emotion%EC%9C%BC%EB%A1%9C-React-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0)  

## 공부 내용
* Typescript : JS에 정적타입이라는 개념을 추가한 언어..?

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
typescript에서 type들만 모여 있는 파일을 만들 수 있다.<br/>  (types.ts / types.d.ts)

* [파일명].d.ts는 파일명에 decoration을 해준 것으로 따로 import할 필요가 없다.

* 함수형 컴포넌트 (functional component)  
리액트에서 컴포넌트 정의 시 보통 ES6의 class 문법 사용<br/>
(컴포넌트에서 라이프사이클 사용, state 사용 경우 특히!!)

위의 경우가 아니고, 단순히 props만 전달해주면 뷰를 렌더링만 하는 역할이라면<br/>함수형 컴포넌트 형식으로 컴포넌트 정의 가능.
```
import React from 'react';

function Hello(props) {
  return (<div>Hello {porps.name}</div>);
}
/*
const Hello = (props) => {
  return (<div>Hello {props.name}</div>);
}
*/

export default Hello;
```
```
/* typescript에서 functional component 생성하기 */
interface AppProps {
  name: string;
}

const App = (props: AppProps) => { };
```

* [상태 관리 라이브러리 (Redux)](https://medium.com/hcleedev/web-%EC%83%81%ED%83%9C-%EA%B4%80%EB%A6%AC-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC%EB%9E%80-%EA%B0%9C%EB%85%90-redux-%EC%98%88%EC%8B%9C-acf48c51ae14)

* CSS-in-JS : 스타일의 정의를 css나 scss파일이 아닌 JS로 작성된 컴포넌트에 바로 삽입하는 스타일 기법
1. className이 자동으로 부여되기 때문에 스타일이 겹칠 염려가 없다.<br/>
2. 재사용이 가능하다.<br/>
3. props, 조건 등에 따라 스타일 지정이 가능<br/>
4. JS 환경을 최대한 활용 가능<br/>
5. JS와 CSS 사이의 상수와 함수를 쉽게 공유 할 수 있다.<br/>
6. 현재 사용중인 스타일만 DOM에 포함<br/>
7. inline style과는 엄연히 다름<br/>

* Emotion.js는 CSS-in-JS의 종류 중 하나 (Style Library)  
```
/* emotion.js 설치 */
npm install @emotion/react

/* import 하기 */
/** @jsx jsx */   혹은 /**@jsxImportSource @emotion/react */
import { css } from '@emotion/react'
```
사용예시
```
/** @jsx jsx */
import { css } from '@emotion/react'

const Sample = () => {
  return (
    <div css={css`color: dodgerblue`}>sample</div>
  )
}