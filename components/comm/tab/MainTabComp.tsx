import { useState } from "react";

const MainTabComp = () => {
  const [nowTab, setNowTab] = useState(0);

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
