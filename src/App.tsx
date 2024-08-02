import { useState } from "react";
import Layout from "./Component/layout/layout";
import { Category as Cate } from "./lib/category";
import { StoreList as Store } from "./lib/storelist";
import { StoreNotice } from "./lib/storenotice";
function App(): JSX.Element {
  const [list] = useState<Cate[]>([
    new Cate(1, "category-01", "전체보기"),
    new Cate(2, "category-onedish", "1인분 주문"),
    new Cate(3, "category-10", "프랜차이즈"),
    new Cate(4, "category-02", "치킨"),
    new Cate(5, "category-03", "피자/양식"),
    new Cate(6, "category-04", "중국집"),
    new Cate(7, "category-05", "한식"),
    new Cate(8, "category-06", "일식/돈가스"),
    new Cate(9, "category-07", "족발/보쌈"),
    new Cate(10, "category-08", "야식"),
    new Cate(11, "category-09", "분식"),
    new Cate(12, "category-11", "카페/디저트"),
    new Cate(13, "category-convenience-store", "편의점/마트"),
  ]);

  const [storelist] = useState<Store[]>([
    new Store(
      1,
      "goobne",
      "굽네치킨",
      3,
      150,
      100,
      true,
      15000,
      30,
      4,
      3000,
      ["신용카드,현금"],
      13000
    ),
    new Store(
      2,
      "mrpizza",
      "미스터피자",
      4.5,
      120,
      80,
      true,
      17000,
      45,
      5,
      2000,
      ["신용카드"],
      12000
    ),
    new Store(
      3,
      "bbq",
      "BBQ중곡점",
      5,
      180,
      100,
      true,
      15000,
      30,
      4,
      0,
      [],
      16000
    ),
  ]);

  const [storenotice] = useState<StoreNotice[]>([
    new StoreNotice(
      1,
      "우천시 배달기사 부족으로인하여 배달이 오래걸릴수있습니다. 양해부탁드립니다"
    ),
  ]);

  return <Layout list={list} storelist={storelist} storenotice={storenotice} />;
}

export default App;
