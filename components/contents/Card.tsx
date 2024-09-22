import { FESTIVAL_DEFAULT_IMAGE } from "@/constants/CONST";
import Image from "next/image";

type CardPropsType = {
  festivalImg: string;
};
const Card = (props: CardPropsType) => {
  const festivalImg = props.festivalImg;
  return (
    <>
      <Image
        width={50}
        height={50}
        src={festivalImg.length > 0 ? festivalImg : FESTIVAL_DEFAULT_IMAGE}
        alt={"festivalImg"}
        style={{ width: "170px", height: "170px" }}
      ></Image>
      <p className="w-[119px] h-7 text-xs text-left text-black">4/11 ~ 4/17</p>
    </>
  );
};

export default Card;
