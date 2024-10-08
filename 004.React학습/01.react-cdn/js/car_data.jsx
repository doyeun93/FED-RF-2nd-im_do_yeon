// 자동차 정보 파일 //////////////

const carInfo = {
  "기아 레이": [
    {
      color: "라잇블루",
      model: "2023년형",
      opt: { filter: "hue-rotate(0deg)" },
    },
    {
      color: "럭셔리와인",
      model: "2025년형",
      opt: { filter: "hue-rotate(109deg)", transform: "rotateY(180deg)" },
    },
    {
      color: "녹차그린",
      model: "2024년형",
      opt: { filter: "hue-rotate(215deg)" },
    },
  ],

  "현대 제네시스": [
    {
      color: "스틸그레이",
      model: "2024년형",
      opt: { filter: "grayscale(1)" },
    },
    {
      color: "레드",
      model: "2025년형",
      opt: { filter: "hue-rotate(117deg)", transform: "rotateY(180deg)" },
    },
    {
      color: "오렌지",
      model: "2024년형",
      opt: { filter: "hue-rotate(146deg)" },
    },
  ],
};

const carImage = {
    "기아 레이":"ray.png",
    "현대 제네시스":"genesis.png",
};

export { carInfo, carImage };
