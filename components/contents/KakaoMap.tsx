import { Map, MapMarker } from "react-kakao-maps-sdk";

// position과 center_position 타입 정의
type Position = {
  title: string;
  latlng: {
    lat: number;
    lng: number;
  };
  save: boolean;
};

type CenterPosition = {
  lat: number;
  lng: number;
};

type KakaoMapProps = {
  positions: Position[];
  center_position: CenterPosition;
  scaleLevel: number;
  mapSize: {
    width: string;
    height: string;
  };
};

const KakaoMap = (props: KakaoMapProps) => {
  const { positions, center_position, scaleLevel, mapSize } = props;
  return (
    <div className="w-full h-[400px] md:h-[600px]">
      <Map
        center={{
          lat: center_position.lat,
          lng: center_position.lng,
        }}
        style={{ width: "100%", height: "100%" }}
        level={scaleLevel}
      >
        {!!positions &&
          positions.map((position) => (
            <MapMarker
              key={`${position.title}-${position.latlng.lat}-${position.latlng.lng}`}
              position={position.latlng} // 마커를 표시할 위치
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
            />
          ))}
      </Map>
    </div>
  );
};

export default KakaoMap;
