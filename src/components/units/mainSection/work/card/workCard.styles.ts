import { rem } from "@/src/styles/common";
import { theme } from "@/src/styles/theme";
import styled from "@emotion/styled";

export const Wrapper = styled.details`
  background-color: ${theme.colors.list_background};
  border: 1px solid ${theme.colors.primary};
  border-radius: ${rem(10)};
  padding: ${rem(10)};
  margin-bottom: ${rem(10)};
  box-shadow: 0 ${rem(20)} ${rem(25)} ${rem(-5)} rgba(0, 0, 0, 0.1),
    0 ${rem(10)} ${rem(10)} ${rem(-5)} rgba(0, 0, 0, 0.04);
  [open] summary::before {
    transform: rotateZ(90deg);
    display: none;
  }
`;
export const WorkInfoSummary = styled.summary`
  ::-webkit-details-marker {
    display: none;
  }
  display: block;
  position: relative;
  padding-left: ${rem(20)};
  cursor: pointer;
  ::before {
    content: "";
    position: absolute;
    border-top: ${rem(8)} solid transparent;
    border-bottom: ${rem(8)} solid transparent;
    border-left: ${rem(12)} solid ${theme.colors.primary};
    top: ${rem(3.2)};
    left: 0;
    transition: 0.25s transform;
  }
`;

export const WorkInfoWrapper = styled.section``;
export const WorkInfoTitle = styled.span`
  display: inline-block;
  width: ${rem(100)};
  font-weight: bold;
  margin-bottom: ${rem(8)};
`;
export const WorkInfoContents = styled.section``;
export const ProjectDetailWrapper = styled.section`
  margin-top: ${rem(10)};
  border-top: 1px solid ${theme.colors.primary};
  padding-left: ${rem(20)};
`;
export const ProjectsSummary = styled.section`
  margin-top: ${rem(10)};
  font-weight: bold;
`;
export const ProjectWrapper = styled.ul`
  border-bottom: 1px solid ${theme.colors.primary};
  padding: ${rem(10)};
  margin: ${rem(10)} 0;
  list-style-type: none;
  line-height: ${rem(25)};
`;
export const SkillIconsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${rem(10)};
`;
