import HeaderNavigation from "./Navigation/HeaderNavigation.index";
import { HeadLogo, InnerWrapper, Wrapper } from "./LayoutHeader.styles";
import { useRouter } from "next/router";

const LayoutHeader = () => {
  const router = useRouter();

  return (
    <Wrapper>
      <InnerWrapper>
        <HeadLogo>OKIMYJ Portfolio</HeadLogo>
        <HeaderNavigation />
      </InnerWrapper>
    </Wrapper>
  );
};
export default LayoutHeader;
