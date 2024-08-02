import { FC, useState } from "react";

export const MenuBox: FC = () => {
  const [tab, settab] = useState<number>(1);
  return (
    <div className="my-3 border">
      <div className="flex justify-evenly border-b">
        {tab === 1 ? (
          <div className="p-3 flex-1 text-center border-b text-red-400 border-red-400  ">
            메뉴
          </div>
        ) : (
          <div
            className="p-3 flex-1 text-center border-e"
            onClick={() => {
              settab(1);
            }}
          >
            메뉴
          </div>
        )}
        {tab === 2 ? (
          <div className="p-3 flex-1 text-center border-b text-red-400 border-red-400  ">
            클린리뷰
          </div>
        ) : (
          <div
            className="p-3 flex-1 text-center border-s border-e"
            onClick={() => {
              settab(2);
            }}
          >
            클린리뷰
          </div>
        )}
        {tab === 3 ? (
          <div className="p-3 flex-1 text-center border-b text-red-400 border-red-400  ">
            정보
          </div>
        ) : (
          <div
            className="p-3 flex-1 text-center "
            onClick={() => {
              settab(3);
            }}
          >
            정보
          </div>
        )}
      </div>
    </div>
  );
};
