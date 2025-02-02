import { FESTIVAL_DEFAULT_IMAGE } from "@/constants/CONST";
import Image from "next/image";
import Heart from "../comm/like/Heart";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import axios from "axios";
import { alertAction } from "@/store/modal/alert-slice";

type DtlInfo = {
  id: string;
  title: string;
  save?: boolean;
  detailAt?: string; // 상세 위치
  startDate?: string; // 시작 날짜 (ISO 형식 문자열)
  endDate?: string; // 종료 날짜 (선택적 속성)
  festivalImg?: string;
  festivalTitle?: string;
  festivalPeriod?: string;
};
type FstvDtlProps = {
  isOpen: boolean;
  close: (isOpen: boolean) => void;
  dtlInfo: DtlInfo;
};
const FestivalDetail = (props: FstvDtlProps) => {
  const { dtlInfo } = props;

  const dispatch = useDispatch();

  const token2 = useSelector((state: RootState) => state.login.accessToken);
  const [token, setToken] = useState(token2);
  useEffect(() => {
    const token3 = localStorage.getItem("accessToken") || "null";
    setToken(token3);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token2]);

  const [likeYN, setLikeYN] = useState(false);
  const likeClick = (clickYN: boolean) => {
    // const data = {
    //   id: dtlInfo.id,
    //   token: token,
    // };
    // axios
    //   .post("/api/festival/doLike", data)
    //   .then((response: any) => {
    //     console.log("like 결과");
    //     console.log(response.data);
    //     if (response.data.code === 200) {
    //       dispatch(alertAction.openModal({ cont: response.data.message }));
    //       if (clickYN) {
    //         console.log("like success");
    //       } else {
    //         console.log("unlike success");
    //       }
    //       setLikeYN(clickYN);
    //     } else {
    //       dispatch(alertAction.openModal({ cont: response.data.message }));
    //     }
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    setLikeYN(clickYN);
  };

  return (
    <>
      {props.isOpen && (
        <div className="popup_common">
          <div className="popup">
            <div className="py-24">
              <div className="m-auto flex flex-col items-center w-[356px] h-auto p-5 rounded-[10px] bg-white border border-[#efefef]">
                <div className="w-full float-right">
                  <div
                    className="w-6 h-[25px] text-xl text-center text-black float-right cursor-pointer"
                    onClick={() => {
                      props.close(false);
                    }}
                  >
                    X
                  </div>
                </div>
                <div className="w-11/12 h-5/6">
                  <Image
                    width={170}
                    height={100}
                    src={FESTIVAL_DEFAULT_IMAGE}
                    alt={"festivalImg"}
                    // style={{ width: "150px", height: "150px" }}
                    className="w-full max-h-52 object-cover m-auto" // 필요에 따라 이미지 모서리 둥글게 만들기
                  ></Image>
                  <div className="flex w-full p-3">
                    <Heart isClicked={likeYN} like={likeClick} />
                    <h2 className="text-[20px] text-left text-black">
                      {dtlInfo.title}
                    </h2>
                  </div>
                  <div className="w-full py-1">
                    <p className="text-left text-black font-bold">일시</p>
                    <p className="text-left text-black">
                      {dtlInfo.startDate} ~ {dtlInfo.endDate}
                    </p>
                  </div>
                  <div className="w-full py-1">
                    <p className="text-left text-black font-bold">비용</p>
                    <p className="text-left text-black">무료</p>
                  </div>
                  <div className="w-full py-1">
                    <p className="text-left text-black font-bold">장소</p>
                    <p className="text-left text-black">{dtlInfo.detailAt}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FestivalDetail;
