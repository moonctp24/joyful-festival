import KakaoMap from "@/components/contents/KakaoMap";

const ResultMapComp = () => {
  const dummy_positions = [
    {
      id: "1d5543cb-b486-4ca4-b99c-2b4b9c0d13d8",
      title: "제61회 수원화성문화제",
      detailAt: "행궁광장 등 수원화성 일원",
      offer: "경기도 수원시+(재)수원문화재단",
      startDate: "2024-10-04",
      endDate: "2024-10-06",
      contactNumber: "031-228-3068",
      imageUrl: "",
      homepageUrl: "https://www.swcf.or.kr/hlfl/",
      description: "",
      loadNameAddress: "경기도 수원시 팔달구 정조로 825",
      address: "경기도 수원시 팔달구 남창동 6-2",
      lat: "37.28188256",
      lng: "127.0143944",
    },
    {
      id: "09b3a30c-efcf-4751-903d-a2dd3f83cb2c",
      title: "2024 수원화성 미디어아트",
      detailAt: "화서문+장안문+장안공원 일대",
      offer: "(재)수원문화재단",
      startDate: "2024-09-28",
      endDate: "2024-10-20",
      contactNumber: "031-228-3084",
      imageUrl: "",
      homepageUrl: "https://www.swcf.or.kr/hlfl/",
      description: "",
      loadNameAddress: "경기도 수원시 팔달구 정조로 825",
      address: "경기도 수원시 팔달구 남창동 6-2",
      lat: "37.2818782",
      lng: "127.0143876",
    },
    {
      id: "6b59e66b-1ecb-4d02-bd1b-a539fad391f3",
      title: "2024 수원음식문화박람회",
      detailAt: "수원화성박물관(예정)",
      offer: "경기도 수원시",
      startDate: "2024-10-04",
      endDate: "2024-10-06",
      contactNumber: "031-228-2233",
      imageUrl: "",
      homepageUrl: "",
      description: "",
      loadNameAddress: "경기도 수원시 팔달구 창룡대로 21",
      address: "경기도 수원시 팔달구 매향동 49",
      lat: "37.282574",
      lng: "127.0189851",
    },
    {
      id: "9d971e19-85e2-44f7-a3eb-f74b922d925f",
      title: "2024 정조대왕 능행차 공동재현",
      detailAt: "서울 경복궁~수원화성~화성 융릉",
      offer: "경기도 수원시+(재)수원문화재단",
      startDate: "2024-10-06",
      endDate: "2024-10-06",
      contactNumber: "031-228-2454",
      imageUrl: "",
      homepageUrl: "https://www.swcf.or.kr/hlfl/",
      description: "",
      loadNameAddress: "경기도 수원시 팔달구 정조로 825",
      address: "경기도 수원시 팔달구 남창동 6-2",
      lat: "37.28188256",
      lng: "127.0143944",
    },
    {
      id: "aa8a9add-aa15-45fa-9817-529441dcd289",
      title: "수원화성문화제",
      detailAt: "화성행궁+행궁광장 등",
      offer: "(재)수원문화재단+수원화성문화제추진위원회",
      startDate: "2024-10-04",
      endDate: "2024-10-06",
      contactNumber: "031-228-3920",
      imageUrl: "",
      homepageUrl: "https://www.swcf.or.kr/shcf/",
      description: "",
      loadNameAddress: "경기도 수원시 팔달구 정조로 825",
      address: "경기도 수원시 팔달구 남창동 6-2",
      lat: "37.2818334",
      lng: "127.0143944",
    },
    {
      title: "서울역",
      lat: 37.55598350918595,
      lng: 126.97071052518993,
      save: true,
    },
    {
      title: "부산역",
      lat: 35.11453858115033,
      lng: 129.0395021256271,
      save: false,
    },
    {
      title: "대구공항",
      lat: 35.899994519063625,
      lng: 128.63936552709234,
      save: true,
    },
    {
      title: "경주역",
      lat: 35.79895638709135,
      lng: 129.13936777969786,
      save: false,
    },
    {
      title: "카카오",
      lat: 33.450705,
      lng: 126.570677,
      save: false,
    },
    {
      title: "생태연못",
      lat: 33.450936,
      lng: 126.569477,
      save: false,
    },
    {
      title: "텃밭",
      lat: 33.450879,
      lng: 126.56994,
      save: true,
    },
    {
      title: "근린공원",
      lat: 33.451393,
      lng: 126.570738,
      save: true,
    },
  ];
  const center_position = {
    // 지도의 중심좌표
    lat: 36.05373270747189,
    lng: 128.07133845435104,
  };
  const scaleLevel = 13; // 지도의 확대 레벨 14: 한국 전체(제주도 포함), 13: 제주도 제외 한국전체, 9: 도시 하나, 3: 골목길 보임
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
