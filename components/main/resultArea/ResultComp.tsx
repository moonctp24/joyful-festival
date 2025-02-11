import { useState } from "react";

import ResultListComp from "./ResultListComp";
import ResultTabComp from "./ResultTabComp";
import KakaoMap from "@/components/contents/KakaoMap";

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
  const [nowResultTabNum, setNowResultTabNum] = useState(0);

  const selectedTabNum = (tabNum: number) => {
    setNowResultTabNum(tabNum);
  };

  const festivalList = (festList: Position[]) => {
    setFesList(festList);
  };

  const center_position = {
    // 지도의 중심좌표
    lat: 36.05373270747189,
    lng: 128.07133845435104,
  };
  const scaleLevel = 14;

  return (
    <>
      <ResultTabComp
        selectedTabNum={selectedTabNum}
        selectList={["지도로보기", "리스트로보기"]}
      />
      <div className="flex">
        <div
          className={`${
            nowResultTabNum === 1 && "mobileHidden"
          } mapWidth webMarginR mt-4 mb-4 p-1`}
        >
          {/* <ResultMapComp festivalList={festivalList} /> */}
          <KakaoMap
            center_position={center_position}
            scaleLevel={scaleLevel}
            festivalList={festivalList}
            // mapSize={mapSize}
          />
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
