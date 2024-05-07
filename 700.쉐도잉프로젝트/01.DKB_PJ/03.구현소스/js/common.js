// 공통처리 JS -  common.js

// 나의 함수 불러오기
import mFn from "./my_function.js";

// 공통처리 데이터 불러오기
import comData from "../data/common_data.js";

// 모듈로 호출된 js에서는 다른 외부 js를 import로 호출가능
// import하려는 파일에서 반드시 함수, 변수 등을 export 해야함

import slideFn from "./slide.js";
// GNB 메뉴 데이터 불러오기
import gnbData from "../data/gnb_data.js";
// console.log(gnbData);


// 콤보박스 데이터 불러오기
import comboData from "../data/combo_data.js";
// console.log(comboData);


export default function setElement() {
  // 대상 선정 : #top-area, #ban-area, #spart-menu, #footer-area

  const topArea = mFn.qs("#top-area");
  const banArea = mFn.qs("#ban-area");
  const spartMenu = mFn.qs("#spart-menu");
  const footerArea = mFn.qs("#footer-area");

  // 2. 코드 넣기
  topArea.innerHTML = comData.topArea;
  banArea.innerHTML = comData.banArea;
  spartMenu.innerHTML = comData.spartMenu;
  footerArea.innerHTML = comData.footerArea;

  // 3. 기능 처리 함수 호출하기
  // 3-1. GNB 메뉴 만들기 함수 호출
  makeMenu();
  // 3-2. slideFn 슬라이드 기능함수 호출
  slideFn();

  // 3-3. bindCombo 하단 콤보박스 바인딩 함수 호출
  bindCombo();

} /////////////// setElement 함수



// GNB 메뉴 코드 만들기 함수

function makeMenu() {
  // GNB 메뉴 코드 넣기
  // 대상 : .gnb
  // 데이터 : gnbData는 객체니까 배열용 map()메서드 못씀 -> Object 키배열로 변환해서 사용함
  // 그리고 이 객체의 key는 상위 메뉴이기도 함
  // Object.keys(객체) -> 해당객체의 속성명(키) 배열 생성
  console.log(Object.keys(gnbData));

  mFn.qs(".gnb").innerHTML = `
  <ul>
    ${Object.keys(gnbData)
      .map(
        (v) => `
        <li>
          <a href="#">${v}</a>
          ${
            // 서브메뉴 "없음"이면 빈 값. 아니면 서브메뉴 출력
            // gnbData[키] -> 값을 가져옴
            gnbData[v] == "없음"
              ? ""
              : `
            <div class="smenu">
            <div class="swrap">
              <h2>${v}</h2>
              <ol>
              ${gnbData[v]
                .map(
                  (vSub) => `
                <li>
                  <a href="#">${vSub}</a>
                </li>
                `
                )
                .join("")}
              </ol>
            </div>
          </div>
            `
          }
        </li>
      `
      )
      .join("")}
  </ul>
`;
} ////////// makeMenu 함수 //////////////////



//////// 콤보박스 바인딩 함수 
function bindCombo(){
  // 1. 대상선정 : #brand , #corp 
  const brandBox = document.querySelector("#brand");
  const corpBox = document.querySelector("#corp");
  console.log("콤보바인딩", brandBox,corpBox);

  // 2. 데이터 바인딩하기
  // 2-1. 브랜드 바로가기 콤보박스 : 단순바인딩(option만)
  // 데이터 대상 : comboData.brand

  // 대상 요소 내부 데이터 넣기
  // 배열데이터 .map().join('') -> JS에서만 join사용가능하고 리액트에서는 join을 생략할 수 있다
  brandBox.innerHTML = 
  `<option value="init">브랜드 바로가기</option>`+ 
    comboData.brand.map((v,i)=>`
      <option value="brand${i+1}">${v}</option>
      `).join('');


  // 2-2. 계열사 바로가기 콤보박스 -> 복합바인딩 : optgroup > option
  // 데이터 분석 : 객체로 된 데이터이므로  map()을 쓰려면 객체의 키(key)를 배열로 추출하여 사용한다
  // Object.keys(객체) -> 키 배열
  // 객체의 값을 사용할 경우는 원본객체[키]

  // 데이터 대상 : comboData.corp
  const corpData = Object.keys(comboData.corp);
  console.log(corpData);


  // 데이터 만들어서 넣기 //
  corpBox.innerHTML = 
  `<option value="init">계열사 바로가기</option>`+ 
  corpData.map((v,i)=>`
  <optgroup label="${v}">
  ${
    // 해당 객체의 값은 키배열 값과 매칭함
    // ov변수는 객체가 가지는 배열값임
    comboData.corp[v].map((ov,oi) => `
      <option value="corp${i+1}-${oi+1}">${ov}</option>
      `).join('')
  }
  </optgroup>
 `).join('');


 // 3. 선택박스 선택변경시 링크 이동하기
 // 3-1. 브랜드 바로가기 링크 이동하기
 // 대상 : brandBox 변수
 // 이벤트 : change
 brandBox.addEventListener("change", openwindow); 

 // 3-2. 계열사 바로가기 링크 이동하기
 // 대상 : corpBox 변수
 // 이벤트 : change
 corpBox.addEventListener("change", openwindow); 


} /////////// bindCombo 함수 ///////////


// 링크 이동함수
function openwindow(){
  // 현재 나 자신의 아이디는?
  // console.log(this.id);

  // 0. 옵션값이 "init"일 경우 돌아가
  // if(this.value == "init") return;
  

  // 1. 이동할 주소 : comboData.brandLink 또는 comboData.corpLink 객체 선택
  // 객체 이름 조합을 (아이디명 + "Link")
  // 그 하위에 option값을 url값으로 가져옴
   let url = comboData[this.id+"Link"][this.value];
  console.log("브랜드 어디?", url);


  // 만약 데이터가 없으면 url변수의 값은 세팅되지 못하여 undefined 처리됨
  // 이것을 if문으로 처리하여 아래 새창 띄우기 코드를 감싸준다
  // url값이 세팅되지않으면 새창 열기 코드는 실행되지 않는다. 
  // 따라서 위의 "init" 코드로 별도의 처리가 불필요
  // undefined는 if문에서 false처리됨


  // 2. 선택 option 값의 주소로 이동하기
  // 새창 열기 : window.open(이동할 주소)
  if(url) window.open(url);
  else alert("선택을 변경해 주세요~");
} ////////////////// open window ////////////////


