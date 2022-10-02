/* eslint-disable */
import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";


function App() {
  let post = "강남 우동 맛집";
  let [글제목, 글제목변경] = useState(["남자 코트 추천", "강남 우동 맛집", "파이썬 독학"]);
  let [count, setCount] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0); // 3가지 state가 필요할듯..
  let [입력값, 입력값변경] = useState('');

  function countUp(i) {
    let copy = [...count];
    copy[i] += 1;
    setCount(copy);
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

  function addPost() {
    let copy = [...글제목];
    copy.push(입력값);
    글제목변경(copy);
  }

  function deletePost(i) {
    let copy = [...글제목];
    copy.splice( i,1);
    글제목변경(copy);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>Blog</h4>
      </div>

      <button onClick={sortTitle}>가나다순 정렬</button>

      {/* <div className="list">
        <h4
          onClick={() => {
            setModal(!modal);
          }}
        >
          {글제목[0]}
          <span onClick={countUp}>👍</span> {count}
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
      </div> */}

      {
        글제목.map(function (a, i) {
          return (
            <div className="list">
              <h4 onClick={() => {setModal(!modal); setTitle(i)}}>{글제목[i]}
                <span onClick={(e) => { e.stopPropagation(); countUp(i)}}>👍</span> {count[i]}
              </h4>
              <p>2월 17일 발행</p>
              <button onClick={() => {deletePost(i);}}>삭제</button>
            </div>
          );
        })
      }

      <input onChange={(e) => {입력값변경(e.target.value)}}/>
      <button onClick={() => {addPost();}}>버튼</button>

      {modal == true ? <Modal  color = {'yellow'} 글제목 = {글제목} changeTitle = {changeTitle} title={title}/> : null}
    </div>

  );


  function Modal(props) {
    return (
      <div className="modal" style={{background: props.color}}>
        <h4>{ props.글제목[props.title] }</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={() => {props.changeTitle()}}>글 수정</button>
      </div>
    );
  }

}



export default App;
