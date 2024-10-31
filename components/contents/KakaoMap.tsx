import { useEffect, useState } from "react";
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
  // mapSize: {
  //   width: string;
  //   height: string;
  // };
};

const KakaoMap = (props: KakaoMapProps) => {
  const { positions, center_position, scaleLevel } = props;
  const [mapData, setMapData] = useState<{
    level: number;
    position: {
      lat: number;
      lng: number;
    };
  }>();
  const [bounds, setBounds] = useState<{
    topLat: number;
    bottomLat: number;
    leftLng: number;
    rightLng: number;
  }>();
  const [result, setResult] = useState(scaleLevel);

  useEffect(() => {
    console.log(mapData && mapData.position.lat);
    console.log(mapData && mapData.position.lng);
    console.log(mapData && mapData.level);

    console.log(bounds && bounds.topLat);
    console.log(bounds && bounds.bottomLat);
    console.log(bounds && bounds.leftLng);
    console.log(bounds && bounds.rightLng);

    console.log(result);
  }, [mapData]);
  useEffect(() => {
    console.log(result);
  }, [result]);

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
          setMapData({
            level: map.getLevel(),
            position: {
              lat: map.getCenter().getLat(),
              lng: map.getCenter().getLng(),
            },
          });
          setBounds({
            topLat: map.getBounds().getNorthEast().getLat(),
            bottomLat: map.getBounds().getSouthWest().getLat(),
            rightLng: map.getBounds().getNorthEast().getLng(),
            leftLng: map.getBounds().getSouthWest().getLng(),
          });
        }}
        // onBoundsChanged={(map) => {
        //   const bounds = map.getBounds();
        //   setBounds({
        //     sw: bounds.getSouthWest().toString(),
        //     ne: bounds.getNorthEast().toString(),
        //   });
        // }}
        onZoomChanged={(map) => {
          setResult(map.getLevel());
        }}
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
