import { FC } from "react";
import { Category as Cate } from "../../lib/category";
import ListCategory from "../../Component/listcategory/category";
import { Box, Center } from "../../css/css";
import { StoreList as Store } from "../../lib/storelist";
import StoreList from "../../Component/storelist/storelist";
import NoneList from "../../Component/storelist/nonelist";
interface IProps {
  list: Cate[];
  storelist: Store[];
}

const List: FC<IProps> = ({ list, storelist }) => {
  return (
    <div>
      <div className="h-screen">
        <div className="border-b shadow">
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
                className={`h-[2.5rem] px-[0.8rem] left-[-4rem] relative rounded-e text-white ${Center} bg-orange-400 select-none`}
              >
                검색
              </div>
            </div>
          </div>
          <div className={`${Box} flex max-w-[65rem] min-w-[50rem] h-[4rem`}>
            <ListCategory list={list} />
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="h-[4rem] border-b">
            <div
              className={`${Box} h-[100%] flex max-w-[65rem] min-w-[60rem] items-center justify-end `}
            >
              <select className="p-2 h-[60%] border w-[50%] text-sm text-gray-600">
                <option selected>기본 정렬순</option>
                <option>별점순</option>
                <option>리뷰 많은순</option>
                <option>최소 주문 금액순</option>
                <option>거리순</option>
                <option>배달시간순</option>
              </select>
            </div>
          </div>
          <div>
            <div className={`${Box}py-2 max-w-[65rem]`}>
              {storelist.length ? (
                <div>
                  <div className="py-2 text-[0.85rem]">슈퍼레드위크 추천</div>
                  {storelist ? <StoreList storelist={storelist} /> : ""}
                  <div className="mt-3 py-2 text-[0.85rem]">
                    요기요 등록 음식점
                  </div>
                  <StoreList storelist={storelist} />
                </div>
              ) : (
                <NoneList />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
