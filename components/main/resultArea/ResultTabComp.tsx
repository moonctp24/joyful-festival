import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { nowTabAction } from "@/store/nowTab/nowTab-slice";

const ResultTabComp = () => {
  const dispatch = useDispatch();

  const [nowTab, setNowTab] = useState(0);

  useEffect(() => {
    dispatch(
      nowTabAction.updateNowTab({
        tabNum: nowTab,
      }),
    ),
      [nowTab];
  });

  return (
    <>
      <div className="w-11/12 h-8 flex justify-between items-center my-6 m-auto webHidden">
        <p
          className={`w-[150px] text-[25px] font-semibold text-center cursor-pointer ${
            nowTab === 0 && "text-[#1e90ff]"
          }`}
          onClick={() => setNowTab(0)}
        >
          국내축제
        </p>
        <p
          className={`w-[150px] text-[25px] font-semibold text-center cursor-pointer ${
            nowTab === 1 && "text-[#1e90ff]"
          }`}
          onClick={() => setNowTab(1)}
        >
          세계축제
        </p>
      </div>
      <div>
        <svg
          width="352"
          height="35"
          viewBox="0 0 352 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[352px] h-[35px]"
          preserveAspectRatio="none"
        >
          <line
            x1="1"
            y1="4.37114e-8"
            x2="0.999998"
            y2="35"
            stroke="#1E90FF"
            stroke-width="2"
          ></line>
          <line
            x1="164"
            y1="4.37114e-8"
            x2="164"
            y2="35"
            stroke="#1E90FF"
            stroke-width="2"
          ></line>
          <line x1="2" y1="0.5" x2="163" y2="0.5" stroke="#1E90FF"></line>
          <line x1="164" y1="34.5" x2="352" y2="34.5" stroke="#1E90FF"></line>
        </svg>
      </div>
    </>
  );
};

export default ResultTabComp;
