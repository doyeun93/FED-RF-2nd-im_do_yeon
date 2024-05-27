// 보그 PJ 메인 JS - main.js


// 상단영역 불러오기
import TopArea from "./components/TopArea";

// 메인영역 불러오기
import MainArea from "./components/MainArea";

// 아이템 영역 불러오기
import ItemsArea from "./components/ItemsArea";

// 하단영역 불러오기
import FooterArea from "./components/FooterArea";


// import mFn from "./my_function.js";

// [1] 메인페이지 전체 레이아웃 로딩 컴포넌트
function Layout(){
    // 상태관리변수 설정구역
    // [1] 메뉴 변경 상태변수
    const [menu, setMenu] = React.useState("beauty");


    // 리턴 코드구역
    return(
   <React.Fragment>

       {/* 1. 상단영역 컴포넌트 */}
      <TopArea changeMenu = {setMenu}/>
       {/* 2. 메인영역 컴포넌트 */}
       {menu == "home"? <MainArea/> : <ItemsArea catName = { menu }/> }
       {/* 3. 하단영역 컴포넌트 */}
      <FooterArea/>

   </React.Fragment>
    );

} ////// layout 컴포넌트


// 메인 페이지 전체 출력하기
ReactDOM.render(<Layout/>,document.querySelector("#root"));

