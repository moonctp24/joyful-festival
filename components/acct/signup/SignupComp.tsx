import { loginAction } from "@/store/login/login-slice";
import { alertAction } from "@/store/modal/alert-slice";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";

const SignupComp = () => {
  // const [emailInput, setEmailInput] = useState("test@email.com");
  // const [passwordInput, setPasswordInput] = useState("test123!!");
  const dispatch = useDispatch();

  const router = useRouter();

  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordConfirmInput, setPasswordConfirmInput] = useState("");

  const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value);
  };

  const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailInput(e.target.value);
  };

  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(e.target.value);
  };

  const passwordConfirmChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setPasswordConfirmInput(e.target.value);
  };

  // 각 입력값에 대한 정합성 확인
  const validationCheck = () => {
    if (!nameInput) {
      dispatch(alertAction.openModal({ cont: "이름이 입력되지 않았습니다" }));
      return false;
    }
    if (!emailInput) {
      dispatch(alertAction.openModal({ cont: "이메일이 입력되지 않았습니다" }));
      return false;
    }
    if (!passwordInput) {
      dispatch(
        alertAction.openModal({ cont: "비밀번호가 입력되지 않았습니다" }),
      );
      return false;
    }
    if (!passwordConfirmInput) {
      dispatch(
        alertAction.openModal({ cont: "비밀번호 확인이 입력되지 않았습니다" }),
      );
      return false;
    }
    return true;
  };

  // 비밀번호 입력 영역에서 Enter 키 누르면 자동 로그인 버튼 클릭로직
  const autoLoginHandler = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      signupBtn();
    }
  };

  // 회원가입 버튼 클릭 -> 회원가입 로직 실행
  const signupBtn = async () => {
    // 정홥성 확인이 완료되면 '회원가입'로직 실행
    if (validationCheck()) {
      const data = {
        name: nameInput,
        email: emailInput,
        password: passwordInput,
        passwordConfirm: passwordConfirmInput,
      };
      axios
        .post("/api/acct/signup", data)
        .then((response) => {
          if (response.data.code === 200) {
            const loginData = response.data.data;
            dispatch(
              loginAction.login({
                userEmail: emailInput,
                userName: nameInput,
                accessToken: loginData.accessToken,
                refreshToken: loginData.refreshToken,
              }),
            );
            dispatch(alertAction.openModal({ cont: response.data.message }));
            router.push("/");
          } else {
            dispatch(alertAction.openModal({ cont: response.data.message }));
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
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
              value={nameInput}
              data-key="nameInput"
              onChange={nameChangeHandler}
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
              placeholder="비밀번호 확인"
              value={passwordConfirmInput}
              data-key="passwordConfirmInput"
              onChange={passwordConfirmChangeHandler}
              onKeyDown={autoLoginHandler}
            />
            <button className="h-11" onClick={signupBtn}>
              회원가입
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupComp;
