import { alertAction } from "@/store/modal/alert-slice";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const SignupComp = () => {
  // const [emailInput, setEmailInput] = useState("test@email.com");
  // const [passwordInput, setPasswordInput] = useState("test123!!");

  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailInput(e.target.value);
  };

  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(e.target.value);
  };

  return (
    <>
      <div className="w-full h-auto overflow-hidden">
        <div className="absolute top-1/2	left-1/2	-mt-[200px] -ml-[250px] w-[500px] h-[400px] bg-white/75">
          <div className="absolute top-1/2	left-1/2	-mt-[150px] -ml-[170px]  flex w-[340px] h-[300px] flex-col justify-start items-center gap-5">
            <p className="text-[40px] text-left text-[#1e90ff]">회원가입</p>
            <input
              type="text"
              placeholder="이름을 입력해 주세요"
              value={emailInput}
              data-key="emailInput"
              onChange={emailChangeHandler}
            />
            <input
              type="text"
              placeholder="이메일을 입력해 주세요"
              value={emailInput}
              data-key="emailInput"
              onChange={emailChangeHandler}
            />
            <input
              type="password"
              placeholder="비밀번호"
              value={passwordInput}
              data-key="passwordInput"
              onChange={passwordChangeHandler}
              // onKeyDown={autoLoginHandler}
            />
            <input
              type="password"
              placeholder="비밀번호"
              value={passwordInput}
              data-key="passwordInput"
              onChange={passwordChangeHandler}
              // onKeyDown={autoLoginHandler}
            />
            <button className="h-11">회원가입</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupComp;
