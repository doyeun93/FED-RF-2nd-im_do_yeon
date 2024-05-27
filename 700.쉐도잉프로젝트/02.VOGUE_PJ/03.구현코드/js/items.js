// 보그 PJ 아이템 페이지 JS - items.js


// 상단영역 불러오기
import TopArea from "./components/TopArea";

// 아이템영역 불러오기
import ItemsArea from "./components/ItemsArea";

// 하단영역 불러오기
import FooterArea from "./components/FooterArea";

// import mFn from "./my_function.js";

// [1] 아이템페이지 전체 레이아웃 로딩 컴포넌트
function Layout(){
    // 리턴 코드구역
    return(
   <React.Fragment>

       {/* 1. 상단영역 컴포넌트 */}
      <TopArea/>
       {/* 2. 메인영역 컴포넌트 */}
      <ItemsArea catName="fashion"/>
       {/* 3. 하단영역 컴포넌트 */}
      <FooterArea/>

   </React.Fragment>
    );

} ////// layout 컴포넌트


// 메인 페이지 전체 출력하기
ReactDOM.render(<Layout/>,document.querySelector("#root"));

