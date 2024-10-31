import axios from "axios";
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
};

const KakaoMap = (props: KakaoMapProps) => {
  const { positions, center_position, scaleLevel } = props;
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

  const setNewMapData = (mapInfo: any) => {
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
  };

  useEffect(() => {
    // console.log(mapData && mapData.position.lat);
    // console.log(mapData && mapData.position.lng);
    // console.log(mapData && mapData.mapZoomLevel);

    // console.log(mapData && mapData.topLat);
    // console.log(mapData && mapData.bottomLat);
    // console.log(mapData && mapData.leftLng);
    // console.log(mapData && mapData.rightLng);

    // console.log(mapData && mapData.mapZoomLevel);

    const AXIOS = axios.create({
      withCredentials: true,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });

    const sendData = {
      centerLat: mapData ? mapData.position.lat : center_position.lat, // 위도(가로선)
      centerLng: mapData ? mapData.position.lng : center_position.lng, // 경도(세로선)
      topLat: mapData ? mapData.topLat : 0,
      bottomLat: mapData ? mapData.bottomLat : 0,
      leftLng: mapData ? mapData.leftLng : 0,
      rightLng: mapData ? mapData.rightLng : 0,
      mapZoomLevel: mapData ? mapData.mapZoomLevel : scaleLevel,
    };

    // const res = AXIOS.post(
    //   "http://ec2-3-34-40-99.ap-northeast-2.compute.amazonaws.com/festivals",
    //   JSON.stringify(sendData),
    // );
    console.log(sendData, mapData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mapData]);

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
