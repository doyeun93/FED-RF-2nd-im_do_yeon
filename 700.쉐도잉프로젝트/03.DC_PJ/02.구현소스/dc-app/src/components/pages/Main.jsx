// 메인 페이지 컴포넌트 ///

import Banner from "../modules/Banner";

export default function Main(){
    //// 코드 리턴 구역
    return(
        <>
           {/* 1. 배너 컴포넌트
           "main"이름 뒤의 숫자는 1~3사이 랜덤수 */}
           <Banner catName={"main"+Math.ceil(Math.random()*3)}/>
        
           {/*  배너 컴포넌트 */}
           <Banner catName="CHARACTERS"/>
           
        </>
    );
} //////////// Main 함수 ////////