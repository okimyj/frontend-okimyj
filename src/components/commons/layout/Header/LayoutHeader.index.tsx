import HeaderNavigation from "./Navigation/HeaderNavigation.index";
import { HeadLogo, InnerWrapper, Wrapper } from "./LayoutHeader.styles";
import { useRouter } from "next/router";

const LayoutHeader = () => {
  const router = useRouter();
  const onClickLogo = () => {
    router.push("/");
  };
  return (
    <Wrapper>
      <InnerWrapper>
        <HeadLogo onClick={onClickLogo}>OKIMYJ Portfolio</HeadLogo>
        <HeaderNavigation />
      </InnerWrapper>
    </Wrapper>
  );
};
export default LayoutHeader;
