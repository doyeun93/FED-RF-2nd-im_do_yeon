// 아이템 리스트 컴포넌트 - ItemList.jsx
import React, { useEffect, useState } from "react";
import $ from "jquery";

// 상품 데이터 불러오기
import itemListData from "../../js/data/item_list";

// 공통함수 불러오기
import { addComma } from "../../func/common_fn";

// 컴포넌트 CSS
import "../../css/item_list.scss";
import ItemDetail from "../modules/ItemDetail";
import { useRef } from "react";

function ItemList() {
    // 상태변수 만들기
    // [1] 카테고리 정보
    const [cat, setCat] = useState(itemListData[0].cat);
    // [2] 상품 정보
    const [ginfo, setGinfo] = useState(itemListData[0].ginfo);

    // 상품 고유 번호 참조 변수
    const gIdx = useRef(0); 




  // 화면 랜더링 구역
  useEffect(() => {
    // 전체 스크롤바 살리기
    $("html,body").css({ overflow: "visible" });
  }, []); //// useEffect /////

  // 코드 리턴구역
  return (
    <main id="cont">
      <h1 className="tit">All ITEMS LIST</h1>
      <section>
        <div id="optbx">
          <label htmlFor="men">남성</label>
          <input type="checkbox" className="chkbx" id="men" defaultChecked />
          <label htmlFor="women">여성</label>
          <input type="checkbox" className="chkbx" id="women" defaultChecked />
          <label htmlFor="style">스타일</label>
          <input type="checkbox" className="chkbx" id="style" defaultChecked />
        </div>
        <div className="grid">
            {itemListData.map((v,i) =>
          <div key={i}>
            <a href="#" onClick={(e) => {
                // 기본 이동 막기
                e.preventDefault();
                // 상품 상세 모듈 전달 상태변수 변경
                setCat(v.cat);
                setGinfo(v.ginfo);
                // 상품고유번호 idx 업데이트
                gIdx.current = v.idx;
                // 상세상품정보 박스 보이기
                $(".bgbx").show();
                // console.log("data:",v);
            }}>
                [{i+1}]
                {/* [{v.idx}] */}
              <img src={process.env.PUBLIC_URL+`/images/goods/${v.cat}/${v.ginfo[0]}.png` } alt="dress" />
              <aside>
                <h2>{v.ginfo[1]}</h2>
                <h3>{addComma(v.ginfo[3])}원</h3>
              </aside>
            </a>
          </div>
        )}
        </div>
      </section>
      {/* 상세 상품정보 박스 */}
      <div
        className="bgbx"
        style={{
          position: "fixed",
          top: "0px",
          paddingTop: "12vh 4vw 0",
          boxSizing: "border-box",
          backdropFilter: "blur(8px)",
          width: "100%",
          height: "100vh",
          zIndex: "9999",
        }}
      >
        {/* 아이템 디테일 컴포넌트 불러오기 
        cat - 카테고리, ginfo - 상품정보, 
          dt - 상품데이터, setGinfo - ginfo값 변경메서드
          gIdx - 상품 고유 번호 전달*/}
        <ItemDetail cat={cat} ginfo={ginfo} dt={itemListData} setGinfo={setGinfo} gIdx={gIdx.current}/>
      </div>
    </main>
  );
}

export default ItemList;
