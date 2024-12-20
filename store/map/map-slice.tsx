import { createSlice } from "@reduxjs/toolkit";

const initialMapState = {
  ing: "00", // 개최중여부 -  00:전체, 01:개최중, 02:개최예정
  month: 0, // 개최시기 - 0:전체, 1:1월, 2:2월, ..., 12:12월
  region: "지역 선택", // 지역명
  word: "", // 검색어
  centerLat: "36.05373270747189", // 위도(가로선)
  centerLng: "128.07133845435104", // 경도(세로선)
  topLat: "39.601565561258276",
  bottomLat: "32.322965365041576",
  leftLng: "123.71480989020876",
  rightLng: "132.83825363000508",
  mapZoomLevel: 14,
};

const mapSlice = createSlice({
  name: "map",
  initialState: initialMapState,
  reducers: {
    resize: (state, action) => {
      state.centerLat = action.payload.centerLat;
      state.centerLng = action.payload.centerLng;
      state.topLat = action.payload.topLat;
      state.bottomLat = action.payload.bottomLat;
      state.leftLng = action.payload.leftLng;
      state.rightLng = action.payload.rightLng;
      state.mapZoomLevel = action.payload.mapZoomLevel;
    },
    newCondition: (state, action) => {
      state.ing = action.payload.ing;
      state.month = action.payload.month;
      state.region = action.payload.region;
      state.word = action.payload.word;
      console.log("0000000");
    },
  },
});

export const mapAction = mapSlice.actions;

export default mapSlice;
