//// 도깨비 pj 메인 js - main.js ////


// 나의 함수 불러오기
import myFn from "./my_function.js";
//  부드러운 스크롤 불러오기
import { startSS,setScrollPos } from "./smoothScroll23.js";

// 모듈로 호출된 js에서는 다른 외부 js를 import로 호출가능
// import하려는 파일에서 반드시 함수, 변수 등을 export 해야함

import slideFn from "./slide.js";

///// 데이터 세팅 불러오기 
// = import {previewData} from "../data/dkb_data.js";
import * as dkbData from "../data/dkb_data.js";

/******************************************************
 ******************** 구현 코드 파트 *******************
 ******************************************************/

// 1. 부드러운 스크롤 호출
startSS();

// console.log('모듈로 메인 js 호출', document.querySelector('.top-menu'));


// 2 .slideFn 슬라이드 기능함수 호출
slideFn();

// 3. 인트로 동영상 파트 클릭시 동영상태그 넣기
// 이벤트 대상 === 변경 대상 : .intro-mv-img

const introMv = myFn.qs('.intro-mv-img');

introMv.onclick = ()=> {
  console.log('인트로영상');
  // 1. 동영상 넣기
  introMv.innerHTML = `
  <video src="./images/intro_mv.mp4" autoplay controls></video>
  `;

  // 2. 클래스 off 지우기(플레이버튼 안나오게함)
  introMv.classList.remove('off');

}; ////////////// click 이벤트 함수

////////////////// 2. 미리보기 파트 내용 넣기 //////////////////////
// 로딩시 바로 실행됨 -> 실행코드를 지역화하고자 할 때 함수로 만들고 이를 호출. 
// 그러나 불편하여 익명함수로 만들고 바로 실행하게 하면 됨 
// 목적 : 변수,함수 충돌 방지
// 방법 : (익명함수)() -> 바로 실행함 (코드의 지역화 또는 코드 랩핑)
// 실제 코드 : (()=>{코드}) ()
// 실제 코드 : (function(){코드})()

////// 미리보기 구현 코드랩핑 구역  /////////////
(()=>{
  
// 대상 : .preview-box
const previewBox = myFn.qs('.preview-box');

// 데이터 : dkb-data.js의 previewData 배열
const pData = dkbData.previewData;
// 구조 : ul>li>h3+p

// 1. 8개만 데이터를 html로 구성하여 넣는다
// html 코드 변수 
let hcode = `<ul class="fx-box">`;

// li 구성을 hcode변수에 대입연산자로 할당함

for(let i=0; i<8; i++) {
  hcode += `
    <li>
      <h3>${pData[i].title}</h3>
      <p>${pData[i].story}</p>
    </li>
  `;  
} ////// for문 ///////////
hcode += `</ul>`;


// 데이터 확인 
// console.log(hcode);
// console.log('대상:',previewBox, '미리보기 data:',pData);

////// 2.  화면 출력하기 ///////////////
previewBox.innerHTML = hcode;


})(); ////// 미리보기 코드 랩핑 구역 종료 ////////////