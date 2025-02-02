import { useRouter } from "next/router";
import HamComp from "../hamburger/HamComp";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import axios from "axios";
import { loginAction } from "@/store/login/login-slice";
import { alertAction } from "@/store/modal/alert-slice";

const Header = () => {
  const [hamOpen, setHamOpen] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  /**
   * Open Hamburger
   */
  const hamClick = () => {
    setHamOpen(true);
    document.body.style.overflow = "hidden";
  };
  /**
   * Close Hamburer
   */
  const hamClose = () => {
    setHamOpen(false);
    document.body.style.overflow = "unset";
  };

  const isLoginYN = useSelector((state: RootState) => state.login.isLogin);
  const token2 = useSelector((state: RootState) => state.login.accessToken);
  //  const userName = useSelector((state: RootState) => state.login.userName);
  //  const userEmail = useSelector((state: RootState) => state.login.userEmail);

  const [isLogin, setIsLogin] = useState(isLoginYN);
  const [token, setToken] = useState(token2);
  //  const [name, setName] = useState(userName);
  //  const [email, setEmail] = useState(userEmail);

  useEffect(() => {
    const realLoginYN = localStorage.getItem("isLogin") === "Y";
    const token3 = localStorage.getItem("accessToken") || "null";
    //  const name2 = localStorage.getItem("userName") || "null";
    //  const email2 = localStorage.getItem("userEmail") || "null";

    setIsLogin(realLoginYN);
    setToken(token3);
    //  setName(name2);
    //  setEmail(email2);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoginYN, token2]);

  const goLogin = () => {
    router.push("/acct/login");
  };
  const goSignup = () => {
    router.push("/acct/signup");
  };
  const goMypage = () => {
    router.push("/acct/mypage");
  };
  const goMain = () => {
    router.push("/");
  };
  const goMylike = () => {
    router.push("/acct/mylike");
  };
  const goLogout = () => {
    const data = {
      token: token,
    };
    axios
      .post("/api/acct/logout", data)
      .then((response) => {
        console.log("logout 결과");
        console.log(response.data);
        if (response.data.code === 200) {
          // getNewPingList(response);
          // const loginData = response.data.data;
          dispatch(loginAction.logout());
          // dispatch(alertAction.openModal({ cont: response.data.message }));
          router.push("/");
        } else {
          dispatch(alertAction.openModal({ cont: response.data.message }));
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar__logo">
          <a className="cursor-pointer" onClick={() => router.push("/")}>
            LOGO
          </a>
        </div>
        {isLogin ? (
          <ul className="navbar__icons">
            <li>
              <button className="acctBtn" onClick={goLogin}>
                로그인
              </button>
            </li>
            <li>
              <button className="acctBtn" onClick={goSignup}>
                회원가입
              </button>
            </li>
          </ul>
        ) : (
          <ul className="navbar__icons">
            <li>
              <button className="acctBtn" onClick={goLogout}>
                로그아웃
              </button>
            </li>
            <li>
              <button className="acctBtn" onClick={goMypage}>
                내정보
              </button>
            </li>
          </ul>
        )}
        {/* 햄버거 */}
        <svg
          width="35"
          height="30"
          viewBox="0 0 35 30"
          fill="none"
          className="hamburger"
          preserveAspectRatio="none"
          onClick={hamClick}
        >
          <path
            d="M5.83337 21.25H29.1667M5.83337 15H29.1667M5.83337 8.75H29.1667"
            stroke="#1E90FF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
        {/* 햄버거 */}
      </nav>
      <nav className="navbar_full">
        <ul className="navbar__menu">
          <li>
            <button className="text-xl menuBtn" onClick={goMain}>
              국내축제
            </button>
          </li>
          <li>
            <button className="text-xl menuBtn" onClick={goMain}>
              세계축제
            </button>
          </li>
          <li>
            <button className="text-xl menuBtn" onClick={goMylike}>
              관심행사
            </button>
          </li>
        </ul>
      </nav>
      {/* 가로선 */}
      <svg
        width="100%"
        height="2"
        viewBox="0 0 390 2"
        fill="none"
        className="absolute headerLine"
        preserveAspectRatio="none"
      >
        <path d="M-3 0.999966L390 1" stroke="#1E90FF" strokeWidth="0.2"></path>
      </svg>
      {/* 가로선 */}
      <HamComp isOpen={hamOpen} close={hamClose} />
    </>
  );
};

export default Header;
