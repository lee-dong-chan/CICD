import { FC } from "react";
import { Category as Cate } from "../../lib/category";
import { Link } from "react-router-dom";
interface IProps {
  item: Cate;
  idx: number;
}

const Item: FC<IProps> = ({ item }) => {
  return (
    <Link to={`/list/${item.getId()}`}>
      <div
        className={
          "p-3 border max-w-[17rem] max-h-[15rem] min-h-[15rem] min-w-[8rem] "
        }
        style={{ background: `url("/imgs/${item.getPath()}.png")` }}
      >
        {/* <img
          className="relative z-0 max-w-[12rem] max-h-[12rem] min-h-[8rem] min-w-[8rem] "
          src={`/imgs/${item.getPath()}.png`}
        ></img> */}
        <div className="text-[0.8rem] font-bold ">{item.getName()}</div>
      </div>
    </Link>
  );
};

export default Item;
