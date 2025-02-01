import { useEffect, useState } from "react";

type ResultTabCompProps = {
  selectList: Array<string>;
  selectedTabNum: (tabNum: number) => void;
};
const ResultTabComp = (props: ResultTabCompProps) => {
  const [resultTab, setResultTab] = useState(0);

  const selectedTabNum = () => {
    props.selectedTabNum(resultTab);
  };

  useEffect(() => {
    selectedTabNum();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resultTab]);

  return (
    <>
      <div className="ec-base-tab typeLight flex webHidden">
        <div
          className={`text-base font-semibold menu ${
            resultTab === 0 && "selected"
          }`}
          onClick={() => setResultTab(0)}
        >
          {props.selectList ? props.selectList[0] : "첫 번째 탭"}
        </div>
        <div
          className={`text-base font-semibold menu ${
            resultTab === 1 && "selected"
          }`}
          onClick={() => setResultTab(1)}
        >
          {props.selectList ? props.selectList[1] : "두 번째 탭"}
        </div>
      </div>
    </>
  );
};

export default ResultTabComp;
