import { FC } from "react";
import { StoreList as Store } from "../../../lib/storelist";
import { useParams } from "react-router-dom";
import Star from "./star";
import { StoreNotice } from "../../../lib/storenotice";
interface IProps {
  storelist: Store[];
  storenotice: StoreNotice[];
}

const Info: FC<IProps> = ({ storelist, storenotice }) => {
  let { id } = useParams();
  const storeId: number = Number(id);
  const store: Store = storelist[storeId - 1];
  const notice: StoreNotice = storenotice[storeId - 1];
  return (
    <div className="border">
      <div className="px-2 py-2 border-b">{store.getName()}</div>
      <div className="p-2 flex">
        <div className="h-[5rem]">
          <img
            className="h-[100%] border"
            src={`/imgs/${store.getImg()}.png`}
          ></img>
        </div>
        <div className="px-2">
          <div className=" flex">
            <div className="text-[0.8rem]">
              <Star storelist={storelist} />
            </div>
            <div className="text-[0.8rem]">{store.getStar()}</div>
          </div>
          <div className="text-[0.75rem] text-red-500">
            {store.getSale()
              ? `${store.getLeastPrice()}원 이상 주문시 ${store.getSale()}원 할인`
              : ""}
          </div>
          <div className=" text-[0.75rem]">
            <span className="text-gray-400">최소주문금액 </span>
            <span>{`${store.getLeast()}원`}</span>
          </div>
          <div className=" text-[0.75rem]">
            <span className="text-gray-400">결제 </span>
            <span>{store.getPayment()}</span>
            <span className="text-red-500">
              {store.getYogi() ? "요기서결제" : ""}
            </span>
          </div>
          {store.getSale() ? (
            <div className="px-1 w-fit text-red-500 border border-red-500  text-[0.5rem]">
              {store.getSale()}원 할인
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div>
        {notice ? (
          <div className="px-4 py-2 flex items-center border-t gap-2">
            <div>✎</div>
            <div className="text-[0.8rem] font-bold">사장님 알림</div>
            <div className="text-[0.8rem]">{notice.getNotice()}</div>
            <div className="flex flex-1 justify-end">
              <img src="/imgs/arrow.png"></img>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Info;
