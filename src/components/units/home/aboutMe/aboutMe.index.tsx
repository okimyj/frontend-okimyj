import React from "react";
import { ClientIntro, FrontendIntro, Headline, Wrapper } from "./aboutMe.styles";

const AboutMe = ({ id }: { id: string }) => {
  return (
    <Wrapper id={id}>
      <Headline>2년차 Frontend, </Headline>
      <Headline>10년차 모바일 게임 클라이언트 개발자 입니다.</Headline>
      <ClientIntro>
        Client로는 주로 컨텐츠의 설계 및 구현, UI, 다국어 처리, 테이블 유효성 검사 툴 개발 등의 작업을 해왔습니다.
      </ClientIntro>
      <FrontendIntro>
        레이아웃과 API연동, 컨텐츠 개발에 익숙한 경험
        <br />
        여러 툴과 언어를 빠르게 학습하고 적응하는 장점을 살려
        <br />
        Frontend로 전향 하였습니다. <br />
        Frontend 자리에서 3D 아바타를 활용한 SNS 서비스 개발 경험이 있습니다.
        <br />
        로그인, 회원가입, 방명록, 설정 페이지 등 기능 개발 및 퍼블리싱, API 연동을 담당했습니다.
      </FrontendIntro>
    </Wrapper>
  );
};
export default React.forwardRef(AboutMe);
