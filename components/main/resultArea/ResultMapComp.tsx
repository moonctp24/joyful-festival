import KakaoMap from "@/components/contents/KakaoMap";

const ResultMapComp = () => {
  const dummy_positions = [
    {
      title: "서울역",
      latlng: { lat: 37.55598350918595, lng: 126.97071052518993 },
      save: true,
    },
    {
      title: "부산역",
      latlng: { lat: 35.11453858115033, lng: 129.0395021256271 },
      save: false,
    },
    {
      title: "대구공항",
      latlng: { lat: 35.899994519063625, lng: 128.63936552709234 },
      save: true,
    },
    {
      title: "경주역",
      latlng: { lat: 35.79895638709135, lng: 129.13936777969786 },
      save: false,
    },
    {
      title: "카카오",
      latlng: { lat: 33.450705, lng: 126.570677 },
      save: false,
    },
    {
      title: "생태연못",
      latlng: { lat: 33.450936, lng: 126.569477 },
      save: false,
    },
    {
      title: "텃밭",
      latlng: { lat: 33.450879, lng: 126.56994 },
      save: true,
    },
    {
      title: "근린공원",
      latlng: { lat: 33.451393, lng: 126.570738 },
      save: true,
    },
  ];
  const center_position = {
    // 지도의 중심좌표
    lat: 36.05373270747189,
    lng: 128.07133845435104,
  };
  const scaleLevel = 14; // 지도의 확대 레벨 14: 한국 전체(제주도 포함), 13: 제주도 제외 한국전체, 3: 완전 국소
  // const mapSize = {
  //   width: "100%",
  //   height: "400px",
  // };
  return (
    <KakaoMap
      positions={dummy_positions}
      center_position={center_position}
      scaleLevel={scaleLevel}
      // mapSize={mapSize}
    />
  );
};
export default ResultMapComp;
