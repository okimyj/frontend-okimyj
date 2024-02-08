import { Headline, Pilcrow, Wrapper } from "./aboutMe.styles";

const AboutMe = () => {
  return (
    <Wrapper>
      <Headline>2년차 Frontend, 10년차 모바일 게임 클라이언트 개발자 입니다.</Headline>
      <Pilcrow>
        Frontend로는 3D 아바타를 활용한 심플 SNS 서비스 개발 경험이 있습니다.
        <br /> 로그인, 회원가입, 방명록, 설정 페이지 등 기능 개발 및 퍼블리싱, API 연동을 담당했습니다.
      </Pilcrow>
      <Pilcrow>
        Client로는 주로 UI와 컨텐츠의 설계 및 구현, 다국어 처리, 테이블 유효성 검사 툴 개발 등의 작업을 해왔고,
        레이아웃과 API연동, 컨텐츠 개발에 익숙한 경험과 여러 툴과 언어를 빠르게 학습하고 적응하는 장점을 살려 Frontend로
        전향 했습니다.
      </Pilcrow>
    </Wrapper>
  );
};
export default AboutMe;
