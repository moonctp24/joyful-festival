import { FESTIVAL_DEFAULT_IMAGE } from "@/constants/CONST";
import Image from "next/image";

const FestivalDetail = (props: any) => {
  const { pingClickYN, dtlInfo } = props;

  console.log("clicked22", pingClickYN);

  return (
    <>
      <div className="popup_common">
        <div
          className="popup "
          style={{ display: pingClickYN ? "block" : "none", zIndex: 930 }}
        >
          {pingClickYN && (
            <div className="w-[356px] h-[514px]">
              <div className="flex flex-col justify-center items-center w-[356px] h-[514px] absolute left-[18px] top-[220px] px-5 rounded-[10px] bg-white border border-[#efefef]" />

              <Image
                width={170}
                height={100}
                src={FESTIVAL_DEFAULT_IMAGE}
                alt={"festivalImg"}
                // style={{ width: "150px", height: "150px" }}
                className="w-[289px] h-[163px] absolute left-[54.5px] top-[267.5px] object-cover" // 필요에 따라 이미지 모서리 둥글게 만들기
              ></Image>
              <p className="w-[221px] h-[29px] absolute left-[82px] top-[439px] text-[15px] text-left text-black">
                {dtlInfo.title}
              </p>
              <p className="w-[284px] h-7 absolute left-[60px] top-[493px] text-xs text-left text-black">
                일시
              </p>
              <p className="w-[284px] h-7 absolute left-[60px] top-[521px] text-xs text-left text-black">
                {dtlInfo.startDate} ~ {dtlInfo.endDate}
              </p>
              <p className="w-[284px] h-7 absolute left-[60px] top-[562px] text-xs text-left text-black">
                비용
              </p>
              <p className="w-[284px] h-7 absolute left-[60px] top-[590px] text-xs text-left text-black">
                무료
              </p>
              <p className="w-[284px] h-7 absolute left-[60px] top-[632px] text-xs text-left text-black">
                장소
              </p>
              <p className="w-[284px] h-7 absolute left-[60px] top-[660px] text-xs text-left text-black">
                {dtlInfo.detailAt}
              </p>
              <p className="w-[13.19px] h-[24.28px] absolute left-[343.57px] top-[229.11px] text-xl text-center text-black">
                X
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FestivalDetail;
