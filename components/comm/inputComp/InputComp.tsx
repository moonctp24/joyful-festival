import { useState } from "react";

const InputComp = (props: any) => {
  const [searchWord, setSearchWord] = useState(""); // 검색할 단어

  /**
   * back to parent with input text
   */
  const sendToParent = () => {
    props.getInputTxt(searchWord);
  };

  return (
    <div className="w-[352px] h-[39px] webFilterBtn">
      <input
        type="text"
        id="itemSrch"
        // ref={itemSrch}
        className="ipt"
        placeholder="검색"
        value={searchWord}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchWord(e.target.value)
        }
        onKeyUp={sendToParent}
      />
    </div>
  );
};

export default InputComp;
