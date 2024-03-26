// 자동스크롤 JS - auto_scroll.js

/************************************************************ 
    [ 자동스크롤 기능정의 ]
    1. 스크롤바가 없는 상태에서 또는 스크롤기능을 막아놓은
    상태에서 마우스 휠 작동시 아래와 같이 기능구현됨
    (1) 휠 내림 : 다음페이지로 이동
    (2) 휠 올림 : 이전페이지로 이동

    2. 스크롤바 첫페이지와 끝페이지에서 이동안함

    [ 자동스크롤 이벤트 ]
    -> wheel 이벤트
    -> 마우스 휠 작동시 발생!
    (이전 이벤트명: mousewheel / DOMMouseScroll(파이어폭스))
    (주의: wheel이벤트는 scroll 이벤트와는 다름
        마우스의 바퀴를 돌릴때 발생함)
************************************************************/

// 1. 전역변수 설정하기
// 1-1. 페이지변수
let pgNum = 0;
// 1-2. 휠 상태변수(true는 막기 , false는 통과)
let stsWheel = false;
// 1-3. .page클래스 요소
const elePage = document.querySelectorAll('.page');
// 1-4. 전체페이지수
const totalCnt = elePage.length;
console.log('대상:', elePage, totalCnt,'개');

//이벤트 연결함수 
// DOM 함수 객체
/* const domFn = {
    // 요소 선택함수
    qs : x => document.querySelector(x), 
    /* = qs : function(x){return document.querySelector(x)}, 
    qsa : x => document.querySelectorAll(x),
}; //// domFn 객체
 */


// 2. 이벤트 등록하기 ////////////
// 대상 : window
// 전체 페이지 휠 이벤트의 대상은 window 이다
// 휠 이벤트 설정
window.addEventListener('wheel',wheelFn,{passive:false});
/*
    [window / document / body 세가지는 기본막기 불가 설정되어 있음]
    -> 그냥 사용시 에러뜸, 이벤트 등록시 패시브모드가 true로 설정됨 
    세팅방법 : 요소.addEventListener(이벤트명, 함수, {passive: true})
    -> 기존엔 passive : false였는데 기본값이 true로 변경됨. 의미는 기본기능 막기 못하게 설정됨 
    -> 변경해서 사용해야함 : 요소.addEventListener(이벤트명, 함수, {passive: false})
*/


/*************************************** 
    함수명: wheelFn
    기능 : 마우스 휠 작동시 페이지이동
***************************************/
function wheelFn(e){ // 이벤트전달변수(자동)
    // 함수호출확인!
    console.log('휠~~~!');

    //// 광 휠 금지 장치
    if(stsWheel) return; // 돌아가
    stsWheel = true;  // 잠금
    setTimeout(() => {
        stsWheel = false; // 잠금해제
    }, 500);
    // 우리는 휠 기본 기능을 막고 자동으로 스크롤을 하나씩 되게 할 것

    e.preventDefault();
    // -> passive:false 설정해야함 (윈도우라서)

    // 1. 휠 방향 알아내기
    let delta = e.wheelDelta;
    // 휠 델타는 이벤트 객체에서 리턴해주는 방향, 이동거리 등의 정보값 
    console.log('델타값:',delta);
    // -> 마이너스가 아랫방향

    // 2. 방향별 분기하기
    if(delta<0){
        // 아래페이지로 가야하니까 페이지번호 증가
        pgNum++;
    } // if////
    else{
        // 반대는 윗방향이니까 페이지번호 감소
        pgNum--;
    } // else //////
    console.log('pgNum: ', pgNum);
} /////////// wheelFn 함수 ////////////////
///////////////////////////////////////////
