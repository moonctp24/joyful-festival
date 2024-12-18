import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import DropBoxComp from "../comm/select/DropBoxComp";
import MainTabComp from "./MainTabComp";
import ResultComp from "./resultArea/ResultComp";
import InputComp from "../comm/inputComp/InputComp";
import axios from "axios";

type RootState = {
  nowTab: {
    nowTabNum: number; // `nowTabNum` is always a number
  };
};

const MainComp: NextPage = () => {
  const nowTab = useSelector((state: RootState) => state.nowTab.nowTabNum);

  const ingYNList = ["개최중여부 선택", "개최중", "개최예정"];
  const monthList = [
    "개최시기 선택",
    "1월",
    "2월",
    "3월",
    "4월",
    "1월",
    "2월",
    "3월",
    "4월",
  ];
  const [regionList, setRegionList] = useState([
    "지역 선택",
    "서울",
    "인천",
    "부산",
  ]);

  useEffect(() => {
    // retrieve data if tab number is updated
    if (nowTab === 0) {
      setRegionList(["지역 선택", "서울", "인천", "부산"]);
    } else {
      setRegionList(["나라 선택", "일본", "중국", "영국"]);
    }
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
    const sendData = {
      ing: "01", // 개최중여부 -  00:전체, 01:개최중, 02:개최예정
      month: "3", // 개최시기 - 0:전체, 1:1월, 2:2월, ..., 12:12월
      region: "부산", // 지역명
      word: "불꽃축제", // 검색어
    };
    axios
      .get("/api/getFestivalList", { params: sendData })
      .then((response) => {
        console.log("맵 초기 데이터 조회 결과");
        console.log(response);
        // getNewPingList(response);
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <MainTabComp />
      <div className="webFlex">
        <div className="webFlex webMarginR">
          <DropBoxComp stateList={ingYNList} />
          <div className="space20 webHidden" />
          <DropBoxComp stateList={monthList} />
          <div className="space20 webHidden" />
          <DropBoxComp stateList={regionList} />
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
