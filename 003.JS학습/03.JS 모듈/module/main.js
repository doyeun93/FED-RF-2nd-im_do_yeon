// 모듈 연습 메인 JS -  main.js

// 공통함수 불러오기
import myFn from './my_function.js';


// [import 방법 1 : 보내준 이름 그대로 쓰기] 
// import { mTitle,sTitle,personInfo,mvData } from './text_data.js';

// [import 방법 2 : 별칭지어서 쓰기]  -> 별칭을 지었으면 반드시 별칭으로 사용해야함
// import { mTitle as mTit,sTitle as sTit,personInfo as pInfo,mvData as mvD } from './text_data.js';

// [import 방법 3 : 한꺼번에 불러오기 - * 사용] -> import * as 별칭 from 경로 
// =>>>>>>> 별칭 이름으로 한꺼번에 불러온 값을 객체에 담음
// =>>>>>>> 모듈용 전용객체에 저장하여 객체.변수명(txtData.mTitle) 으로 사용함
import * as txtData from './text_data.js';



// 불러온 객체 확인
// console.log(myFn,mTitle,sTitle,personInfo,mvData);
// console.log(myFn,mTit,sTit,pInfo,mvD);
 console.log(txtData,txtData.mTitle);


// export default로 내보낸 단일 함수 불러오기 
// -> 불러오는 이름이 같지않아도 됨 다른 이름으로 불러와도 출력됨(에러없음)
// import ㅎㅎ from './msg_format.js'; =>> 가넝
  import makeMessage from './msg_format.js';

  console.log(makeMessage);

 /*************************************************** 
    
    [ import 형식 ]
    import 전달변수 from 파일경로;
    1. import 문법을 쓰려면 호출하는 html script 요소에
    type="module" 속성을 반드시 세팅해야한다

    2. 반드시 가져올 모듈JS에서 export를 해줘야함!

    3. from 뒤에 경로는 반드시 상대경로일 경우
    같은 위치일 지라도 ./ 표시를 꼭해야함!(없으면 안나옴!)
    (/,./,../ 표시필수)

    4. 모듈구성은 반드시 서버형식으로 열어야 작동한다!
    (http://...) Live Server로 열기때문에 볼 수 있음!
    -> 로컬파일로 열면 작동안됨!

    [ import의 사용방법]
     1. export default인 경우
        -> import 변수 from 경로 (변수는 내가 지을 수 있음)

     2. export{ } 인 경우
        -> import {보내준 변수명, ......} from 경로

    [ import 시 변수명 변경하기 : 별칭사용하기 ]
    import {전달변수 as 별칭} from 파일경로;
    예) import {mymymy as m} from 파일경로;
    -> 별칭 사용이유:  단순변경요구, 같은이름 변수 피하기

____________________________________________________
    [ 모듈화를 위한 구성 ]
    1. 데이터 처리하기 위한 JS
    -> text_data.js
    2. 구체적인 데이터 구성처리를 위한 JS
    -> msg_format.js

***************************************************/
// DOM 선택함수 객체 불러오기
