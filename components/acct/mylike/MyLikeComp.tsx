import ResultListComp from "@/components/main/resultArea/ResultListComp";
import ResultTabComp from "@/components/main/resultArea/ResultTabComp";
import { RootState } from "@/store";
import { alertAction } from "@/store/modal/alert-slice";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

type Position = {
  id: string; // 고유 ID
  title: string;
  lat: number;
  lng: number;
  save: boolean;
  numPoints: number;
  detailAt: string; // 상세 위치
  startDate: string; // 시작 날짜 (ISO 형식 문자열)
  endDate: string; // 종료 날짜 (선택적 속성)
};

const MyLikeComp = () => {
  const dispatch = useDispatch();

  const [nowResultTabNum, setNowResultTabNum] = useState(0);
  const selectedTabNum = (tabNum: number) => {
    setNowResultTabNum(tabNum);
  };

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
  }, []);

  return (
    <div className="my-6 m-auto">
      <p className={`w-full text-[25px] font-semibold text-left `}>관심행사</p>
      <div className="space30" />
      <ResultTabComp
        selectedTabNum={selectedTabNum}
        selectList={["국내축제", "세계축제"]}
      />
      <ResultListComp festList={festList} />
    </div>
  );
};
export default MyLikeComp;
