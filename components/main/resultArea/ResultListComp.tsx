import Card from "@/components/contents/Card";

const ResultListComp = () => {
  const festivalImg =
    "https://lh3.googleusercontent.com/proxy/hmB710GCcPlxDLDU5BmhAlwsQTWR42OP_ANkM4W2CsuL4WF-_CYxYIINGqFBepNM00QC1l2UvLKzu6yb_02tRq54iRcl5SYw6YB-hIszGL4SgvsTXozMUA";

  return (
    <>
      <div>
        <Card festivalImg={festivalImg} />
        <Card festivalImg="" />
      </div>

      <div className="flex">
        <Card festivalImg="" />
        <Card festivalImg="" />
      </div>

      <div className="flex">
        <Card festivalImg="" />
        <Card festivalImg="" />
      </div>
    </>
  );
};
export default ResultListComp;
