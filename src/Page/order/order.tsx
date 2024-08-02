import ListCategory from "../../Component/listcategory/category";
import Info from "../../Component/order/info/info";
import { MenuBox } from "../../Component/order/menu/menubox";
import Orderlist from "../../Component/order/orderlist/orderlist";
import { Box } from "../../css/css";
import { Category as Cate } from "../../lib/category";
import { StoreList as Store } from "../../lib/storelist";
import { StoreNotice } from "../../lib/storenotice";

interface IProps {
  list: Cate[];
  storelist: Store[];
  storenotice: StoreNotice[];
}

const Order = ({ list, storelist, storenotice }: IProps): JSX.Element => {
  return (
    <div>
      <div className="h-[6rem] relative overflow-hidden flex justify-center">
        <div className="absolute -z-10 -top-[7rem]">
          <img className="max-w-none" src="/imgs/bg-top.png"></img>
        </div>
        <div className="flex items-center justift-center">
          <div>
            <img
              className="me-2 h-[2.5rem] rounded pointer-events-none"
              src="/imgs/location.png"
            ></img>
          </div>

          <input
            className="px-2 h-[2.5rem] w-[22rem] rounded outline-none text-sm"
            placeholder="건물명,도로명,지번으로 검색하세요"
          ></input>

          <div className="relative h-[1rem] left-[-4.5rem]">
            <img src="/imgs/cansle.png" className="h-[100%]"></img>
          </div>
          <div
            className={`h-[2.5rem] px-[0.8rem] left-[-4rem] relative rounded-e text-white ${Box} bg-orange-400 select-none`}
          >
            검색
          </div>
        </div>
      </div>
      <div className="flex justify-center border-b shadow">
        <ListCategory list={list} />
      </div>
      <div
        className={`${Box} max-w-[65rem] min-w-[60rem] flex justify-evenly my-3`}
      >
        <div className="w-[40rem]">
          <Info storelist={storelist} storenotice={storenotice} />
          <MenuBox />
        </div>
        <Orderlist />
      </div>
    </div>
  );
};

export default Order;
