// 옷소매 갤러리 JS - main_jquery.js


/*********************************************************** 
1. 기능정의: 버튼 클릭시 갤러리박스를 잘라서 앞/뒤로 이동함
1-1. 오른쪽버튼 클릭시 : 맨앞div 맨뒤로 이동
-> 제이쿼리 append(뒤에 추가 / 맨앞자식div)
1-2. 왼쪽버튼 클릭시 : 맨뒤div 맨앞으로 이동
-> 제이쿼리 prepend(앞에 추가 / 맨뒤자식div)
 ***********************************************************/


// 1. 대상선정 
// 1-1. 이벤트 대상 : .abtn(이동버튼들)
// 1-2. 변경 대상 : .gbx(갤러리 부모박스)

// 2. 변수 설정하기
// 광클금지 변수(true면 금지, false는 허용)
let stopClick = false;
// 애니 시간(잠금시간)
const TIME_SLIDE = 400;


// 3. 이벤트 설정 및 기능 구현하기
$(".abtn").click(function(){
    if (stopClick) return;
    stopClick = true;
    setTimeout(()=>stopClick=false, TIME_SLIDE);

    // 버튼 자신은 this 키워드 사용
    console.log("나야나",$(this).is(".rb")); // -> is는 ("")를 확인
    // is() 메서드는 선택요소의 클래스 등 확인 기능

    let gbx =  $(".gbx");

    // find()는 하위요소를 모두 선택한다
    // 참고: 직계요소만 선택할때는 children()사용
    // first()는 첫번째, last()는 마지막째, eq(n)는 n번째 요소를 선택함
    
    // 1. 오른쪽 버튼 분기 : 맨 앞 div 맨뒤이동
    if($(this).is(".rb")){
       gbx.append(gbx.find("div").first());
    } // if 

    // 2. 왼쪽 버튼 분기 : 맨 뒤 div 맨앞이동
    else{
        gbx.prepend(gbx.find("div").last());
    } // else

}); ///// click ////////


