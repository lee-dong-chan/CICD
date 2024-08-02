import { FC } from "react";
import { Category as Cate } from "../../lib/category";
import { Link } from "react-router-dom";

export interface IItem {
  getId: () => number;
  getName: () => string;
}

interface IProps {
  item: IItem;
  isEnd: Boolean;
}

const ListCategory = ({ item, isEnd }: IProps) => {
  return (
    <Link to={`/list/${item.getId()}`}>
      <div className="flex h-[100%] items-center ">
        <div className=" h-[100%] flex hover:bg-gray-700">
          <span className="px-[0.7rem] py-[1.35rem] h-[100%] text-center  text-sm text-gray-500 hover:text-white ">
            {item.getName()}
          </span>
        </div>
        <span>
          {isEnd == false ? <span className="p-0 text-gray-300 ">|</span> : ""}
        </span>
      </div>
    </Link>
  );
};

export default ListCategory;
