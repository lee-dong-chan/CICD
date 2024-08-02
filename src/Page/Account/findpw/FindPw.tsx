import { FC } from "react";
import { Box } from "../../../css/css";

const FindPw: FC = ({}) => {
  return (
    <div className="bg-gray-200">
      <div className={Box}>
        <div className="py-5 px-[5rem]">
          <div className="p-2 bg-white">
            <input
              className="w-[100%] text-[0.8rem]"
              placeholder="요기요에 가입한 이메일 주소 입력"
            ></input>
          </div>
          <ul className="px-1 pt-3 pb-7 text-[0.8rem] text-gray-500">
            <li>⋅입력하신 이메일 주소로 비밀번호 재설정 메일이 발송됩니다.</li>
            <li>⋅소셜 계정 회원은 비밀번호 찾기가 불가능합니다.</li>
          </ul>
          <div className="py-2 mb-4 border bg-red-500 text-center text-white text-[0.8rem]">
            이메일 발송
          </div>
        </div>
      </div>
    </div>
  );
};
export default FindPw;
