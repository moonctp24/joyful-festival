import { RootState } from "@/store";
import { loginAction } from "@/store/login/login-slice";
import { alertAction } from "@/store/modal/alert-slice";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const MypageComp = () => {
  /********** user name, email setting **********/
  const userName = useSelector((state: RootState) => state.login.userName);
  const userEmail = useSelector((state: RootState) => state.login.userEmail);
  const token2 = useSelector((state: RootState) => state.login.accessToken);

  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(userEmail);
  const [token, setToken] = useState(token2);
  useEffect(() => {
    const name2 = localStorage.getItem("userName") || "null";
    const email2 = localStorage.getItem("userEmail") || "null";
    const token3 = localStorage.getItem("accessToken") || "null";

    setName(name2);
    setEmail(email2);
    setToken(token3);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  /********** user name, email setting **********/

  const dispatch = useDispatch();

  const router = useRouter();

  const [passwordInput, setPasswordInput] = useState("");
  const [passwordConfirmInput, setPasswordConfirmInput] = useState("");

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
    if (passwordInput !== passwordConfirmInput) {
      dispatch(
        alertAction.openModal({
          cont: "비밀번호와 비밀번호 확인이 같지 않습니다.",
        }),
      );
      return false;
    }
    return true;
  };

  // 비밀번호 입력 영역에서 Enter 키 누르면 자동 비밀번호 변경 버튼 클릭로직
  const autoLoginHandler = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      changePWBtn();
    }
  };

  // 확인 버튼 클릭 -> 비밀번호 변경 로직 실행
  const changePWBtn = async () => {
    // 정홥성 확인이 완료되면 '비밀번호 변경'로직 실행
    if (validationCheck()) {
      const data = {
        token: token,
        password: passwordInput,
        passwordConfirm: passwordConfirmInput,
      };
      axios
        .post("/api/acct/changepw", data)
        .then((response) => {
          console.log("비밀번호 변경 결과");
          console.log(response.data);
          if (response.data.code === 200) {
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
            <p className="text-[40px] text-left text-[#1e90ff]">내 정보 수정</p>
            <p className="text-[15px] text-left text-black">이름: {name}</p>
            <p className="text-[15px] text-left text-black">이메일: {email}</p>

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
            <button className="h-11" onClick={changePWBtn}>
              확인
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MypageComp;
