import ResultListComp from "@/components/main/resultArea/ResultListComp";
import ResultTabComp from "@/components/main/resultArea/ResultTabComp";
import DUMMY_FESTIVAL_LIST from "@/constants/dummy";
import { RootState } from "@/store";
import { loginAction } from "@/store/login/login-slice";
import { alertAction } from "@/store/modal/alert-slice";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

type Position = {
  id: string; // 고유 ID
  title: string;
  lat: number;
  lng: number;
  save: boolean;
  //   numPoints: number;
  detailAt: string; // 상세 위치
  startDate: string; // 시작 날짜 (ISO 형식 문자열)
  endDate: string; // 종료 날짜 (선택적 속성)

  offer: string;
  contactNumber: string;
  imageUrl: string;
  homepageUrl: string;
  description: string;
  loadNameAddress: string;
  address: string;
};

const MyLikeComp = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [nowResultTabNum, setNowResultTabNum] = useState(0);
  const selectedTabNum = (tabNum: number) => {
    setNowResultTabNum(tabNum);
    console.log("tab changed: ", nowResultTabNum);
  };

  // 로그인 풀리면 강제 메인화면 이동
  const isLoginYN = useSelector((state: RootState) => state.login.isLogin);
  const [isLogin, setIsLogin] = useState(isLoginYN);
  useEffect(() => {
    const realLoginYN = localStorage.getItem("isLogin") === "Y";
    setIsLogin(realLoginYN);

    if (!(isLogin && realLoginYN)) {
      dispatch(loginAction.logout());
      router.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [festList, setFesList] = useState<Position[]>([]);

  const token2 = useSelector((state: RootState) => state.login.accessToken);
  const [token, setToken] = useState(token2);
  useEffect(() => {
    const token3 = localStorage.getItem("accessToken") || "null";
    setToken(token3);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token2]);

  useEffect(() => {
    const data = {
      token: token,
    };
    axios
      .post("/api/acct/mylike", data)
      .then((response: any) => {
        console.log("mylike 조회 결과");
        console.log(response.data);
        if (response.data.code === 200) {
          setFesList(response);
          dispatch(alertAction.openModal({ cont: response.data.message }));
        } else {
          dispatch(alertAction.openModal({ cont: response.data.message }));
        }
      })
      .catch((error) => {
        console.error(error);
      });
    // setFesList(DUMMY_FESTIVAL_LIST);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="my-6 m-auto">
      <p className={`w-full text-[25px] font-semibold text-left `}>관심행사</p>
      <div className="space30" />
      <ResultTabComp
        selectedTabNum={selectedTabNum}
        selectList={["국내축제", "세계축제"]}
      />
      <div className="space10" />
      <ResultListComp festList={festList} />
    </div>
  );
};
export default MyLikeComp;
