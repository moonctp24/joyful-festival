import { useState } from "react";

type HamProps = {
  isOpen: boolean;
  close: (isOpen: boolean) => void;
};
const HamComp = (prop: HamProps) => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      {prop.isOpen && (
        <div className="popup_common">
          <div
            className="popup"
            style={{ display: prop.isOpen ? "block" : "none", zIndex: 930 }}
          >
            <div className="w-full h-full overflow-hidden bg-white p-4">
              <div className="flex h-full">
                {isLogin ? (
                  <div className="flex">
                    <p className="text-xl text-left text-black pr-0 font-semibold">
                      권예림
                    </p>
                    <p className="text-[17px] text-left text-black font-normal pl-0 mt-2.5">
                      님
                    </p>
                  </div>
                ) : (
                  <div className="flex h-12">
                    <p className="text-xl text-black pr-0 font-semibold">
                      로그인
                    </p>
                    <p className="text-[17px] text-black pl-0 mt-2.5 font-normal ">
                      해주세요
                    </p>
                  </div>
                )}
                <p
                  className="text-xl text-center text-black absolute right-3 cursor-pointer"
                  onClick={() => {
                    prop.close(false);
                  }}
                >
                  X
                </p>
              </div>
              {isLogin ? (
                <div className="w-full h-[500px]">
                  <div className="space20" />
                  <p className="text-[15px] text-left text-black">
                    kwontest@email.com
                  </p>
                  <p className="text-[15px] text-left text-[#9a9a9a]">
                    내 정보 수정 &gt;
                  </p>
                  <div className="w-[326px] h-24">
                    <div className="flex justify-center items-center w-[326px] h-24 absolute left-[35px] top-[167px] gap-2.5 px-[15px] py-2.5 rounded-[5px] bg-[#eeecec]"></div>
                    <div className="w-[31px] h-[25px] absolute left-[317px] top-[231px]">
                      <svg
                        width="11"
                        height="21"
                        viewBox="0 0 11 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute left-[24.19px] top-[6.81px]"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M9.74263 9.46205L3.22222 1.33147C2.65523 0.639509 1.80474 0.639509 1.23774 1.33147C0.670752 2.02344 0.670752 3.06138 1.23774 3.75335L6.76592 10.5L1.23774 17.2467C0.954248 17.5926 0.812499 17.9386 0.812499 18.4576C0.812499 19.4955 1.37949 20.1875 2.22998 20.1875C2.65522 20.1875 2.93872 20.0145 3.22222 19.6685L9.88438 11.5379C10.3096 11.192 10.3096 10.154 9.74263 9.46205Z"
                          fill="black"
                        ></path>
                      </svg>
                    </div>
                    <p className="w-[214.76px] h-[52.67px] absolute left-[53px] top-[189px] text-base text-left text-[#020202]">
                      관심행사
                    </p>
                  </div>
                </div>
              ) : (
                <div className="w-full h-[500px]" />
              )}
              {isLogin ? (
                <div>
                  <svg
                    width="full"
                    height="1"
                    viewBox="0 0 390 1"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M-2 0.5L391 0.500034"
                      stroke="black"
                      stroke-width="0.5"
                    ></path>
                  </svg>
                  <p
                    className="text-xl text-left text-black cursor-pointer font-semibold"
                    onClick={() => setIsLogin(false)}
                  >
                    로그아웃
                  </p>
                </div>
              ) : (
                <div className="flex">
                  <p
                    className="text-xl text-left text-black cursor-pointer font-semibold"
                    onClick={() => setIsLogin(true)}
                  >
                    로그인
                  </p>
                  <p className="text-xl text-left text-black cursor-pointer font-semibold">
                    회원가입
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HamComp;
