// js6-1.Date객체와 Math객체 JS

// 나의 함수 불러오기
import mFn from './my_function.js';

// 1. 요구 사항 : 화면에 시간을 찍으시오
// 2. 대상 : .tt
const tt =  mFn.qsa(".tt");
console.log(tt);

// 3. 날짜/시간 찍기

// 함수 최초 호출 -> 함수 호출 호이스팅
showTime();


// 시간 날짜 함수 ///////
function showTime(){
    // 1. 날짜 내장객체로 날짜 객체 인스턴스 생성하기
    const today = new Date();

    // 2. 년도찍기
    tt[0].innerText = today.getFullYear();

} /// showtime 함수 /////////////////////////