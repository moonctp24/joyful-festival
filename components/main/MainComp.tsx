import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import DropBoxComp from "../comm/select/DropBoxComp";
import MainTabComp from "./MainTabComp";
import ResultComp from "./resultArea/ResultComp";
import InputComp from "../comm/inputComp/InputComp";

type RootState = {
  nowTab: {
    nowTabNum: number; // `nowTabNum` is always a number
  };
};

const MainComp: NextPage = () => {
  const nowTab = useSelector((state: RootState) => state.nowTab.nowTabNum);

  const ingYNList = ["개최중여부 선택", "개최중", "개최예정"];
  const monthList = ["개최시기 선택", "1월", "2월", "3월", "4월"];
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
    // const nameParam = {
    //   name: inputTxt,
    // };
    // fetchData("get", "/api/medicineMng/getMdcnList", nameParam, true); // 의약품 리스트 조회 통신
  };

  return (
    <>
      <MainTabComp />
      <div className="webFlex">
        <div className="webFlex mr-3">
          <DropBoxComp stateList={ingYNList} />
          <div className="space10 webHidden" />
          <DropBoxComp stateList={monthList} />
          <div className="space10 webHidden" />
          <DropBoxComp stateList={regionList} />
          <div className="space10 webHidden" />
          <InputComp getInputTxt={getInputTxt} />
        </div>
        <div className="space20 webHidden" />
        <button className="h-10 webNavBttn">검색</button>
      </div>
      <div className="space30" />
      <ResultComp />
    </>
  );
};
export default MainComp;
