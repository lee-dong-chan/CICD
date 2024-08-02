import { FC } from "react";
import { StoreList as Store } from "../../lib/storelist";
import { Link } from "react-router-dom";

interface IProps {
  item: Store;
  idx: number;
}

const Item: FC<IProps> = ({ item, idx }) => {
  return (
    <Link to={`/order/${item.getId()}`}>
      <div className="p-3  flex border border-gray-300 bg-white">
        <img
          className="h-[5rem] me-3 border"
          src={`/imgs/${item.getImg()}.png`}
        ></img>
        <div className="flex-1">
          <div className="text-s">{item.getName()}</div>
          <div className="text-[0.75rem]">
            <span className="p-1 text-yellow-400 ">★ {item.getStar()}</span>
            <span className="text-gray-200">|</span>
            <span className="p-1">리뷰 {item.getReview()}</span>
            <span className="text-gray-200">|</span>
            <span className="p-1">사장님댓글 {item.getComment()}</span>
          </div>
          <div className="text-[0.75rem]">
            <span className="p-1 text-red-500">
              {item.getYogi() ? "요기서결제" : ""}
            </span>
            <span className="text-gray-200">|</span>
            <span className="p-1 text-gray-400">
              {item.getLeast()}원 이상 배달
            </span>
          </div>
          <div className="p-1 flex justify-between items-center ">
            {item.getSale() !== 0 ? (
              <span className="px-1 text-red-500 border border-red-500  text-[0.5rem]">
                {item.getSale()}원할인
              </span>
            ) : (
              <span></span>
            )}
            <span className="text-gray-400  text-[0.7rem]">
              {item.getTime()}분
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Item;
