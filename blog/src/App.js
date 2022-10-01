/* eslint-disable */

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let post = "강남 우동 맛집";
  let [글제목, 글제목변경] = useState(["남자 코트 추천", "강남 우동 맛집", "파이썬 독학"]);
  let [count, setCount] = useState(0);

  function countUp() {
    setCount(count + 1);
  }

  function changeTitle() {
    let copy = [...글제목];
    copy[0] = "여자코트 추천";
    글제목변경(copy);
  }

  function sortTitle() {
    let copy = [...글제목];
    copy.sort();
    글제목변경(copy);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>Blog</h4>
      </div>

      <button onClick={sortTitle}>가나다순 정렬</button>

      <div className="list">
        <h4>
          {글제목[0]}
          <sapn onClick={countUp}>👍</sapn> {count}
        </h4>
        <p>2월 17일 발행</p>
        <button onClick={changeTitle}>제목변경</button>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
