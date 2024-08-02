import { FC } from "react";

const NoneOrderItem: FC = () => {
  return (
    <div className="h-[10rem] flex justify-center items-center border text-[0.9rem]">
      주문표에 담긴 메뉴가 없습니다.
    </div>
  );
};

export default NoneOrderItem;
