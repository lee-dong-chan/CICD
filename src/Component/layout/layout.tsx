import { FC } from "react";
import Home from "../../Page/home/home";

import { Center } from "../../css/css";
import Login from "../../Page/Account/login/login";
import List from "../../Page/list/list";
import { Routes, Route, Link } from "react-router-dom";
import FindPw from "../../Page/Account/findpw/FindPw";
import FindEmail from "../../Page/Account/findemail/FindEmail";
import { Category as Cate } from "../../lib/category";
import { StoreList as Store } from "../../lib/storelist";
import Order from "../../Page/order/order";
import { StoreNotice } from "../../lib/storenotice";
interface IProps {
  list: Cate[];
  storelist: Store[];
  storenotice: StoreNotice[];
}

const Layout: FC<IProps> = ({ list, storelist, storenotice }) => {
  return (
    <div>
      <div className={`px-auto h-[4.5rem] min-w-[80rem]  bg-red-600 ${Center}`}>
        <div
          className={`container max-w-[65rem] flex-1 h-[100%] flex justify-between items-center`}
        >
          <Link to={"/"} className="h-[100%] flex items-center ">
            <div className="h-[50%] ">
              <img
                className="h-[100%] pointer-events-none"
                src="/imgs/logo-yogiyo.png"
              ></img>
            </div>
          </Link>

          <Link
            to={"/login"}
            className="px-10 py-1 border-[0.5px]  border-gray-400  text-white "
          >
            로그인
          </Link>
        </div>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home list={list} />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/findemail" element={<FindEmail />}></Route>
          <Route path="/findpw" element={<FindPw />}></Route>
          <Route
            path="/list/:id"
            element={<List list={list} storelist={storelist} />}
          ></Route>
          <Route
            path="/order/:id"
            element={
              <Order
                list={list}
                storelist={storelist}
                storenotice={storenotice}
              />
            }
          ></Route>
        </Routes>
      </div>
    </div>
  );
};

export default Layout;
