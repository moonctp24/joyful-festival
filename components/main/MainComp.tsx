import { NextPage } from "next";

import DropBoxComp from "../comm/select/DropBoxComp";
import MainTabComp from "../comm/tab/MainTabComp";

const MainComp: NextPage = () => {
  const ingYNList = ["개최중여부 선택", "개최중", "개최예정"];
  const monthList = ["개최시기 선택", "1월", "2월", "3월", "4월"];
  const regionList = ["지역 선택", "서울", "인천", "부산"];

  return (
    <>
      <MainTabComp />
      <div>
        <DropBoxComp stateList={ingYNList} />
        <div className="space10" />
        <DropBoxComp stateList={monthList} />
        <div className="space10" />
        <DropBoxComp stateList={regionList} />
      </div>
    </>
  );
};
export default MainComp;
