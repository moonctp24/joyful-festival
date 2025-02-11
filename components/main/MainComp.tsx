import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import DropBoxComp from "../comm/select/DropBoxComp";
import MainTabComp from "./MainTabComp";
import ResultComp from "./resultArea/ResultComp";
import InputComp from "../comm/inputComp/InputComp";
import axios from "axios";
import {
  ING_YN_LIST,
  ING_YN_TEXT_LIST,
  MONTH_LIST,
  MONTH_TEXT_LIST,
} from "@/constants/CONST";
import { RootState } from "@/store";
import { mapAction } from "@/store/map/map-slice";
import { alertAction } from "@/store/modal/alert-slice";

const MainComp: NextPage = () => {
  const dispatch = useDispatch();

  const nowTab = useSelector((state: RootState) => state.nowTab.nowTabNum);
  const ing = useSelector((state: RootState) => state.map.ing);
  const month = useSelector((state: RootState) => state.map.month);
  const region = useSelector((state: RootState) => state.map.region);
  const word = useSelector((state: RootState) => state.map.word);

  const centerLat = useSelector((state: RootState) => state.map.centerLat);
  const centerLng = useSelector((state: RootState) => state.map.centerLng);
  const topLat = useSelector((state: RootState) => state.map.topLat);
  const bottomLat = useSelector((state: RootState) => state.map.bottomLat);
  const leftLng = useSelector((state: RootState) => state.map.leftLng);
  const rightLng = useSelector((state: RootState) => state.map.rightLng);
  const mapZoomLevel = useSelector(
    (state: RootState) => state.map.mapZoomLevel,
  );

  const [tmpIng, setTmpIng] = useState(ing);
  const [tmpMonth, setTmpMonth] = useState(month);
  const [tmpRegion, setTmpRegion] = useState(region);

  const code1 = "ing";
  const code2 = "month";
  const code3 = "region";

  // 지역 Drop Box Setting
  const [regionList, setRegionList] = useState(["지역 선택"]);

  useEffect(() => {
    console.log("tab changed");
    const finalregion = ["지역 선택"];
    // retrieve data if tab number is updated
    if (nowTab === 0) {
      axios
        .get("/api/festival/getRegion")
        .then((response) => {
          if (response.data.code === 200) {
            const regionResult = response.data.data;
            regionResult.map((r: any) => {
              finalregion.push(r.name);
            });
          } else {
            dispatch(alertAction.openModal({ cont: response.data.message }));
          }
          setRegionList(finalregion);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setRegionList(["나라 선택", "일본", "중국", "영국"]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nowTab]);

  /**
   * GET INPUT TEXT FROM CHILDREN COMPONENT
   * @param inputTxt 입력한 텍스트
   */
  const getInputTxt = (inputTxt: string) => {
    console.log(inputTxt);
  };

  /**
   * 축제 검색 통신
   */
  const searchFestList = () => {
    dispatch(
      mapAction.newCondition({
        ing: tmpIng,
        month: tmpMonth,
        region: tmpRegion,
      }),
    );
    // dispatch(
    //   mapAction.newCondition({
    //     ing: tmpIng,
    //     month: tmpMonth,
    //     region: tmpRegion,
    //   }),
    // );
    // dispatch(
    //   mapAction.newCondition({
    //     ing: tmpIng,
    //     month: tmpMonth,
    //     region: tmpRegion,
    //   }),
    // );

    const sendData = {
      ing: tmpIng, // 개최중여부
      month: tmpMonth, // 개최시기
      region: tmpRegion, // 지역명
      word: word, // 검색어
      centerLat: centerLat, // 위도(가로선)
      centerLng: centerLng, // 경도(세로선)
      topLat: topLat,
      bottomLat: bottomLat,
      leftLng: leftLng,
      rightLng: rightLng,
      mapZoomLevel: mapZoomLevel,
    };
    axios
      .get("/api/festival/getFestivalList", { params: sendData })
      .then((response) => {
        console.log("맵 초기 데이터 조회 결과");
        console.log(response);
        // getNewPingList(response);
      })
      .catch((error) => console.error(error));
  };

  const selectOption = (option: { code: string; value: string }) => {
    const selectedCode = option.code;
    if (selectedCode === code1) {
      const selectedIngValue = ING_YN_LIST.filter(
        (i) => i.text === option.value,
      ).map((o) => o.value);
      setTmpIng(selectedIngValue[0]);
    } else if (selectedCode === code2) {
      const selectedMonthValue = MONTH_LIST.filter(
        (i) => i.text === option.value,
      ).map((o) => o.value);
      setTmpMonth(selectedMonthValue[0]);
    } else if (selectedCode === code3) {
      setTmpRegion(option.value);
    }
  };

  return (
    <>
      <MainTabComp />
      <div className="webFlex">
        <div className="webFlex webMarginR">
          <DropBoxComp
            stateList={ING_YN_TEXT_LIST}
            code={code1}
            selectOption={selectOption}
          />
          <div className="space20 webHidden" />
          <DropBoxComp
            stateList={MONTH_TEXT_LIST}
            code={code2}
            selectOption={selectOption}
          />
          <div className="space20 webHidden" />
          <DropBoxComp
            stateList={regionList}
            code={code3}
            selectOption={selectOption}
          />
          <div className="space20 webHidden" />
          <InputComp defaultPlaceholder={"축제명"} getInputTxt={getInputTxt} />
        </div>
        <div className="space30 webHidden" />
        <button className="h-10 webNavBttn" onClick={searchFestList}>
          검색
        </button>
      </div>
      <div className="space30" />
      <ResultComp />
    </>
  );
};
export default MainComp;
