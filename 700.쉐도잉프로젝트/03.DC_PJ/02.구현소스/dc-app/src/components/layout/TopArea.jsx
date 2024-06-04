// 상단영역 컴포넌트 ///

// gnb데이터 불러오기
import { Link } from "react-router-dom";
import { menu } from "../data/gnb";

// 상단 영역 CSS 불러오기
import "../../css/top_area.scss";
import Logo from "../modules/Logo";


export default function TopArea() {
  //// 코드 리턴 구역
  return (
    <>
      {/* 1.상단영역 */}
      <header className="top-area">
        {/* 로그인 환영메시지 박스 */}
        {/* <div className="logmsg">{logMsg}</div> */}
        {/* 네비게이션 GNB파트 */}
        <nav className="gnb">
          <ul>
            {/* 1. 로고 컴포넌트 */}
            <li>
              <Logo logoStyle="top" />
            </li>
              {menu.map((v,i)=>
              <li key={i}>
                <Link to={v.link}>{v.txt}</Link>
              </li>)}
            {/* 2. GNB 메뉴 데이터 배열로 만들기 */}

          </ul>
        </nav>
      </header>
    </>
  );
} //////////// TopArea 함수 ////////
