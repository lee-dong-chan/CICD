import { FC } from "react";

import { StoreList as Store } from "../../lib/storelist";
import Item from "./item";

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
