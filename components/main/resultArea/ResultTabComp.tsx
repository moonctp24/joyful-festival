import { useState } from "react";

const ResultTabComp = () => {
  const [resultTab, setResultTab] = useState(0);

  return (
    <>
      <div className="ec-base-tab typeLight flex webHidden">
        <div
          className={`text-base font-semibold menu ${
            resultTab === 0 && "selected"
          }`}
          onClick={() => setResultTab(0)}
        >
          지도로보기
        </div>
        <div
          className={`text-base font-semibold menu ${
            resultTab === 1 && "selected"
          }`}
          onClick={() => setResultTab(1)}
        >
          리스트로보기
        </div>
      </div>
    </>
  );
};

export default ResultTabComp;
