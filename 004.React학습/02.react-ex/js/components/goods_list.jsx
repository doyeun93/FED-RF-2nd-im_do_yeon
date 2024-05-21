// 공유신발 데이터 불러오기
import guData from "../data/gu_data";

// console.log(guData);


// [상품 리스트 서브 컴포넌트(서브 컴포넌트는 개별 컴포넌트) : GoodsList] //
// map()메서드는 표현식이라 중괄호 필요
export default function GoodsList({viewDetail, updateIdx}){
    // viewDetail : 부모 컴포넌트가 전달해준 상태변수 viewList를 업데이트하는 setViewList메서드임
    // updateIdx : 부모 컴포넌트의 setIdx 상태관리 변수 메서드 
    return(
    <ul>
     { 
    // 반복요소 li에 key 속성을 쓸 것을 리액트는 필수적이라고 함
    // 어디에 쓰냐? 업데이트시 순번구분을 위함
    // node.js 개발환경에서 안쓰면 에러남  
    guData.map((v,i) => (
        <li key={i}>
          <a href="#" onClick={(e)=> {
            // a요소 기본 이동 막기
            e.preventDefault(); 
            // 상태변수 viewList 업데이트
            // setViewList메서드가 viewDetail로 들어옴
            viewDetail(false);
            // setIdx메서드가 updateIdx로 들어옴
            updateIdx(i);
            }} > 
      {/* onClick={viewDetail(false)} -> 이렇게쓰면 바로 실행되어 상품 리스트는 사라지고 바로 
      상세리스트가 보이므로 익명함수 " ()=> "를 사용하면 상품리스트 클릭시 상세리스트로 이동한다 */}
            <ol className="glist">
              <li>
                <img src={`./images/vans/vans_${v.idx}.jpg`} alt="신발" />
               </li>
              <li>{v.gname}</li>
              <li>가격 : {v.gprice}원</li>
            </ol>
          </a>
        </li>
      ))}  
    </ul>
    );
  
  } //// GoodsList 컴포넌트 //////////////////