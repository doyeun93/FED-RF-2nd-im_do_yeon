// 큐브 애니메이션 js - cube.js

/************************************************************************************ 
  [요구사항 분석]
  1. 버튼을 클릭하여 멈춰있던 큐브를 실행하기(애니메이션 상태업뎃하여 작동시킴)
  2. 이때 버튼은 "살행" -> "정지"로 바뀜
  3. 다시 정지 버튼을 클릭시 돌고있던 큐브의 애니메이션 설정 상태를 변경하여 멈추게 한다
  (버튼은 다시 실행으로 변경)
************************************************************************************/

// 1. 대상 선정
// 1-1. 이벤트 대상 : .btngo
const btngo = document.querySelector(".btngo");

// 1-2. 변경대상 : .cube
const cube = document.querySelector(".cube");

// console.log("대상:",btngo,cube);

// 2. 이벤트 속성 세팅하기
// 대상 : .btngo -> btngo 변수

// function은 코드 저장소, 변수는 값 저장소
// 이벤트 속성에 익명함수를 할당하면 이벤트 발생시 익명함수 내부의 코드가 실행됨
btngo.onclick = function () {
  // 1. 함수 호출 확인(this는 버튼 자신)
  console.log("나야나", this.innerText);

  // 2. 변경대상 : .cube -> Cube변수
  // 3. 변경내용 : 큐브에 클래스 on을 없으면 넣고 있으면 제거 -> 미리 세팅된 애니 작동/ 멈춤됨
  cube.classList.toggle("on");

  // 큐브 거리변경 변수세팅은 html 요소에 클래스 on을 넣기/빼기하면 적용된다
  document.querySelector('html').classList.toggle("on");



  // classList 는 요소의 클래스만 전문적으로 다뤄주는 JS 내장객체
  // 메서드로  'add(), remove(), toggle() - 넣기 또는 지우기' 이 있다

  // 4. 버튼 글자 변경하기
  // -읽어 온 버튼 글자가 "실행"이면 "정지"
  // "실행"이 아니면 "실행"을 텍스트로 넣는다 -> 조건 연산자(삼항연산자) 사용 : 비?집:놀이동산
  // 두번째 쓴 this.innerText는 값을 읽어와서 조건 연산자를 할당해서 첫번째 쓴 this.innerText에 값을 보여줌
  this.innerText = this.innerText == '실행' ? '정지' : '실행'

 /*  
  = if문으로 사용하기 : 
 if (this.innerText == "실행") {
    this.innerText = "정지";
    cube.classList.add("on");
  } else {
    this.innerText = "실행";
    cube.classList.remove("on");
  } */

}; //// click 이벤트 함수  ////

