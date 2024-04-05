// Racing PJ 메인 JS - main.js

//  json은 js에서 사용하는 객체

// DOM 메서드 모듈( import는 주로 상단에서 사용)
import myFn from './dom.js';

// 메시지 제이슨 파일 불러오기
// -> 어서써 타입 제이슨 (assert {type:'json'}) => 현재 assert에서 with로 바뀜(아직 assert사용 가능)
// => 'assert' is deprecated in import statements and support will be removed in V8 v12.6 and Chrome 126; use 'with' instead
// -> 내가 지은 변수명으로 impoert 후 맨끝에 씀 :  with {type:'json'} (크롬 버전에 따라 assert나 with 사용하기)
import msgTxt from './data_racing.json' with {type:'json'};

// 불러온 것 확인
console.log(myFn,msgTxt);

/********************************************** 
            [ 게임 기능정의 ]
    _________________________________

    1. 게임룰: 거북버튼 클릭하여 거북을
        왼쪽에서 오른쪽으로 이동함
        이때 토끼는 자동으로 이동하여
        결승선에 먼저 도달하는 레이서가 승리함
    2. 토끼의 이동속도는 레벨로 설정함
    3. 결승선 도착은 둘 중 하나가 먼저
        도착할 경우 판별함수에서 결과를
        화면에 출력한다.
    4. 포커스가 버튼에 갈 경우 마우스가
        아닌 키보드 버튼으로 조작할 수 없게함
        (마우스만 사용하도록 함!)
    5. 기본적으로 거북이동버튼 클릭시
        토끼는 자동으로 작동됨!
    6. 토끼이동버튼은 토끼만 미리 작동가능
    7. 처음으로 버튼은 전체를 리셋함
    
**********************************************/

// 1. 대상선정 ///////////////////
// (1) 거북 : #t1
const t1 = myFn.qs('#t1');

// (2) 토끼 : #r1
const r1 = myFn.qs('#r1');

// (3) 버튼 : #btns a
const btns = myFn.qsa('#btns a');

// (4) 레벨 : #level
const level = myFn.qs('#level');

// (5) 메시지박스 : #msg
const msg = myFn.qs('#msg');

// (6) 토끼, 거북 위치값 변수 (한번만 선언하고 콤마로 여러개 할당하기)
let r1pos = 0, t1pos = 0;

// 토끼위치 : r1pos / 거북위치 : t1pos

// console.log('대상:',t1,r1,btns,level,msg);

// 2. 이벤트 설정하기 ////////////
btns.forEach(ele=>{
    myFn.addEvt(ele,'click',goGame);
}); /// for each 메서드 ///////////

/*********************************** 
    함수명: goGame
    기능: 버튼별 기능분기
***********************************/

function goGame() {
 // 1. 버튼 글자 읽기
 let btxt = this.innerText;
 console.log('고고싱', btxt);

} /////////// goGame 함수 ////////////

/*********************************** 
 함수명: goR1
 기능: 토끼자동이동(인터발함수)
 ***********************************/
// 인터발지우기용 변수
let autoI;

function goR1() {

} ///////// goR1함수 //////////////////

/***************************************** 
    함수명: whoWinner
    기능: 기준값 보다 레이서위치값이 큰경우
        승자를 판별하여 메시지를 보여준다!
*****************************************/

 ///////// whoWinner 함수 ////////////////
