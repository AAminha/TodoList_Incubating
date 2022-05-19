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
[타입스크립트 기본 문법](https://tecoble.techcourse.co.kr/post/2021-05-23-typescript-minimal-start/)  
[타입스크립트로 TODO LIST 만들어보기](https://withseungryu.tistory.com/42)  
[Typescript로 Todo list 만들기](https://velog.io/@sugyinbrs/Typescript-%EB%A1%9C-Todo-list-%EB%A7%8C%EB%93%A4%EA%B8%B0)  
[Typescript 관련 자료(영어)]( https://react-typescript-cheatsheet.netlify.app/)  
[Typescript로 TodoList 만들기 - 컴포넌트 만들기](https://intrepidgeeks.com/tutorial/create-your-own-todolist-using-and-typescript-part-2-create-components-and-storybook)  
[CSS-in-JS](https://d0gf00t.tistory.com/22)  
[emotion으로 React 프로젝트 시작하기](https://velog.io/@joabyjoa/create-react-app-typescript-emotion%EC%9C%BC%EB%A1%9C-React-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0)  
[props children](https://react.vlpt.us/basic/05-props.html)

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
```
// 설치
yarn add redux react-redux @types/react-redux
npm install @types/react-redux
```
구성 : Action, Action Creator, Reducer, Store, Dispatch

* [Redux] Action
액션은 하나의 객체로 표현.
액션 객체는 type 필드를 반드시 가지고 있어야 한다.
그 외의 값들은 후에 상태 업데이트를 할 때 참고해야 할 값.
```
{
  type: 'ADD_TODO'
  data: {
    id: 1,
    text: '리덕스 연습'
  }
}
```

* [Redux] Action Creator
액션 생성 함수.
파라미터를 입력받아, 액션 객체 형태로 만들어줌. 
```
function addTodo(data) {
  return (
    type: "ADD_TODO",
    data
  )
}
```

* [Redux] Reducer
변화를 일으키는 함수.
액션을 만들어서 발생시키면 리듀서가 현재 상태와 전달받은 액션 객체를 파라미터로 받아옴.
두 값을 참고하여 새로운 상태를 만들어 반호나해 줌.
```
const initialState {
  counter: 1
};

function reducer (state = initialState, action) {
  switch (action.type) {
    case ...
    ......
  }
}
```

* [Redux] Store
컴포넌트 외부에 있는 상태 저장소
스토어 안에는 현재 상태들, 리듀서 그리고 몇 가지의 내장 함수를 포함

* [Redux] Dispatch
액션을 발생시키는 역할
디스패치가 액션을 발생시키면 리듀서에서 액션에 맞는 로직으로 새로운 상태를 만들어 반환

* [Redux] 세 가지 규칙
1. 단일 스토어 사용 권장
2. 상태는 읽기 전용
3. 리듀서는 순수한 함수
3-1. 리듀서 함수는 이전 상태와 액션 객체를 파라미터로 받는다.
3-2. 파라미터 외의 값에는 의존하면 안 된다.
3-3. 이전 상태는 절대로 건드리지 않고, 변화를 준 새로운 상태 객체를 만들어서 반환한다.
3-4. 똑같은 파라미터로 호출된 리듀서 함수는 언제나 똑같은 결과 값을 반환해야 한다.

* useSelector()
리덕스 스토어에 저장된 데이터를 추출하는 Hook.

* useDispatch()
리덕스 스토어에 설정된 action에 대한 dispatch를 연결하는 Hook

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
```

* 리액트 children (태그와 태그 사이의 모든 내용을 표시하기 위해 사용되는 특수한 props)
1. porps.children을 사용하면, props 속성의 이름을 고민할 필요가 없다.
2. <React.Fragment>를 사용하지 않아도 된다.
3. props.children 사용시 태그와 태그 사이의 모든 요소들을 자식 취급하지 않음 주의.


```
const Category = (props) => {
  return <ul>{props.children}</ul>;
};

const Category = ({ children }) => {
  retrun <ul>{children}</ul>;
};
```
```
const App = () => {
  <Category>
    <li>First item.</li>
    <li>Second item.</li>
    <li>Another item.</li>
  </Category>
}  // <li>태그 3개가 props.children이다.
```
```
const Categroy = (props) => {
  return <ul>{props.body}</ul>;
};

const App = () => {
  <Category body = {
    <React.Fragment>
      <li>First item.</li>
      <li>Second item.</li>
      <li>Another item.</li>
    </React.Fragment>
    }
  />
}   // porps.children을 사용하지 않고 <Category>내부에 있는 코드를 props로 전달하려 할 때
```

* props.children 개념 (추가)
컴포넌트 태그 사이에 넣은 값 조회할 때 사용
```
/* Wrapper.js */
import React from 'react';

function Wrapper({ children }) {
  const style = { ... };
  
  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Wrapper;
```
```
/* App.js */
import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

functino App() {
  return (
    <Wrapper>
      <Hello name="react" color="red"/>
      <Hello color="pink"/>
    </Wrapper>
  )
}

export default App;
```