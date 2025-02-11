/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import { useEffect, useState } from "react";
import ClusterImg from "@/public/images/ClusterImg.png";

import { CustomOverlayMap, Map, MapMarker } from "react-kakao-maps-sdk";
import FestivalDetail from "./FestivalDetail";
import Image from "next/image";

// MapInfo Type 정의
type LatLng = {
  getLat: () => number;
  getLng: () => number;
};
type Bounds = {
  getNorthEast: () => LatLng;
  getSouthWest: () => LatLng;
};
type MapInfo = {
  getCenter: () => LatLng;
  getBounds: () => Bounds;
  getLevel: () => number;
};

// position과 center_position 타입 정의
type Position = {
  id: string; // 고유 ID
  title: string;
  lat: number;
  lng: number;
  save: boolean;
  numPoints: number;
  detailAt: string; // 상세 위치
  startDate: string; // 시작 날짜 (ISO 형식 문자열)
  endDate: string; // 종료 날짜 (선택적 속성)
};
type CenterPosition = {
  lat: number;
  lng: number;
};
type KakaoMapProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  festivalList(data: any): unknown;
  center_position: CenterPosition;
  scaleLevel: number;
};
type DtlInfo = {
  id: string;
  title: string;
  // save: boolean;
  detailAt: string; // 상세 위치
  startDate: string; // 시작 날짜 (ISO 형식 문자열)
  endDate?: string; // 종료 날짜 (선택적 속성)
  isLike: boolean; // 좋아요여부
};
const KakaoMap = (props: KakaoMapProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const shareFestivalList = (data: any) => {
    props.festivalList(data);
  };
  const dummy_data = {
    status: true,
    code: 200,
    message: "",
    data: [
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
        id: "c35672e2-d142-4014-930d-7858c117fd96",
        title: "화성시 연등 음악 축제",
        detailAt: "정조효공원",
        offer: "화성시불교사암연합회",
        startDate: "2024-05-04",
        endDate: "2024-05-04",
        contactNumber: "031-5189-3038",
        imageUrl: "",
        homepageUrl: "",
        description: "",
        loadNameAddress: "경기도 화성시 장조1로 34",
        address: "경기도 화성시 안녕동 170-29",
        lat: "37.20663988",
        lng: "126.9959698875",
      },
      {
        id: "8ee6d7c8-fb56-4ec7-8b80-669918208d2c",
        title: "제2회 도농 어울림 축제",
        detailAt: "동탄여울공원",
        offer: "화성시농업기술센터",
        startDate: "2024-09-28",
        endDate: "2024-09-29",
        contactNumber: "031-5189-6335",
        imageUrl: "",
        homepageUrl: "",
        description: "",
        loadNameAddress: "",
        address: "경기도 화성시 오산동 1060",
        lat: "37.1983028211",
        lng: "127.0866204062",
      },
      {
        id: "2bd2f0f1-80cb-4545-9a4c-3f7ff5235351",
        title: "정조 효 문화제 및 정조대왕능행차 공동재현",
        detailAt: "정조효공원, 융건릉 일원",
        offer: "화성시문화재단",
        startDate: "2024-10-05",
        endDate: "2024-10-06",
        contactNumber: "031-5189-3835",
        imageUrl: "",
        homepageUrl: "http://www.정조효문화제.com/",
        description: "",
        loadNameAddress: "경기도 화성시 장조1로 34",
        address: "경기도 화성시 안녕동 170-29",
        lat: "37.20663988",
        lng: "126.9959698875",
      },
      {
        id: "7bb9f50d-afb3-433e-a79b-1ad3e672bce7",
        title: "2024 화성 학생동아리 축제",
        detailAt: "동탄센트럴파크 일원",
        offer: "화성시 인재육성재단",
        startDate: "2024-10-26",
        endDate: "2024-10-26",
        contactNumber: "031-898-8440",
        imageUrl: "",
        homepageUrl: "http://www.hsscf.kr/",
        description: "",
        loadNameAddress: "경기도 화성시 동탄지성로 121",
        address: "경기도 화성시 반송동 43-2",
        lat: "37.20875396",
        lng: "127.0618814",
      },
      {
        id: "5b982dba-6941-411a-a496-38bc0d43da2d",
        title: "제2회 화성 루나 빛 축제",
        detailAt: "동탄호수공원",
        offer: "화성시문화재단",
        startDate: "2024-10-26",
        endDate: "2024-10-26",
        contactNumber: "031-5189-3835",
        imageUrl: "",
        homepageUrl: "",
        description: "",
        loadNameAddress: "경기도 화성시 동탄순환대로 69",
        address: "경기도 화성시 송동 78-2번지",
        lat: "37.16690281",
        lng: "127.1024336",
      },
      {
        id: "b4d4a5b2-9c62-480a-a406-65c0bb371f2a",
        title: "제15회 화성시 가족사랑축제",
        detailAt: "동탄호수공원",
        offer: "화성시문화재단",
        startDate: "2024-04-27",
        endDate: "2024-04-27",
        contactNumber: "031-290-7678",
        imageUrl: "",
        homepageUrl: "https://www.hcf.or.kr",
        description: "",
        loadNameAddress: "경기도 화성시 동탄순환대로 69",
        address: "경기도 화성시 송동 78-2번지",
        lat: "37.16690281",
        lng: "127.1024336",
      },
      {
        id: "e49464af-c236-4b83-b616-71c4d08ba4df",
        title: "대한민국연극제 용인",
        detailAt: "용인포은아트홀+용인문예회관마루홀",
        offer: "한국연극협회 경기도지회+대한민국연극제 집행위",
        startDate: "2024-06-28",
        endDate: "2024-07-23",
        contactNumber: "031-323-6615",
        imageUrl: "",
        homepageUrl: "https://ktf365.org",
        description: "",
        loadNameAddress: "경기도 용인시 수지구 포은대로 499",
        address: "경기도 용인시 수지구 죽전동 1003-43",
        lat: "37.32561804",
        lng: "127.1047625",
      },
      {
        id: "f86d1e43-e028-4197-a23e-fbb8c176566e",
        title: "용인르네상스 광장 축제",
        detailAt: "용인종합운동장",
        offer: "한국연극협회 경기도지회+대한민국연극제 집행위",
        startDate: "2024-06-27",
        endDate: "2024-06-30",
        contactNumber: "031-323-6615",
        imageUrl: "",
        homepageUrl: "https://www.yongin.go.kr",
        description: "",
        loadNameAddress: "경기도 용인시 처인구 경안천로 76",
        address: "경기도 용인시 처인구 마평동 704",
        lat: "37.2385462",
        lng: "127.212483",
      },
      {
        id: "991214be-0c90-4c3e-b49b-0ca6a910ed60",
        title: "처인성문화제",
        detailAt: "처인성 일대(남사읍)",
        offer: "용인문화원",
        startDate: "2024-06-01",
        endDate: "2024-06-02",
        contactNumber: "031-324-2079",
        imageUrl: "",
        homepageUrl: "http://www.ycc50.org/",
        description: "",
        loadNameAddress: "경기도 용인시 처인구 중부대로 1199",
        address: "경기도 용인시 처인구 삼가동 556",
        lat: "37.24086733",
        lng: "127.1779684",
      },
      {
        id: "8f2739f9-5a2c-4b98-9b21-4d674fb918dd",
        title: "포은문화제",
        detailAt: "정몽주 묘역",
        offer: "용인문화원 포은문화제추진위원회",
        startDate: "2024-10-05",
        endDate: "2024-10-06",
        contactNumber: "031-324-2079",
        imageUrl: "",
        homepageUrl: "http://www.ycc50.org/",
        description: "",
        loadNameAddress: "경기도 용인시 처인구 중부대로 1199",
        address: "경기도 용인시 처인구 삼가동 556",
        lat: "37.24086733",
        lng: "127.1779684",
      },
      {
        id: "0dc57a5c-c8a0-4cc7-abd9-b24393f3a1a5",
        title: "용인시민의 날 연계 축제 행사",
        detailAt: "용인미르스타디움",
        offer: "경기도 용인시청",
        startDate: "2024-09-28",
        endDate: "2024-09-29",
        contactNumber: "031-324-2064",
        imageUrl: "",
        homepageUrl: "https://www.yongin.go.kr",
        description: "",
        loadNameAddress: "경기도 용인시 처인구 동백죽전대로 61",
        address: "경기도 용인시 처인구 삼가동 28-6",
        lat: "37.24963097",
        lng: "127.165146",
      },
      {
        id: "187d64bc-66b4-4310-93ed-5e200132e9fa",
        title: "오(oh) 해피 산타 마켓",
        detailAt: "오산역광장+원동구도심상가",
        offer: "경기도 오산시청 문화예술과",
        startDate: "2024-11-22",
        endDate: "2024-12-25",
        contactNumber: "031-8036-7608",
        imageUrl: "",
        homepageUrl: "https://www.osan.go.kr/main.do",
        description: "",
        loadNameAddress: "경기도 오산시 원동로37번길 37-1",
        address: "경기도 오산시 원동 794",
        lat: "37.145359",
        lng: "127.070236",
      },
    ],
    error: null,
  };
  const { center_position, scaleLevel } = props;
  const [positions, setPositions] = useState<Position[]>([]);
  const [posDtlInfo, setPosDtlInfo] = useState<DtlInfo>({
    id: "",
    title: "",
    // save: false,
    detailAt: "",
    startDate: "",
    endDate: "",
    isLike: false,
  });
  const [pingOpen, setPingOpen] = useState(false); // Open YN Festival Detail Popup
  const [mapData, setMapData] = useState<{
    mapZoomLevel: number;
    position: {
      lat: number;
      lng: number;
    };
    topLat: number;
    bottomLat: number;
    leftLng: number;
    rightLng: number;
  }>();

  useEffect(() => {
    const sendData = {
      ing: "00", // 개최중여부 -  00:전체, 01:개최중, 02:개최예정
      month: "0", // 개최시기 - 0:전체, 1:1월, 2:2월, ..., 12:12월
      region: "", // 지역명
      word: "", // 검색어
      centerLat: center_position.lat, // 위도(가로선)
      centerLng: center_position.lng, // 경도(세로선)
      topLat: "39.601565561258276",
      bottomLat: "32.322965365041576",
      leftLng: "123.71480989020876",
      rightLng: "132.83825363000508",
      mapZoomLevel: scaleLevel,
    };
    if (sendData.topLat !== "0") {
      axios
        .get("/api/festival/getFestivalList", { params: sendData })
        .then((response) => {
          getNewPingList(response);
        })
        .catch((error) => console.error(error));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setNewMapData = (mapInfo: MapInfo) => {
    setMapData({
      mapZoomLevel: mapInfo.getLevel(),
      position: {
        lat: mapInfo.getCenter().getLat(),
        lng: mapInfo.getCenter().getLng(),
      },
      topLat: mapInfo.getBounds().getNorthEast().getLat(),
      bottomLat: mapInfo.getBounds().getSouthWest().getLat(),
      rightLng: mapInfo.getBounds().getNorthEast().getLng(),
      leftLng: mapInfo.getBounds().getSouthWest().getLng(),
    });
    const sendData = {
      centerLat: mapInfo.getCenter().getLat(), // 위도(가로선)
      centerLng: mapInfo.getCenter().getLng(), // 경도(세로선)
      topLat: mapInfo.getBounds().getNorthEast().getLat(),
      bottomLat: mapInfo.getBounds().getSouthWest().getLat(),
      leftLng: mapInfo.getBounds().getSouthWest().getLng(),
      rightLng: mapInfo.getBounds().getNorthEast().getLng(),
      mapZoomLevel: mapInfo.getLevel(),
    };

    // const sendData = {
    //   centerLat: mapData ? mapData.position.lat : center_position.lat, // 위도(가로선)
    //   centerLng: mapData ? mapData.position.lng : center_position.lng, // 경도(세로선)
    //   topLat: mapData ? mapData.topLat : 0,
    //   bottomLat: mapData ? mapData.bottomLat : 0,
    //   leftLng: mapData ? mapData.leftLng : 0,
    //   rightLng: mapData ? mapData.rightLng : 0,
    //   mapZoomLevel: mapData ? mapData.mapZoomLevel : scaleLevel,
    // };

    axios
      .get("/api/festival/getFestivalList", { params: sendData })
      .then((response) => {
        getNewPingList(response);
      })
      .catch((error) => console.error(error));
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getNewPingList = (res: any) => {
    setPositions(res ? res.data.data : dummy_data.data);
    shareFestivalList(res.data.data);
  };

  /**
   * Open Festival Detail Popup
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const pingClicked = (pos: any) => {
    setPingOpen(true);
    setPosDtlInfo(pos);
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
    <div className="w-full h-[400px] md:h-[600px]">
      <Map
        center={{
          lat: center_position.lat,
          lng: center_position.lng,
        }}
        style={{ width: "100%", height: "100%" }}
        level={scaleLevel}
        onDragEnd={(map) => {
          setNewMapData(map);
        }}
        // onBoundsChanged={(map) => {
        //   const mapData = map.getBounds();
        //   setBounds({
        //     sw: mapData.getSouthWest().toString(),
        //     ne: mapData.getNorthEast().toString(),
        //   });
        // }}
        onZoomChanged={(map) => {
          setNewMapData(map);
        }}
      >
        {mapData?.mapZoomLevel && mapData.mapZoomLevel > 9
          ? positions &&
            positions.map((position: Position, idx: number) => {
              return (
                <CustomOverlayMap // 커스텀 오버레이를 표시할 Container
                  key={`${idx}-${position.lat}-${position.lng}`}
                  position={{
                    lat: Number(position.lat),
                    lng: Number(position.lng),
                  }} // 마커를 표시할 위치
                >
                  {/* 커스텀 오버레이에 표시할 내용입니다 */}
                  <div
                    style={{
                      position: "relative",
                      width: "30px",
                      height: "30px",
                    }}
                  >
                    {/* 이미지 */}
                    <Image
                      src={ClusterImg}
                      alt="ClusterImg"
                      width={30}
                      height={30}
                      style={{ display: "block" }}
                    />
                    {/* 텍스트 */}
                    <span
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        color: "#fff", // 텍스트 색상
                        fontSize: "12px",
                        fontWeight: "bold",
                        textShadow: "0 0 5px rgba(0, 0, 0, 0.5)", // 가독성 증가
                      }}
                    >
                      {position.numPoints}
                    </span>
                  </div>
                </CustomOverlayMap>
              );
            })
          : positions &&
            positions.map((position: Position) => {
              return (
                <MapMarker
                  key={`${position.id}-${position.lat}-${position.lng}`}
                  position={{
                    lat: Number(position.lat),
                    lng: Number(position.lng),
                  }} // 마커를 표시할 위치
                  image={
                    position.save
                      ? {
                          src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png", // 마커 이미지 주소
                          size: {
                            width: 24,
                            height: 35,
                          }, // 마커 이미지 크기
                        }
                      : undefined // save가 false일 경우 image 프로퍼티 생략
                  }
                  title={position.title} // 마커 타이틀
                  clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
                  onClick={() => pingClicked(position)}
                />
              );
            })}
      </Map>
      <FestivalDetail
        isOpen={pingOpen}
        close={pingClosed}
        dtlInfo={posDtlInfo}
      />
    </div>
  );
};

export default KakaoMap;
