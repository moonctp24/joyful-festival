import { FESTIVAL_DEFAULT_IMAGE } from "@/constants/CONST";
import Image from "next/image";

type CardPropsType = {
  festivalInfo: {
    festivalImg: string;
    festivalTitle: string;
    festivalPeriod: string;
  };
};
const Card = (props: CardPropsType) => {
  const festivalImg = props.festivalInfo.festivalImg;
  const festivalTitle = props.festivalInfo.festivalTitle;
  const festivalPeriod = props.festivalInfo.festivalPeriod;

  return (
    <div>
      {/* <div className="w-full aspect-w-1 aspect-h-1 max-w-[150px] sm:max-w-[200px] md:max-w-[300px]"> */}
      <Image
        width={170}
        height={170}
        src={festivalImg.length > 0 ? festivalImg : FESTIVAL_DEFAULT_IMAGE}
        alt={"festivalImg"}
        // style={{ width: "150px", height: "150px" }}
        className="rounded-lg max-w-[150px] md:max-w-[170px] max-h-[150px] md:max-h-[170px]" // 필요에 따라 이미지 모서리 둥글게 만들기
      ></Image>
      {/* </div> */}
      <p className="w-full h-[27px] text-[15px] text-left text-black">
        {festivalTitle}
      </p>
      <p className="w-full h-7 text-xs text-left text-black">
        {festivalPeriod}
      </p>
    </div>
  );
};

export default Card;
