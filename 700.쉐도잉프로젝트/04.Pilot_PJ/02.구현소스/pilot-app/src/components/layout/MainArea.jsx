import React from "react";
import MainCont from "../pages/MainCont";
import Fashion from "../pages/Fashion";

function MainArea({ page }) {
  // page 페이지 변경 문자값 전달
  // 5가지 값 : main / glist / men / women / style
  console.log("메인전달page:" , page);

  /// 코드 리턴 구역
  return (
    <>
      {/* 조건 출력으로 페이지 분기 */}
      {page == "main" && <MainCont />}
      {
     ( page == "men" || 
      page == "women" || 
      page == "style"  )
      
      && <Fashion subCat={page} />}
    </>
  );
}

export default MainArea;
