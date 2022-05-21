import React from "react";
import ReactDOM from "react-dom/client";
import App from "./component/App";


const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />)

// ts는 dom을 몰라서 분명히 존재하는 태그도 null일 가능성을 염두에 두고 있다.
// 이럴때는 어쩔 수 없이 non null assertion을 해야 합니다.

// subscribe : 스토어의 내장 함수 중 하나, 함수 형태의 값을 파라미터로 받아옴.
// subscribe 함수에 특정 함수 전달 -> action이 dispatch될 때마다 함수 호출.
