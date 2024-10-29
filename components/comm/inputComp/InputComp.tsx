import { useState } from "react";

type CommImputType = {
  defaultPlaceholder: string;
  getInputTxt: (inputTxt: string) => void;
};
const InputComp = (props: CommImputType) => {
  const [searchWord, setSearchWord] = useState(""); // 검색할 단어

  /**
   * back to parent with input text
   */
  const sendToParent = () => {
    props.getInputTxt(searchWord);
  };

  return (
    <div className="webFilterBtn">
      <input
        type="text"
        className="comm_input_default"
        placeholder={props.defaultPlaceholder}
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
