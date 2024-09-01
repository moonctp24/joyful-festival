import { useState } from "react";

import ResultListComp from "./ResultListComp";
import ResultMapComp from "./ResultMapComp";
import ResultTabComp from "./ResultTabComp";

const ResultComp = () => {
  const [nowResultTabNum, setNowResultTabNum] = useState(0);

  const selectedTabNum = (tabNum: number) => {
    setNowResultTabNum(tabNum);
  };

  return (
    <>
      <ResultTabComp selectedTabNum={selectedTabNum} />
      <div className="flex">
        <div className={`${nowResultTabNum === 1 && "mobileHidden"}`}>
          <ResultMapComp />
        </div>
        <div className={`${nowResultTabNum === 0 && "mobileHidden"}`}>
          <ResultListComp />
        </div>
      </div>
    </>
  );
};

export default ResultComp;
