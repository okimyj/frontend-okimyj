import { FOOTER_HEIGHT, HEADER_HEIGHT, rem } from "@/src/commons/styles/common";
import { SCREEN_WIDTH_MAX } from "@/src/commons/styles/common";
import styled from "@emotion/styled";
interface ILayoutMain {
  children: JSX.Element | JSX.Element[];
}
const LayoutMain = (props: ILayoutMain) => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default LayoutMain;

const Wrapper = styled.main`
  max-width: ${rem(SCREEN_WIDTH_MAX)};
  min-height: calc(100vh - ${rem(HEADER_HEIGHT)} - ${rem(FOOTER_HEIGHT)});
  margin: auto;
  margin-top: ${rem(HEADER_HEIGHT)};
  padding: 0 ${rem(20)};
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;
