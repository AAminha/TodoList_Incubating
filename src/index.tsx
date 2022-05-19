import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";
import rootReducer from "./Redux";

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)

// ts는 dom을 몰라서 분명히 존재하는 태그도 null일 가능성을 염두에 두고 있다.
// 이럴때는 어쩔 수 없이 non null assertion을 해야 합니다.