import { useState } from "react";

type HamProps = {
  isOpen: boolean;
  close: (isOpen: boolean) => void;
};
const HamComp = (prop: HamProps) => {
  const [isLogin, setIsLogin] = useState(true);

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
              <div className="w-full h-[500px]">ㅇㅇㅇ</div>
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
                  <p className="text-xl text-left text-black cursor-pointer font-semibold">
                    로그아웃
                  </p>
                </div>
              ) : (
                <div className="flex">
                  <p className="text-xl text-left text-black cursor-pointer font-semibold">
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
