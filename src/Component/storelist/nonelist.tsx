import { FC } from "react";

import { Center } from "../../css/css";

const NoneList: FC = ({}) => {
  return (
    <div
      className={`${Center} h-[25rem] bg-white border flex-col text-[0.8rem] text-gray-400`}
    >
      <p>아직 등록된 음식점이 없습니다.</p>
      <p>빠른 시일 내에 서비스를</p>
      <p>제공할수 있도록 하겠습니다.</p>
    </div>
  );
};

export default NoneList;
