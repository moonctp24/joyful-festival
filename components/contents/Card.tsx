import { FESTIVAL_DEFAULT_IMAGE } from "@/constants/CONST";
import Image from "next/image";
import FestivalDetail from "./FestivalDetail";
import { useState } from "react";

type CardPropsType = {
  festivalInfo: {
    id: string;
    festivalImg: string;
    festivalTitle: string;
    festivalPeriod: string;
    title: string;
    startDate: string;
    endDate: string;
  };
};
const Card = (props: CardPropsType) => {
  const festivalImg = props.festivalInfo.festivalImg;
  const festivalTitle = props.festivalInfo.title;
  const festivalPeriod =
    props.festivalInfo.startDate + "~" + props.festivalInfo.endDate;
  const [pingOpen, setPingOpen] = useState(false); // Open YN Festival Detail Popup

  /**
   * Open Festival Detail Popup
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const pingClicked = () => {
    setPingOpen(true);
    document.body.style.overflow = "hidden";
  };
  /**
   * Close Festival Detail Popup
   */
  const pingClosed = () => {
    setPingOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <div>
      <div className="w-40 cursor-pointer">
        <Image
          width={170}
          height={170}
          src={festivalImg?.length > 0 ? festivalImg : FESTIVAL_DEFAULT_IMAGE}
          alt={"festivalImg"}
          // style={{ width: "150px", height: "150px" }}
          className="rounded-lg max-w-[150px] md:max-w-[170px] max-h-[150px] md:max-h-[170px]" // 필요에 따라 이미지 모서리 둥글게 만들기
          onClick={() => pingClicked()}
        ></Image>
        <p className="w-full h-[27px] text-[15px] text-left text-black">
          {festivalTitle}
        </p>
        <p className="w-full h-7 text-xs text-left text-black">
          {festivalPeriod}
        </p>
      </div>

      <FestivalDetail
        isOpen={pingOpen}
        close={pingClosed}
        dtlInfo={props.festivalInfo}
      />
    </div>
  );
};

export default Card;
