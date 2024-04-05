//// 도깨비 pj 메인 js - main.js ////

//  부드러운 스크롤 불러오기
import { startSS,setScrollPos } from "./smoothScroll23.js";

// 모듈로 호출된 js에서는 다른 외부 js를 import로 호출가능
// import하려는 파일에서 반드시 함수, 변수 등을 export 해야함

import slideFn from "./slide.js";

/******************************************************
 ******************** 구현 코드 파트 *******************
 ******************************************************/

// 1. 부드러운 스크롤 호출
startSS();

console.log('모듈로 메인 js 호출', document.querySelector('.top-menu'));


// slideFn 슬라이드 기능함수 호출
slideFn();