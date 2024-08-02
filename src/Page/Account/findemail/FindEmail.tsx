import { FC } from "react";
import { Box } from "../../../css/css";

const FindEmail: FC = ({}) => {
  return (
    <div className="bg-gray-200">
      <div className={`${Box}`}>
        <div className="py-5 px-20 flex flex-col">
          <div className="px-3 py-2  flex items-center border bg-white">
            <input
              className="flex-1 text-[0.8rem]"
              placeholder="(필수)휴대폰 전화번호 압력(-제외)"
            ></input>
            <div className="px-2 py-1 border text-[0.8rem] text-gray-500">
              인증
            </div>
          </div>
          <div className="px-3 py-3 flex items-center border bg-white">
            <input
              className="flex-1 text-[0.8rem]"
              placeholder="인증번호 입력"
            ></input>
          </div>
          <div className="p-2  h-[2.5rem] text-[0.6rem] text-gray-500">
            인증번호가 도착하지 않았을 경우 '인증버튼을' 다시 눌러주세요
          </div>
          <div className="py-[0.6rem] border bg-white text-center text-[0.8rem]">
            아이디 찾기
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindEmail;
