import HeaderNavigation from "./Navigation/HeaderNavigation.index";
import { HeadLogo, InnerWrapper, Wrapper } from "./LayoutHeader.styles";
import { useRouter } from "next/router";
import { MAIN_TITLE_TEXT } from "@/src/commons/constants";

const LayoutHeader = () => {
  const router = useRouter();
  const onClickLogo = () => {
    router.push("/");
  };
  return (
    <Wrapper>
      <InnerWrapper>
        <HeadLogo onClick={onClickLogo}>{MAIN_TITLE_TEXT}</HeadLogo>
        <HeaderNavigation />
      </InnerWrapper>
    </Wrapper>
  );
};
export default LayoutHeader;
