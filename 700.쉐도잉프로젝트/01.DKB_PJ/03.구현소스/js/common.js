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
console.log(comboData);


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
