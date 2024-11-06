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
            <div className="w-11/12 h-full overflow-hidden bg-white">
              <div className="flex">
                {isLogin ? (
                  <div className="flex">
                    <p className="w-[65px] h-6 text-xl text-left text-black">
                      권예림
                    </p>
                    <p className="w-9 h-[25px] text-[17px] text-left text-black">
                      님
                    </p>
                  </div>
                ) : (
                  <div className="flex">
                    <p className="w-[65px] h-6 text-xl text-left text-black">
                      로그인
                    </p>
                    <p className="w-[87px] h-[25px]  text-[17px] text-left text-black">
                      해주세요
                    </p>
                  </div>
                )}
                <p
                  className="w-6 h-[25px] text-xl text-center text-black"
                  onClick={() => {
                    prop.close(false);
                  }}
                >
                  X
                </p>
              </div>
              <div className="w-full h-5/6"></div>
              {isLogin ? (
                <div>
                  <svg
                    width="390"
                    height="1"
                    viewBox="0 0 390 1"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute left-[-2.75px] top-[729.75px]"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M-2 0.5L391 0.500034"
                      stroke="black"
                      stroke-width="0.5"
                    ></path>
                  </svg>
                  <p className="w-[126px] h-[55px] absolute left-[15px] top-[739px] text-xl text-left text-black">
                    로그아웃
                  </p>
                </div>
              ) : (
                <div className="flex h-7">
                  <p className="w-[126px] h-[55px] text-xl text-left text-black">
                    로그인
                  </p>
                  <p className="w-[126px] h-[55px] text-xl text-left text-black">
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
