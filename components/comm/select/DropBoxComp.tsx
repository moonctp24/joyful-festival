import { useEffect, useState } from "react";

const DropBoxComp = (props: {
  stateList: Array<string>;
  code: string;
  selectOption: (option: { code: string; value: string }) => void;
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const selectBoxBtnHandler = () => {
    setIsClicked(!isClicked);
  };

  const [selectedValue, setSelectedValue] = useState(props.stateList[0]); // 현재 선택된 status
  useEffect(() => {
    console.log("222222222222: ", props.stateList[0]);
    setSelectedValue(props.stateList[0]);
  }, [props.stateList]);
  const selectedStatusNm = props.stateList?.map(
    (state: string, index: number) => (
      <li key={index}>
        <div
          className="selectbutton"
          onClick={() => answerStateValueSelectedHandler(state)}
        >
          {state}
        </div>
      </li>
    ),
  );

  const answerStateValueSelectedHandler = (state: string) => {
    setSelectedValue(state);
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    const rst = { code: props.code, value: selectedValue };
    console.log("11111111: ", rst);
    props.selectOption(rst);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedValue]);

  return (
    <>
      <div className="w-[352px] h-[39px] webFilterBtn">
        <div className={`select_box ${isClicked && "open"}`} id="select_box">
          <button
            className="select_txt"
            id="select_txt"
            onClick={selectBoxBtnHandler}
          >
            {selectedValue}
          </button>
          {!!selectedStatusNm && (
            <ul className="select_lst">{selectedStatusNm}</ul>
          )}
        </div>
      </div>
    </>
  );
};

export default DropBoxComp;
