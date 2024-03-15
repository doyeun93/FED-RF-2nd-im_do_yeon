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
const btngo = document.querySelector('.btngo');

// 1-2. 변경대상 : .cube
const cube = document.querySelector('.cube');

console.log("대상:",btngo,cube);
