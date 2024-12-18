import { FESTIVAL_DEFAULT_IMAGE } from "@/constants/CONST";
import Image from "next/image";
import Heart from "../comm/like/Heart";
import { useState } from "react";

type DtlInfo = {
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

  const [likeYN, setLikeYN] = useState(false);
  const likeClick = (clickYN: boolean) => {
    setLikeYN(clickYN);
  };

  return (
    <>
      {props.isOpen && (
        <div className="popup_common">
          <div className="flex flex-col items-center w-[356px] h-auto p-5 rounded-[10px] bg-white border border-[#efefef]">
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
      )}
    </>
  );
};

export default FestivalDetail;
