/*eslint-disable*/
//위 내용은 Lint 끄는 기능 (warning 끄는 기능)

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자코트 추천','강남 우동맛집','파이썬독학']);
  let [따봉, 따봉변경] = useState(0);
  //a : state에 보관했던 자료나옴.
  //b : state 변경 도와주는 함수. (변경함수), 안써도됨
  //state사용이유 : 변수의 내용이 바껴도 재랜더링 됨(위의 post는 수정하면 안 바뀜)
  //state언제 사용? : 변동시 자동으로 html에 반영되게 만들고 싶을 때

  function 함수(){
    console.log(1);
  }


  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button onClick={()=>{
        let copy = [...글제목]; //위의 원본 보존하기 위해 카피변수를 만듬. (...을 쓰지않으면 카피로 데이터 변경 안됨)
        copy[0] = '여자코트 추천'; 
        글제목변경(copy);
        }}>글수정</button>

      <div className='list'>
        <h4>{글제목[0]} <span onClick={ ()=>{따봉변경(따봉+1)} }>좋아요👍</span> {따봉}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <modal></modal>
      
      

    </div>
  );
}

//컴포넌트 생성
function Modal(){
  return(
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div> 
  )
}

export default App;
