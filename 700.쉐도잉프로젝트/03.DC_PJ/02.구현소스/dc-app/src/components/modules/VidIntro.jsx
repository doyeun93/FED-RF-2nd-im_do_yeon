// DC.com 비디오 소개 모듈

import React from "react";

// 비디오 소개 모듈 데이터 불러오기
import { vidIntroData } from "../data/vid_intro";

// 비디오 소개 모듈 CSS 불러오기
import "../../css/vid_intro.scss";

function VidIntro({ catName, clsName }) {
  // catName : 카테고리명
  // clsName : 클래스명

  // 선택 데이터 변수 할당
  const selData = vidIntroData[catName];

  return (
    <section className={"vidbox " + clsName}>
      <div>
        {/* 1. 비디오 파트 */}
        <div className="vd1">
          <iframe src={selData.vsrc} title={selData.btit}></iframe>
        </div>

        {/* 2. 타이틀 /  설명파트 */}
        <div className="vd2">
          {/* 작은 제목 */}
          <h3>{selData.stit}</h3>
          {/* 큰 제목 */}
          <h2>{selData.btit}</h2>
          {/* 요약소개(링크포함) : sum */}
          <p>{selData.sum}</p>
          {/* 설명(링크포함) : desc */}
          <p>{selData.desc}</p>
        </div>
      </div>
    </section>
  );
}

export default VidIntro;
