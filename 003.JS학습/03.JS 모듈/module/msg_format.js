// 구체적인 데이터 구성처리를 위한 JS : msg_format.js

// 1. 선언적 함수를 만들고 아래쪽에서 export default하기
// function makeMessage(name,age){
//   return`
//     나의 이름은 ${name}입니다.
//     나이는 ${age}살 입니다. 반갑습니다.'-'<br><br>
//   `;

// } ////// makeMessage 함수 ///////////////



// 내보내기
// export default makeMessage;

// 2. 선언적 함수를 만들고 함수 앞에서 export default 하기
// -> 선언적 함수 형태가 그대로 유지되어야함. 그.러.나 이름은 중요하지않음

// export default function makeMessage(name,age){
//   return`
//     나의 이름은 ${name}입니다.
//     나이는 ${age}살 입니다. 반갑습니다.'-'<br><br>
//   `;

// } ////// makeMessage 함수 ///////////////



// 3. 익명 함수를 만들고 함수 앞에서 export default 하기
// 내보내기할 때 함수명이 중요하지 않으므로 익명함수로 내보내기해도 무방

// export default function(name,age){
//   return`
//     나의 이름은 ${name}입니다.
//     나이는 ${age}살 입니다. 반갑습니다.'-'<br><br>
//   `;

// } ////// makeMessage 함수 ///////////////




// 4. 화살표 함수를 만들고 함수 앞에서 export default 하기
// 내보내기할 때 함수명이 중요하지 않으므로 화살표함수로 내보내기해도 무방
// 이때 화살표함수는 리턴키워드 생략이 가능할 경우 이를 생략한다

export default (name,age)=>
  `
    나의 이름은 ${name}입니다.
    나이는 ${age}살 입니다. 반갑습니다.'-'<br>
  `;

 ////// makeMessage 함수 ///////////////




/*******************************************************************
 *  [선언된 변수를 export default 하기]
 *  1. 일반적으로 선언과 할당을 한 변수는 라애쪽에서 export default로
 *      그 이름을 써주면 된다. 단, 받는 곳에서 import시 이름은 중요치않다
    예))
     const aa = [];
     export default aa;
  
 
    2. 변수 앞에 export default를 쓸 때는 변수 선언과 변수명은 쓸 수 없다
    예))
        // 배열인 경우
        export default [];
        // 객체인 경우
        export default ();
        // 화살표 함수인 경우
        export default ()=>{};
 *******************************************************************/