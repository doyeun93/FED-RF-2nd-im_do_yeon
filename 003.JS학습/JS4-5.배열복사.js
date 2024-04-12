///////////////////////////////////////////////////
// JS4-5. 배열의 복사 /////////////////////////////
///////////////////////////////////////////////////

///////////////////////////////////////////////////
////////// 0. 일반값의 변수할당 ////////////////////
///////////////////////////////////////////////////

//////////////////////////////////////////////
// 값이 할당된 변수를 다른 변수에 할당시 
// 할당 내용은 크게 두가지로 나눠진다
// [1] 값할당 : 단일 데이터값(문자,숫자,날짜 등)
// [2] 주소할당 : 배열, 객체 
///////////////////////////////////////////////
// 일반적으로 변수에 값을 할당후 다른변수에 할당하면
// 값이 할당된다!
// 그러나... 배열이나 객체를 할당한 변수를 할당하면
// 할당된 다른변수의 배열/객체값을 변경하면 
// 할당원본이 변경된다! 따라서 주소할당이라고 함!
//////////////////////////////////////////////



console.log('0.일반값의 변수할당');
// 원본 kk
let kk = 10;
//kk를 tt에 할당하면 값 복사일까? 주소 복사일까?
let tt = kk;
console.log('할당 후 최초값:\nkk',kk,'\ntt:',tt);
tt=200;
console.log('tt 변경 후 값:\nkk',kk,'\ntt:',tt);
// 일반적인 값은 값 복사가 맞다. 그러나 배열/객체일 경우 컬렉션 집합을 만들고
// 주소로 관래가 되기때문에 변수에 변수를 할당할 때 값이 아닌 주소가 복사된다


///////////////////////////////////////////////////
// 1. 일반배열의 얕은복사(Shallow Copy) /////////////
///////////////////////////////////////////////////

console.log('1.일반배열의 얕은 복사(Shallow Copy)');
let aa = [11,22,33];
console.log('원본 aa:',aa);

// 배열 변수 aa를 bb에 할당
let bb = aa;
console.log('bb 변경 전 값:\naa',aa,'\nbb:',bb);

// bb의 특정 배열값을 변경
bb[0] = 777;
console.log('bb 변경 후 값:\naa',aa,'\nbb:',bb);


///////////////////////////////////////////////////
// 2.일반배열의 깊은복사(Deep Copy) /////////////////
///////////////////////////////////////////////////

console.log('\n2.일반배열의 깊은 복사(Deep Copy)');
let cc = [55,66,77];
console.log('원본 cc:',cc);
// 배열의 값만 새 변수에 할당하면 깊은 복사가 된다
// 스프레드 연산자(...) 사용 -> [...배열변수]  
// 스프레드 연산자는 배열의 값만 가져온다 
let dd = [...cc];
console.log(' dd 변경 전 값:\ncc',cc,'\ndd:',dd);

// 스프레드 연산자로 값만 복사 후 새 배열의 특정값 변경
dd[0] = 888;
console.log(' dd 변경 후 값:\ncc',cc,'\ndd:',dd);

///////////////////////////////////////////////////
// 3.객체값 배열의 얕은복사(Shallow Copy) ///////////
///////////////////////////////////////////////////

console.log('\n3.객체값 배열의 얕은복사(Shallow Copy)');
let ee = [{ 김: 55 }, { 이: 66 }, { 박: 77 }];
console.log("원본ee", ee);
let ff = ee;
// 배열의 객체값 변경하기
ff[0]["김"] = 999;

console.log(' ff 변경 후 값:\nee',ee,'\nff:',ff);


///////////////////////////////////////////////////
// 4.객체값 배열의 깊은복사(Deep Copy) //////////////
///////////////////////////////////////////////////
console.log('\n4.객체값 배열의 깊은복사(Deep Copy)');
let gg = [{ 송: 99 }, { 정: 87 }, { 최: 54 }];
console.log("원본gg", gg);

// 배열의 깊은 복사인 스프레드 연산자를 사용해서 할당 ==> 주소지가 복사됨
// let hh = [...gg]; -> 효과없음


// 깊은 복사방법은 기존 객체배열값을 문자화하고 다시 객체화한다!
// -> JSON.parse(JSON.stringify(배열값))
// parse() 메서드는 구문은 분석하여 원래구문 형식으로 변환해 주는 역할을 함
// stringify() 메서드는 어떤 값이든 문자화하여 변환해 줌
// 원리: 문자화하는 순간 배열이 값으로 변경되어 새로운 주소지가 된다!
// 다시 이값을 배열로 복원하면 깊은복사 완성!!!
// 객체값을 가지는 배열로 검색/정렬할 때 복사는 깊은복사를 해야 원본손상이 없다!!!!

let hh = JSON.parse(JSON.stringify(gg));

hh[0]["송"] = 888;
console.log(' hh 변경 후 값:\ngg',gg,'\nhh:',hh);