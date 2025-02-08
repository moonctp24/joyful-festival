/**
 * default Imgae
 */
export const FESTIVAL_DEFAULT_IMAGE = "/images/joyful-festival-icon.png";

/**
 * back server
 */
export const BACK_URL = "https://65fb-14-5-179-154.ngrok-free.app";

/**
 * festival ing Code List
 */
export const ING_YN_LIST = [
  { value: "00", text: "개최중여부 선택" },
  { value: "01", text: "개최중" },
  { value: "02", text: "개최예정" },
  { value: "03", text: "개최종료" },
];
export const ING_YN_TEXT_LIST = ING_YN_LIST.map(
  (i: { value: string; text: string }) => {
    return i.text;
  },
);

/**
 * Month List
 */
export const MONTH_LIST = [
  { value: 0, text: "개최시기 선택" },
  { value: 1, text: "1월" },
  { value: 2, text: "2월" },
  { value: 3, text: "3월" },
  { value: 4, text: "4월" },
  { value: 5, text: "5월" },
  { value: 6, text: "6월" },
  { value: 7, text: "7월" },
  { value: 8, text: "8월" },
  { value: 9, text: "9월" },
  { value: 10, text: "10월" },
  { value: 11, text: "11월" },
  { value: 12, text: "12월" },
];
export const MONTH_TEXT_LIST = MONTH_LIST.map(
  (i: { value: number; text: string }) => {
    return i.text;
  },
);
