import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { nowTabAction } from "@/store/nowTab/nowTab-slice";

const MainTabComp = () => {
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
  );
};

export default MainTabComp;
