// 가로 방향 스크롤 구현 JS

// 1. 대상 요소 : html, body
const scTarget = $("html, body");

// 2. 스크롤 이벤트 설정 및 기능구현하기
// 제이쿼리에서 전체 스크롤/ 휠 이벤트 작성시 대상은 항상 html, body로 두개 모두 잡아준다
// 참고로 document나 window는 사용안됨
// 이벤트 메서드 : on(이벤트명, 함수)

// 스크롤 위치값변수
let scPos = 0;

// 페이지 개수
let pgCnt = $(".page").length;

// winW : 윈도우 가로크기
// maxLimit : 최대한계값
let winW, maxLimit;

const chgLimit = () => {
    winW = $(window).width();
    // 최대한계값 : 전체 이동 박스 크기 - 화면 가로 크기
    maxLimit = (winW*pgCnt) - winW;

    console.log("window크기:",winW, "/페이지수:",pgCnt,
    "/최대한계값:",maxLimit);
    // 함수내에서 호출 후  리사이즈 이후 또 호출하게끔(리사이즈 업데이트할 때마다 호출됨)

} /// chgLimit 함수 ///

// 최초 한계값 계산함수 호출
 chgLimit();

// 윈도우 사이즈 변경시 한계값 업데이트
$(window).resize(chgLimit);
// resize()메서드 : 리사이즈 이벤트 함수



scTarget.on("wheel",(e) => {
    // 스크롤 이동을 위한 제이쿼리 속성
    // 1. scrollTop : 세로 스크롤 바 위치
    // 2. scrollLeft : 가로 스크롤 바 위치

    // 휠 방향 알아내기(전체 이벤트 객체로부터 얻어옴)
    let delta = event.wheelDelta;
    
    if(delta<0) scPos += 200;
    else scPos -= 200;

    // 한계값 체크
    // (1) 최소 한계 : 0
    if(scPos <= 0) scPos = 0;
    // (2) 최대 한계 : 전체 이동 박스 크기 - 화면 가로 크기
    if(scPos >= maxLimit ) scPos = maxLimit;

    // scPos += 200;
    // scPos = scPos + 200;
    console.log("스위:",scPos,delta);
    

    // animate({CSS설정},시간, 이징, 함수)
    // stop() 메서드 : 큐에 쌓인 애니메이션을 지운다
    // 중간에 쌓인 애니를 지우고 최종 애니만 실행한다
    scTarget.stop().animate(
        // css 설정
        {
            scrollLeft:scPos+"px"
        }, 
        // 시간
        2000, 
        // 이징(가속도 : 처음에 빠르게 나중에 천천히)
        "easeOutQuint");


}); /////// wheel 이벤트 구역 ////////