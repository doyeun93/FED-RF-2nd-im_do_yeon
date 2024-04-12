//// 도깨비 pj 메인 js - main.js ////

// 공통처리 함수 불러오기 : 가장 먼저 처리한다

import setElement from "./common.js";
setElement(); // 함수 호출


// 나의 함수 불러오기
import myFn from "./my_function.js";
//  부드러운 스크롤 불러오기
import { startSS, setScrollPos } from "./smoothScroll23.js";


///// 데이터 세팅 불러오기
// = import {previewData} from "../data/dkb_data.js";
import * as dkbData from "../data/dkb_data.js";


/******************************************************
 ******************** 구현 코드 파트 ******************
 ******************************************************/



// 1. 부드러운 스크롤 호출
startSS();

// console.log('모듈로 메인 js 호출', document.querySelector('.top-menu'));



// 3. 인트로 동영상 파트 클릭시 동영상태그 넣기
// 이벤트 대상 === 변경 대상 : .intro-mv-img

const introMv = myFn.qs(".intro-mv-img");

introMv.onclick = () => {
  console.log("인트로영상");
  // 1. 동영상 넣기
  introMv.innerHTML = `
  <video src="./images/intro_mv.mp4" autoplay controls></video>
  `;

  // 2. 클래스 off 지우기(플레이버튼 안나오게함)
  introMv.classList.remove("off");
}; ////////////// click 이벤트 함수

/******************************************************************************** 
  [코드 랩핑이란?]
      로딩시 바로 실행됨 -> 실행코드를 지역화하고자 할 때 함수로 만들고 이를 호출.  
      그러나 불편하여 익명함수로 만들고 바로 실행하게 하면 됨 
      목적 : 변수,함수 충돌 방지
      방법 : (익명함수)() -> 바로 실행함 (코드의 지역화 또는 코드 랩핑)
      실제 코드 : (()=>{코드}) ()
      실제 코드 : (function(){코드})()

 ********************************************************************************/

////////////////// 2. 미리보기 파트 내용 넣기 //////////////////////
////// 미리보기 구현 코드랩핑 구역  /////////////
(() => {
  // 대상 : .preview-box
  const previewBox = myFn.qs(".preview-box");

  // 데이터 : dkb-data.js의 previewData 배열
  const pData = dkbData.previewData;
  // 데이터 원본의 정렬을 내림차순으로 변경
  // 배열값인 객체의 idx키 값을 기준으로 내림차순 정렬 할 때 문자형 숫자이므로
  // Number() 숫자형 변환 메서드로 싸서 숫자로써 비교하여 정확한 내림차순이 되도록 한다

  pData.sort((a, b) =>
    Number(a.idx) == Number(b.idx) ? 0 : Number(a.idx) < Number(b.idx) ? 1 : -1
  );
  //#해석 : a랑 b가 같으면? 아무것도 안함 , b가 a보다 크면 순서바꿈, a가 b보다 크면 순서유지
  // 구조 : ul>li>h3+p

  // 1. 8개만 데이터를 html로 구성하여 넣는다
  // html 코드 변수
  let hcode = `<ul class="fx-box">`;

  // li 구성을 hcode변수에 대입연산자로 할당함

  for (let i = 0; i < 8; i++) {
    hcode += `
    <li>
      <h3>🍰${pData[i].title}</h3>
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

////////////////// 3. 현장포토 파트 내용 넣기 //////////////////////
////// 현장포토 구현 코드랩핑 구역  /////////////
(() => {
  // 대상 : .live-box
  const liveBox = myFn.qs(".live-box");

  // 데이터 : dkb-data.js의 liveData 배열
  const lvData = dkbData.liveData;
  // 구조 : ul > li > figure > img + figcaption

  // 1. 8개만 데이터를 html로 구성하여 넣는다
  // html 코드 변수
  let hcode = `<ul>`;

  // li 구성을 hcode변수에 대입연산자로 할당함
  // liveData 배열은 총 8개임. 모두 돌기 세팅

  lvData.forEach((v) => {
    hcode += `
    <li>
      <figure>
        <img src="./images/live_photo/${v.imgName}.jpg" alt="${v.title}" >
        <figcaption>${v.title}</figcaption>
      </figure>
    </li>
  `;
  }); ////// foreach문 ///////////

  hcode += `</ul>`;

  // 데이터 확인
  // console.log(hcode);
  // console.log('대상:', liveBox, '미리보기 data:',lvData);

  ////// 2.  화면 출력하기 ///////////////
  liveBox.innerHTML = hcode;
})(); ////// 현장포토 코드 랩핑 구역 종료 ////////////

////////////////// 4. 대표이미지 파트 내용 넣기 //////////////////////
////// 대표이미지 구현 코드랩핑 구역  /////////////
(() => {
  // 대상 : .poster-box
  const posterBox = myFn.qs(".poster-box");

  // 데이터 : dkb-data.js의 posterData 배열
  // 지역화 되어있기때문에 같은 변수를 선언해도 괜춚
  const pData = dkbData.posterData;
  // 구조 : ul > li > figure > img + figcaption

  // 1. 8개만 데이터를 html로 구성하여 넣는다
  // html 코드 변수
  let hcode = `<ul>`;

  // li 구성을 hcode변수에 대입연산자로 할당함
  // posterData 배열은 총 5개임. 모두 돌기 세팅

  pData.forEach((v) => {
    hcode += `
    <li>
      <figure>
        <img src="./images/poster_img/${v.imgName}.jpg" alt="${v.title}" >
        <figcaption>${v.title}</figcaption>
      </figure>
    </li>
  `;
  }); ////// foreach문 ///////////

  hcode += `</ul>`;

  // 데이터 확인
  // console.log(hcode);
  // console.log('대상:', posterBox, '미리보기 data:',pData);

  ////// 2.  화면 출력하기 ///////////////
  posterBox.innerHTML = hcode;
})(); ////// 대표이미지 코드 랩핑 구역 종료 ////////////

///////////////////// 5. 최신동영상 파트  ////////////////////////
// 데이터 태그 구성하여 화면 출력하기
////// 최신동영상 코드 랩핑 구역 시작 ////////////
(() => {
  // 5-1. 변경대상 : .clip-box
  const clipBox = myFn.qs(".clip-box");

  // 5-2. 생성코드 변수
  let hcode = `<ul>`;

  // 데이터만큼 순회하여 li코드 만들기
  // 데이터: dkbData.clipData
  dkbData.clipData.forEach((v) => {
    hcode += `
      <li>
        <div class="clip-mv-box">
          <img src="./images/clip_img/${v.idx}.jpg" alt="${v.subtit}">
        </div>
          <h4>${v.subtit}</h4>
          <h3>${v.title}</h3>
      </li>
    `;
  }); //////// foreach //////////////////
  hcode += `</ul>`;

  // 5-3. 화면 출력하기
  clipBox.innerHTML = hcode;
})(); ////// 최신동영상 코드 랩핑 구역 종료 ////////////
