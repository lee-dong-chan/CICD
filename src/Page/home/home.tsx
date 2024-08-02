import Category from "../../Component/category/category";
import { Category as Cate } from "../../lib/category";

import SearchComp from "../../Component/SearchComp/MainSearchComp";

interface IProps {
  list: Cate[];
}

const Home = ({ list }: IProps): JSX.Element => {
  return (
    <div>
      <SearchComp />
      <div className={` py-3  bg-gray-100 min-w-[60rem] `}>
        {<Category list={list} />}
      </div>
    </div>
  );
};

export default Home;
