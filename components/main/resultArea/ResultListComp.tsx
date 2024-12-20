import Card from "@/components/contents/Card";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ResultListComp = (props: any) => {
  const festivalInfo = props.festList;
  // console.log(festivalInfo);
  // const festivalDummy = [
  //   {
  //     festivalImg:
  //       "https://lh3.googleusercontent.com/proxy/hmB710GCcPlxDLDU5BmhAlwsQTWR42OP_ANkM4W2CsuL4WF-_CYxYIINGqFBepNM00QC1l2UvLKzu6yb_02tRq54iRcl5SYw6YB-hIszGL4SgvsTXozMUA",
  //     festivalTitle: "부여서동 연꽃축제",
  //     festivalPeriod: "4/11~4/17",
  //   },
  //   {
  //     festivalImg:
  //       "https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/910bb144-bf74-4eee-9e91-8fbcbaf302ac_3.jpg",
  //     festivalTitle: "보령머드축제",
  //     festivalPeriod: "4/11~4/17",
  //   },
  //   {
  //     festivalImg: "",
  //     festivalTitle: "보령머드축제",
  //     festivalPeriod: "4/11~4/17",
  //   },
  //   {
  //     festivalImg: "",
  //     festivalTitle: "보령머드축제",
  //     festivalPeriod: "4/11~4/17",
  //   },
  //   {
  //     festivalImg:
  //       "https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/f6a18fe7-6577-4381-b706-16ee01b02bd8_3.png",
  //     festivalTitle: "대전 빵축제",
  //     festivalPeriod: "4/11~4/17",
  //   },
  //   {
  //     festivalImg:
  //       "https://lh3.googleusercontent.com/proxy/hmB710GCcPlxDLDU5BmhAlwsQTWR42OP_ANkM4W2CsuL4WF-_CYxYIINGqFBepNM00QC1l2UvLKzu6yb_02tRq54iRcl5SYw6YB-hIszGL4SgvsTXozMUA",
  //     festivalTitle: "부여서동 연꽃축제",
  //     festivalPeriod: "4/11~4/17",
  //   },
  //   {
  //     festivalImg:
  //       "https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/910bb144-bf74-4eee-9e91-8fbcbaf302ac_3.jpg",
  //     festivalTitle: "보령머드축제",
  //     festivalPeriod: "4/11~4/17",
  //   },
  //   {
  //     festivalImg: "",
  //     festivalTitle: "보령머드축제",
  //     festivalPeriod: "4/11~4/17",
  //   },
  //   {
  //     festivalImg: "",
  //     festivalTitle: "보령머드축제",
  //     festivalPeriod: "4/11~4/17",
  //   },
  //   {
  //     festivalImg:
  //       "https://kfescdn.visitkorea.or.kr/kfes/upload/contents/db/f6a18fe7-6577-4381-b706-16ee01b02bd8_3.png",
  //     festivalTitle: "대전 빵축제",
  //     festivalPeriod: "4/11~4/17",
  //   },
  // ];

  return (
    <div className="flex flex-wrap justify-between">
      {!!festivalInfo &&
        festivalInfo.map((f: any, index: number) => {
          return <Card key={index} festivalInfo={f} />;
        })}
    </div>
  );
};
export default ResultListComp;
