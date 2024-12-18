import { useState } from "react";

import ResultListComp from "./ResultListComp";
import ResultMapComp from "./ResultMapComp";
import ResultTabComp from "./ResultTabComp";
import { useSelector } from "react-redux";

type RootState = {
  nowTab: {
    nowTabNum: number; // `nowTabNum` is always a number
  };
};

type Position = {
  id: string; // 고유 ID
  title: string;
  lat: number;
  lng: number;
  save: boolean;
  numPoints: number;
  detailAt: string; // 상세 위치
  startDate: string; // 시작 날짜 (ISO 형식 문자열)
  endDate: string; // 종료 날짜 (선택적 속성)
};

const ResultComp = () => {
  const [festList, setFesList] = useState<Position[]>([]);
  const nowTab = useSelector((state: RootState) => state.nowTab.nowTabNum);
  // console.log(nowTab);
  const [nowResultTabNum, setNowResultTabNum] = useState(0);

  const selectedTabNum = (tabNum: number) => {
    setNowResultTabNum(tabNum);
  };

  const festivalList = (festList: any) => {
    // console.log("parent");
    // console.log(festList);
    setFesList(festList);
  };

  return (
    <>
      <ResultTabComp selectedTabNum={selectedTabNum} />
      <div className="flex">
        <div
          className={`${
            nowResultTabNum === 1 && "mobileHidden"
          } mapWidth webMarginR mt-4 mb-4 p-1`}
        >
          <ResultMapComp festivalList={festivalList} />
        </div>
        <div
          className={`${
            nowResultTabNum === 0 && "mobileHidden"
          } mapWidth webMarginL webOverflow mt-4 mb-4 p-1`}
        >
          <ResultListComp festList={festList} />
        </div>
      </div>
    </>
  );
};

export default ResultComp;
