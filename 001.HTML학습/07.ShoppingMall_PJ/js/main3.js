// 쇼핑몰 배너 JS - 03.페이드효과 //

// DOM 선택함수
const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);

// addEvent 함수
// ele - 요소, evt - 이벤트, fn - 함수
const addEvt = (ele, evt, fn) => ele.addEventListener(evt, fn);

// HTML태그 로딩후 loadFn함수 호출! ///
addEvt(window, "DOMContentLoaded", loadFn);

/******************************************** 
 * 
    [ 페이드 효과 슬라이드 기능정의 ]
    -> 슬라이드 순번에 대한 전역변수를 사용한다!

    1. 오른쪽 버튼클릭시 다음 순번슬라이드에
    클래스 "on"을 줘서 opacity:1, z-index:1
    로 보이며 맨위로 설정해준다!(트랜지션적용)
    ->나머지 li는 모두 "on"을 지워서 초기화!

    2. 왼쪽버튼은 이전순번이 나오며 위와 동일

    3. 끝번호에 가서는 처음은 마지막으로 
    마지막은 처음으로 슬라이드가 다시 반복된다.

    4. 블릿은 현재 슬라이드와 일치된 순번표시

********************************************/

/****************************************** 
    함수명: loadFn
    기능: 로딩후 이벤트설정 및 슬라이드 기능
******************************************/
function loadFn() {
  console.log("로딩완료!");

  // 이동버튼 대상:  .abtn
  const abtn = qsa(".abtn");
  // 변경대상 : #slide
  let slide = qs("#slide");
  // 블릿버튼 : .indic
  let indic =qs(".indic");
  // console.log(abtn,slide);

  // 슬라이드(블릿)개수 상수로 세팅하기
  // 상수는 대문자로 쓰고 단어구분은 언더바로함

  const SLIDE_CNT = 5; 

  // 슬라이드 트랜지션 시간 상수
  const SLIDE_TRANS_TIME = 600;

  // 광클금지 변수
  let stop = false;

  

  //////////// 초기셋팅하기 ////////
  // 5개의 슬라이드와 블릿을 만들어준다!
  for (let i = 0; i < SLIDE_CNT; i++) {
    // 슬라이드 넣기(i가 0이면 클래스에 on을 넣고 아니면 빈값)
    slide.innerHTML += `
    <li ${i === 0?'class="on"':''}> 
        <img 
        src="images/slide0${i + 1}.jpg"         
        alt="slide">
    </li>    
    `;
    // 블릿 넣기
    indic.innerHTML += `
    <li ${i === 0 ? 'class="on"' : ""}>
        <img src="images/dot1.png" alt="흰색">
        <img src="images/dot2.png" alt="회색">
    </li>
    `;
  } ////// for ////////

  // li를 생성한 후 그 li다시 수집한다!
  // (1)슬라이드의 li까지 수집! slide 변수
  slide = qsa('#slide li');
  // (2)블릿의 li까지 수집! indic 변수
  indic = qsa('.indic li');

  // 슬라이드 순번 전역변수
  let snum = 0; 

  // 1. 이벤트 연결 설정하기 
  // 대상: .abtn 
  // 이벤트 : addEvt(대상, 이벤트, 함수) 
  abtn.forEach(ele=>{
    addEvt(ele,'click',goSlide); 

  }); //// for each /////////////

  // 2. 이벤트 처리 함수 만들기
  // (1) 오른쪽 버튼이면 전역슬라이드 변수 snum++;
  // (2) 왼쪽 버튼이면 전역슬라이드 변수 snum--;
  // (3) 이때 한계값을 체크하여 순환되게 함 -> 끝번호 뒤는 첫번호, 첫번호 앞은 끝번호
  // (4) 해당 순번의 슬라이드에 클래스 on 넣기 -> 나머지 슬라이드는 on제거하기(외부함수구성)
  // (5) 블릿 표시자도 슬라이드가 같은 순번에 클래스 on 넣고 나머지는 빼준다(외부함수구성)
  // (6) 자동넘김 구성 함수를 호출하여 인터발호출 작동 -> 버튼 클릭시 인터발지우기/ 일정시간 뒤 인터발 작동
  
  //////////////////  [goSlide] ///////////////////////////////
  function goSlide(){

    ////////////////// 광클 금지 설정 (0.6초동안 광클 막아줌) ///////////////////
    if(stop) return; /// 막기
    stop = true; /// 잠금
    setTimeout(() => {
      stop = false; // 해제
    }, SLIDE_TRANS_TIME);

    // 0. 인터발 지우기 함수 호출
    clearAuto();

    // 1. 오른쪽 버튼 여부
    let isRbtn = this.classList.contains('ab2');
    // 호출확인
    //console.log('오른쪽버튼이니?',isRbtn,this);
    // 2. 버튼에 따른 전역 슬라이드 번호 증감하기
    // (1) 오른쪽 버튼일 경우 증가 ->한계설정 : snum이 개수-1과 같으면 첫번호 0
    if(isRbtn) snum === SLIDE_CNT-1 ? (snum = 0 ) : snum++;
    
    // (2) 왼쪽 버튼일 경우 감소 ->한계설정 : snum이 0보다 작으면 마지막 순번
    else snum === 0 ? (snum = SLIDE_CNT-1)  : snum--;

    console.log('snum:' + snum);
    
    // 3. 슬라이드 순번 클래스 제어함수 호출하기
    setClass(slide,'on',snum)

    // 4. 블릿 순번 클래스 제어함수 호출하기
    setClass(indic,'on',snum)

  } ///// goSlide 함수 //////////////

  // 3. 클래스 제어함수 만들기 
  function setClass(target,className,seq) {
    // target - 변경할 요소대상
    // className - 변경할 클래스명
    // seq - 클래스가 들어갈 순번
    // console.log('대상:',target, '/클래스명:',className, '/순번',seq);

    // 1. 타겟은 HTML 컬렉션이므로 forEach 메서드로 순회함
    target.forEach((ele,idx)=>{
      // 1-1. seq와 idx가 일치할 경우 클래스 넣기
      if(seq===idx) ele.classList.add(className);
     
      // 1-2. 기타의 경우 클래스 제거하기
      else ele.classList.remove(className);

    }); ///// forEach /////////////////
  } ////////////// setClass 함수 /////////////////

  ////////// [블릿 클릭 이벤트 세팅구역] //////////////////
  // 대상 : .indic li -> indic 변수
  // 1. 이벤트 설정하기 : forEach 메서드 사용
  indic.forEach((ele,idx)=>{ 
    // ele: 요소 , idx : 순번
    addEvt(ele,'click',()=>indicSlide(idx));
  }); /////// forEach /////////
  

  // 2. 이벤트 처리함수 만들기
 function indicSlide(seq){
  // seq : 변경할 순번
  console.log('블릿클릭!',seq);

   // (1)인터발 지우기 함수 호출
   clearAuto(); 

   // (2)현재 슬라이드 순번 블릿 순번으로 업데이트
   snum = seq;
   // (3)슬라이드 순번 클래스 제어함수 호출
   setClass(slide,'on',snum);
   // (4)블릿 순번 클래스 제어함수 호출하기(그래야 슬라이드 넘김시 블릿도 같이 넘어가니까)
   setClass(indic,'on',snum);

 } ////////// indicSlide 함수 ////////////





  // [자동넘김 세팅 구역]
  // 인터발용 변수(지울목적)
  let autoI;
  // 타임아웃용 변수(지울목적)
  let autoT;
  // 자동넘김호출 함수 최초호출하기
  autoSlide();


  // 자동 넘김 호출 함수 //////////////////
  function autoSlide(){  
  // setInterval(함수, 시간) : 비동기 함수, 일정시간간격으로 함수 호출
  /* 
  setInterval(() => {
   abtn[1].onclick();
  }, 3000);
  */
  // clearInterval(인터발변수) : 변수에 담긴 인터발을 지움(멈춤)
  autoI = setInterval(() => {
    // 현재 슬라이드 순번 증가
    snum === SLIDE_CNT-1 ? (snum = 0 ) : snum++;
    // 슬라이드 순번 클래스 제어함수 호출
    setClass(slide,'on',snum);
    // 블릿 순번 클래스 제어함수 호출하기(그래야 슬라이드 넘김시 블릿도 같이 넘어가니까)
    setClass(indic,'on',snum);
  }, 3000);

 
} ///////////// autoslide 함수 //////////


/////////// [인터발 지우기 함수 : 버튼 조작시 호출함] /////////////////
function clearAuto(){
  // 지우기 확인
  console.log('인터발 지워!');
  // 1. 인터발 지우기
  clearInterval(autoI);
  // 2. 타임아웃 지우기 : 실행쓰나미 방지
  clearTimeout(autoT);
  
  // 5초후 아무 작동도 안하면 다시 인터발 호출
  autoT = setTimeout(() => {
    autoSlide();
  }, 5000);


} /////////// clearAuto 함수 ///////////

  
} /////////////// loadFn 함수 //////////////
