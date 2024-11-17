import Image from "next/image";
import FullHeartImg from "@/public/images/fullheart.png";
import EmptyHeart from "@/public/images/emptyheart.png";

type HeartType = {
  isClicked: boolean;
  like: (isClicked: boolean) => void;
};
const Heart = (props: HeartType) => {
  return (
    <>
      {props.isClicked ? (
        <Image
          width={40}
          height={20}
          src={FullHeartImg}
          alt={"fullheartImg"}
          className="py-2"
          style={{ width: "25px", height: "40px" }}
          onClick={() => props.like(false)}
        ></Image>
      ) : (
        <Image
          width={40}
          height={20}
          src={EmptyHeart}
          alt={"fullheartImg"}
          className="py-2"
          style={{ width: "25px", height: "40px" }}
          onClick={() => props.like(true)}
        ></Image>
      )}
    </>
  );
};

export default Heart;
