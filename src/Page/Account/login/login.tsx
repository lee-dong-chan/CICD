import { FC, useEffect } from "react";
import { Box } from "../../../css/css";
import { Link } from "react-router-dom";

const Login: FC = ({}) => {
  useEffect(() => {}, []);

  return (
    <div>
      <div className={"container " + `${Box} min-w-[80rem]`}>
        <Link to={"/"}>
          <div className="mx-auto my-4 max-w-[6rem] pointer-events-none ">
            <img src="/imgs/logo-yogiyo-2.png"></img>
          </div>
        </Link>

        <div className="px-[5rem] flex-1 flex justify-center">
          <div className="flex-1 flex flex-col justify-center ">
            <input
              className="p-3 h-[2.5rem] border border-gray-300 text-[0.8rem] "
              placeholder="이메일 주소 입력(필수)"
            ></input>
            <input
              className="p-3 h-[2.5rem] border border-gray-300 text-[0.8rem]"
              placeholder="비밀번호 입력(필수)"
            ></input>
            <div className="py-5 flex justify-between">
              <div className="flex items-center gap-2  text-[0.8rem]">
                <input type="checkbox" className="h-5 w-5 rounded-none"></input>
                자동 로그인
              </div>
              <div className=" text-[0.8rem] text-gray-400">
                <Link to={"/findemail"}>
                  <span>아이디찾기</span>
                </Link>
                <span className="mx-1">|</span>
                <Link to={"/findpw"}>
                  <span>비밀번호찾기</span>
                </Link>
              </div>
            </div>
            <div className="p-[0.5rem] border text-center bg-gray-300 text-white text-[0.8rem]">
              로그인
            </div>
            <div className="py-3 flex gap-4">
              <div className="border flex-1  text-[0.8rem] text-gray-400 ">
                <a
                  className="flex h-[100%] justify-center items-center"
                  href="https://nid.naver.com/nidlogin.login?oauth_token=1870Ak1JGa7mHIJP3S&consumer_key=96m5xiTC0SajLMvqJOUH&logintp=oauth2&nurl=https%3A%2F%2Fnid.naver.com%2Foauth2.0%2Fauthorize%3Fresponse_type%3Dtoken%26state%3D59f31b12-cba2-4c8b-9764-08b0e69419d0%26client_id%3D96m5xiTC0SajLMvqJOUH%26redirect_uri%3Dhttps%253A%252F%252Fwww.yogiyo.co.kr%252Fmobile%252F%26locale%3Dko_KR%26inapp_view%3D%26oauth_os%3D&locale=ko_KR&inapp_view=&svctype=1"
                >
                  <span>
                    <img
                      className="w-[2rem] pointer-events-none"
                      src="/imgs/naver_login.png"
                    ></img>
                  </span>
                  네이버로 로그인
                </a>
              </div>

              <div className="border  flex-1  text-[0.8rem]">
                <a
                  className="flex justify-center items-center "
                  href="https://accounts.kakao.com/login/?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fproxy%3DeasyXDM_Kakao_krfjrntshll_provider%26ka%3Dsdk%252F1.43.5%2520os%252Fjavascript%2520sdk_type%252Fjavascript%2520lang%252Fko-KR%2520device%252FMacIntel%2520origin%252Fhttps%25253A%25252F%25252Fwww.yogiyo.co.kr%26origin%3Dhttps%253A%252F%252Fwww.yogiyo.co.kr%26response_type%3Dcode%26redirect_uri%3Dkakaojs%26state%3D3n63pxlx0wto3mqegqjat9%26through_account%3Dtrue%26client_id%3D92dcdbf99967e46645137d9983a77fc9&talk_login=hidden#login"
                >
                  <span>
                    <img
                      className="w-[2rem] pointer-events-none"
                      src="/imgs/kakao_login.png"
                    ></img>
                  </span>
                  카카오로 로그인
                </a>
              </div>
            </div>
            <div className="py-3 pointer-events-none">
              <img src="/imgs/signin_banner.png"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
