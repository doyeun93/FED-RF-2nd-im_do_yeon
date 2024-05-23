// 보그 PJ 메인 JS - main.js

// import mFn from "./my_function.js";

// [1] 메인페이지 전체 레이아웃 로딩 컴포넌트
function Layout(){
    <div>

        // 1. 상단영역 컴포넌트
        <TopArea/>
        // 2. 메인영역 컴포넌트 
        <MainArea/>
        // 3. 하단영역 컴포넌트
        <FooterArea/>

    </div>
} ////// layout 컴포넌트


// [2] 상단영역 서브 컴포넌트 
function TopArea(){
    // 코드 리턴구역 ///
    return(
        
      <header class="top-area ibx common-area">
      {/* <!-- 1-1.상단메뉴 --> */}
      <div class="tmenu">
        {/* <!-- 1-1-1.sns박스 --> */}
        <div class="sns">
          <a href="#" class="fi fi-instagram" title="인스타그램">
            <span class="ir">인스타그램</span>
          </a>
          <a href="#" class="fi fi-facebook" title="페이스북">
            <span class="ir">페이스북</span>
          </a>
          <a href="#" class="fi fi-twitter" title="트위터">
            <span class="ir">트위터</span>
          </a>
          <a href="#" class="fi fi-youtube-play" title="유튜브">
            <span class="ir">유튜브</span>
          </a>

          <a href="#" class="fi fi-laptop" title="로그인">
            <span class="ir">로그인</span>
          </a>
          <a href="#" class="fi fi-user-secret" title="회원가입">
            <span class="ir">회원가입</span>
          </a>
          <a href="#" class="fi fi-camera" title="갤러리">
            <span class="ir">갤러리</span>
          </a>
          <a href="#" class="fi cas" title="카카오스토리">
            <span class="ir">카카오스토리</span>
          </a>
        </div>
        {/* <!-- 1-1-2.사이드메뉴 --> */}
        <div class="sideMenu">
          <ul class="smbx">
            <li>
              <a href="#">SIDE MENU</a>
              {/* <!-- 서브메뉴 --> */}
              <ol class="smsub">
                <li>
                  <a href="#">회사 소개</a>
                </li>
                <li>
                  <a href="#">광고 및 제휴</a>
                </li>
                <li>
                  <a href="#">개인정보 처리방침</a>
                </li>
              </ol>
            </li>
            <li>
              <a href="#">SUBSCRIBE</a>
            </li>
          </ul>
        </div>
      </div>
      {/* <!-- 1-2.로고박스 --> */}
      <h1 class="logo">
        <a href="#">
          <img src="./images/mlogo.png" alt="메인로고" />
        </a>
      </h1>
      {/* <!-- 1-3.GNB박스 --> */}
      <nav class="gnb">
        <ul>
          <li>
            <a href="#">FASHION</a>
          </li>
          <li>
            <a href="#">BEAUTY</a>
          </li>
          <li>
            <a href="#">LIVING</a>
          </li>
          <li>
            <a href="#">PEOPLE</a>
          </li>
          <li>
            <a href="#">VIDEO</a>
          </li>
          <li>
            <a href="#">RUNWAY</a>
          </li>
          <li>
            <a href="#">TIME &amp; GEM</a>
          </li>
          <li>
            <a href="#">SHOPPING</a>
          </li>
          <li>
            {/* <!-- 돋보기 검색버튼 --> */}
            <i href="#" class="fi fi-search">
              <span class="ir">search</span>
            </i>
          </li>
        </ul>
      </nav>

      {/* <!-- 모바일용 햄버거버튼 --> */}
      {/* <!-- <a href="#" class="mobtn hbtn fi fi-nav-icon"> */}
        {/* <span class="ir">GNB button</span>
      </a> */}
      {/* <!-- 모바일용 검색버튼 --> */}
      {/* <!-- <a href="#" class="mobtn sbtn fi fi-search"> */}
        {/* <span class="ir">search</span>
      </a> --> */}
    </header>
  
    );

} /////// TopArea 컴포넌트


// [3] 메인영역 서브 컴포넌트 
function MainArea(){
    // 코드 리턴구역 ///
    return(
        
    );

} /////// MainArea 컴포넌트

// [4] 하단영역 서브 컴포넌트 
function FooterArea(){
    // 코드 리턴구역 ///
    return(
        
    );

} /////// FooterArea 컴포넌트