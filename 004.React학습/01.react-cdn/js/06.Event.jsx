// 06.Event : 리액트 이벤트

/************************************************************* 
    [ 리액트 이벤트 ]
    1. 일반 HTML DOM 이벤트와 마찬가지로 사용자이벤트 사용가능함
    2. 이벤트 종류: click, change, mouseover 등 일반이벤트
    3. 이벤트 표기법: 캐믈케이스 - 첫글자소문자 단어마다 대문자
    예) onclick -> onClick
    4. 이벤트 핸들러 : 중괄호 안에 작성(중괄호는 JSX표현식영역)
    예) onclick="getIt()" => onClick={getIt}
*************************************************************/

// 나의 함수 불러오기
import mFn from "./my_function";



////  전체 이벤트 적용할 컴포넌트 구성하기 ////////

function EventShow(){

// 컴포넌트 리턴 코드 위에서 이벤트 처리를 위한 
// 함수를 만들어서 사용할 수 있다 ->> 지역함수로 사용됨
// 1. 컴포넌트 내부 함수 
// (1) 소원이 무엇이냐 물어보는 함수
const showAladin = () => {
    console.log('알라딘이 누구야?');
}; ////// showAladin 함수 


// 2. 리턴 코드 만들기 -> 반드시 html을 return 해줘야함
    return(
        <React.Fragment>
            <div id="tbox" style={{textAlign:"center"}}>
                {/* 스타일 인라인 적용시 바깥중괄호는 표현식
                    내부 중괄호는 객체 형식의 스타일 설정임 */}
                <img src="./images/genie.avif" alt="지니" 
                // 마우스 오버시 showAladin 함수 호출
                    onMouseOver={showAladin}
                />
            </div>
        </React.Fragment>
    );

} ///// EventShow 컴포넌트  /////////////////





// 화면 출력하기 ///

ReactDOM.render(<EventShow/>, mFn.qs("#root"));


