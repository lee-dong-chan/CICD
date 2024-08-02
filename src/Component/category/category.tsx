import { Box, Center } from "../../css/css";
import { useEffect, useState, FC } from "react";
import { Category as Cate } from "../../lib/category";
import Item from "./item";

interface IProps {
  list: Cate[];
}

const Category: FC<IProps> = ({ list }) => {
  return (
    <div
      className={`${Box}"mx-auto grid grid-cols-4 gap-3 max-w-[65rem] min-w-[52rem]"`}
    >
      {list.map((item: Cate, idx: number) => (
        <Item key={idx} item={item} idx={idx} />
      ))}
    </div>
  );
};

export default Category;
