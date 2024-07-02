// 전체 레이아웃 컴포넌트 ///

import FooterArea from "./FooterArea";
import MainArea from "./MainArea";
import TopArea from "./TopArea";

export default function Layout(){
    // 상태관리 변수 ///
    // 1. 로그인 상태관리 변수 
    

    //// 코드 리턴 구역
    return(
        <>
        {/* 1. 상단영역 */}
        <TopArea/>
        {/* 2. 메인영역 */}
        <MainArea/>
        {/* 3. 하단영역 */}
        <FooterArea/>
        </>
    );
} //////////// layout 함수 ////////