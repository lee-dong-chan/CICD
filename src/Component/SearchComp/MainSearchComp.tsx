import { ChangeEvent, useCallback, useState } from "react";
import { Center } from "../../css/css";

const SearchComp = (): JSX.Element => {
  const [search, setsearch] = useState<string>("");

  const content = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setsearch(e.target.value);
  }, []);

  const cansle = useCallback(() => {
    setsearch("");
  }, []);

  return (
    <div className={`container h-[14rem] w-screen   min-w-[60rem] `}>
      <div
        className={` absolute  h-[14rem] w-screen  `}
        style={{ background: "url(/imgs/bg-top.png)" }}
      ></div>
      <div className={`${Center} relative top-[60%] left-[15%] min-w-[60rem]`}>
        <div>
          <img
            className="me-2 h-[2.5rem] rounded pointer-events-none"
            src="/imgs/location.png"
            alt="img"
          ></img>
        </div>

        <input
          className="px-2 h-[2.5rem] w-[22rem] rounded outline-none text-sm"
          placeholder="건물명,도로명,지번으로 검색하세요"
          type="text"
          value={search}
          onChange={content}
        ></input>

        <div className="relative h-[1rem] left-[-4.5rem]">
          <img
            src="/imgs/cansle.png"
            alt="img"
            className="h-[100%]"
            onClick={cansle}
          ></img>
        </div>
        <div
          className={`h-[2.5rem] px-[0.8rem] left-[-4rem] relative rounded-e text-white ${Center} bg-orange-400 select-none`}
        >
          검색
        </div>
      </div>
    </div>
  );
};
export default SearchComp;
