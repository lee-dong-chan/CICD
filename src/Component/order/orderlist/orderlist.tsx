import { FC } from "react";
import NoneOrderItem from "./noneorderitem";

const Orderlist: FC = () => {
  return (
    <div className="w-[20rem]">
      <div>
        <div className="px-2 py-2 bg-gray-700 text-white">주문표</div>
        <NoneOrderItem />

        <div className="px-2 py-2 flex justify-end border text-[0.9rem] ">
          배달요금 3000원 별도
        </div>
      </div>
      <div className="my-2 py-3 flex justify-center bg-gray-200 text-white ">
        주문하기
      </div>
    </div>
  );
};

export default Orderlist;
