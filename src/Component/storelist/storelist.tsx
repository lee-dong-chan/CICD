import { FC } from "react";
import { Category as Cate } from "../../lib/category";
import { Link } from "react-router-dom";
import { StoreList as Store } from "../../lib/storelist";
import Item from "./item";
import Order from "../../Page/order/order";
interface IProps {
  storelist: Store[];
}

const StoreList: FC<IProps> = ({ storelist }) => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-3 ">
        {storelist.map((item: Store, idx: number) => (
          <Item key={idx} item={item} idx={idx} />
        ))}
      </div>
    </div>
  );
};

export default StoreList;
