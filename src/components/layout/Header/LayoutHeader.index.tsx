import HeaderNavigation from "./Navigation/HeaderNavigation.index";
import { HeadLogo, InnerWrapper, Wrapper } from "./LayoutHeader.styles";

const LayoutHeader = () => {
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
