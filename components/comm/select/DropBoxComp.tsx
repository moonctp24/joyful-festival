import { useState } from "react";

const DropBoxComp = (props: { stateList: Array<string> }) => {
  const [isClicked, setIsClicked] = useState(false);
  const selectBoxBtnHandler = () => {
    setIsClicked(!isClicked);
  };

  const [selectedValue, setSelectedValue] = useState<string>(
    props.stateList ? props.stateList[0] : "",
  ); // 현재 선택된 status
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
    // console.log(state);
    setSelectedValue(state);
    setIsClicked(!isClicked);
  };

  return (
    <>
      <div className="w-[352px] h-[39px]">
        <div className="select_box" id="select_box">
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
      </div>
    </>
  );
};

export default DropBoxComp;
