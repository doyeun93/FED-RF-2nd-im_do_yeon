import React, { useState } from "react";
import { Link } from "react-router-dom";

// 회원가입 CSS 불러오기
import "../../css/member.scss";

// 로컬 스토리지 생성 JS
import { initData } from "../func/mem_fn";


function Member(props) {
  // [회원가입 페이지 요구사항]
  // 1. 각 입력항목별로 유효성 검사를 실행함
  // 2. 상태체크를 통하여 적절한 유효성 검사시, 유효성 체크 에러 메시지를 출력한다
  // 3. 유효성 검사 통과시 로컬스에 저장한다
  // -> 특이사항 : 글자를 입력할 때 마다 검사 + submit버튼 작동시 검사



  /////// [상태관리 변수]  ////////////
  // [1] 입력요소 상태변수

  // 1. 아이디변수
  const [userId, setUserId] = useState("");
  // 2. 비밀번호변수
  const [pwd, setPwd] = useState("");
  // 3. 비밀번호확인변수
  const [chkPwd, setChkPwd] = useState("");
  // 4. 사용자이름변수
  const [userName, setUserName] = useState("");
  // 5. 이메일변수
  const [email, setEmail] = useState("");



  // [2] 에러상태관리 변수
  // -> 에러상태값 초기값은 에러아님(false)
  // 1. 아이디변수
  const [userIdError, setUserIdError] = useState(false);
  // 2. 비밀번호변수
  const [pwdError, setPwdError] = useState(false);
  // 3. 비밀번호확인변수
  const [chkPwdError, setChkPwdError] = useState(false);
  // 4. 사용자이름변수
  const [userNameError, setUserNameError] = useState(false);
  // 5. 이메일변수
  const [emailError, setEmailError] = useState(false);



  // [ 아이디관련 메시지 프리셋 ] ////
  const msgId = [
    // 1. 최소 5글자 이상 입력할 것
    "User ID must contain a minimum of 5 characters",
    // 2. 이미 사용중인 아이디임
    "This ID is already in use!",
    // 3. 훌륭한 아이디
    "That's a great ID!",
  ];

  // [ 기타 메시지 프리셋 ]
  const msgEtc = {
    // 비밀번호
    pwd: "5 to 15 digits in the form of special characters, characters, and numbers",
    // 비밀번호확인
    confPwd: "Password verification does not match",
    // 필수입력
    req: "This is a required entry",
    // 이메일
    email: "Please enter a valid email format",
  }; ///// msgEtc ///////


  // [3] 에러메시지 상태변수 : 초기값 msgId[0]
  // -> 기본 메시지가 출력됨
  const [idMsg, setIdMsg] = useState(msgId[0]);


  // [유효성 검사 함수] 
  // 1. 아이디 유효성 검사
  const changeUserId = e => {
    // 입력된 값 읽기
    let val = e.target.value;

    // 1. 아이디 유효성 검사식(따옴표로 싸지 말것!)
    const valid = /^[A-Za-z0-9+]{5,}$/;
    // 유효성 검사방법 : 정규식.test(값)

    // 2. 입력값 확인 : e.target
    // console.log(val);

    // 3. 에러상태 분기하기
    // 3-1. 에러 아닐 때(유효성 검사만 통과한 경우)
    if (valid.test(val)){
        console.log("통과했지만..");
        // 아이디 검사를 위해 기본 데이터 생성 호출
        initData();
        // 로컬스토리지에 "mem-data"가 없으면 초기세팅함

        // 이제 중복 아이디 검사 실행함
        // 1. 로컬스 변수 할당
        let memData = localStorage.getItem("mem-data");

        // 2. 로컬스 객체 변환(-> 문자형이므로 객체변환 필요)
        memData = JSON.parse(memData);
        // -> 배열 데이터로 변환
        // 주의 : JSON 파싱할 때 원본 형식이 제이슨 파일 형식으로 엄격하게 작성되어야 에러가 없음(마지막 , 불허용 등)

        // 3. 배열이니까 현재 입력데이터의 아이디가 기존 배열 값으로 있는지 검사함
        // -> 있으면 true, 없으면 false
        
        // [새로운 배열 메서드 : some()]
        // ->  조건에 맞는 값이 하나만 나오면 true 처리함
        // 비교참고) every()는 하나만 false이면 false 리턴
        // let isT = memData.some(v=> {
        //     console.log("돌아",v.uid);

        //     return v.uid === val});
        
        
        let isT = memData.some((v) => v.uid === val);
        
        console.log("중복있어?",isT);
        // 4. true일 경우 중복데이터 메시지 표시 
        if(isT){
            // 에러메세지 업데이트
            setIdMsg(msgId[1]);
            // 에러상태값 업데이트
            setUserIdError(true);
            
        } /// if ////
        // 5. false일 경우 성공 메시지 표시
        else{
        
            // 에러상태값 업데이트 : 에러가 아님(false)
            setUserIdError(false); 
        }
        // 아이디 에러상태 업데이트(false)
        // setUserIdError(false);
    }
    
    // 3-2. 에러일 때 : 유효성 검사 에러
    else{
        console.log("에러");
        
        // 에러메세지 업데이트
        setIdMsg(msgId[0]);
        // 아이디 에러상태 업데이트(true)
        setUserIdError(true);
    } // else

    // 실제 userId 상태변수값이 업데이트 되어야만 화면에 출력된다
    setUserId(val);

  };


  // 코드 리턴 구역
  return (
    <div className="outbx">
      <section className="membx">
        <h2>Join Us</h2>
        <form action="process.php" method="post">
          <ul>
            <li>
                {/* 1. 아이디 */}
              <label>ID : </label>
              <input type="text" maxLength="20" placeholder="Please enter your ID" value={userId} onChange={changeUserId}/>
              {
              /* 에러일 경우 메시지 출력 */
              // 조건문 && 출력요소
              (userIdError && userId) &&(
              <div className="msg">
                <small style={{color:"red", fontSize:"11px"}}>{idMsg}</small>
              </div>
              )
              }
              {
              /* 통과시 메시지 출력 */
              // 조건문 && 출력요소
              // 조건 추가 : userId가 입력 전일 때 안보임처리
              // userId가 입력전엔 false로 리턴됨
                (!userIdError && userId) &&(
                <div className="msg">
                    <small style={{color:"green", fontSize:"11px"}}>{msgId[2]}</small>
                </div>
                )
              }

            </li>
            <li>
              <label>Password : </label>
              <input
                type="password"
                maxLength="20"
                placeholder="Please enter your Password"
                
              />
            </li>
            <li>
              <label>Confirm Password : </label>
              <input
                type="password"
                maxLength="20"
                placeholder="Please enter your Confirm Password"
                
              />
            </li>
            <li>
              <label>User Name : </label>
              <input type="text" maxLength="20" placeholder="Please enter your Name"  />
            </li>
            <li>
              <label>Email : </label>
              <input type="text" maxLength="50" placeholder="Please enter your Email"  />
            </li>
            <li style={{ overflow: "hidden" }}>
              <button className="sbtn">Submit</button>
            </li>
            <li>
              Are you already a Member?<Link to="/login">Log In</Link>
            </li>
          </ul>
        </form>
      </section>
    </div>
  );
}

export default Member;
