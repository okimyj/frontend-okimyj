import { rem } from "@/src/components/commons/styles/common";
import { SKILL_TYPE_INFOS } from "./skillIcon.types";
import styled from "@emotion/styled";
import Image from "next/image";

interface ISkillIconProps {
  name: string;
  size?: number;
}
const SkillIcon = ({ name, size = 50 }: ISkillIconProps) => {
  const iconData = SKILL_TYPE_INFOS[name];
  console.log("SkillIcon - name : ", name, " iconData : ", iconData);
  return (
    <Wrapper size={size}>
      {iconData && iconData.icon ? (
        <Image src={`/icons/${iconData.icon}`} width={size} height={size} alt={name} />
      ) : (
        <TextIcon size={size} bgColor={iconData?.color ?? "white"} fontColor={iconData?.fontColor ?? "black"}>
          {iconData?.name}
        </TextIcon>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ size: number }>`
  margin-right: ${rem(10)};
`;
const TextIcon = styled.div<{ size: number; bgColor: string; fontColor: string }>`
  /* width: ${(props) => rem(props.size)}; */
  width: fit-content;
  padding: 0 ${rem(10)};
  color: ${(props) => props.fontColor};
  background-color: ${(props) => props.bgColor};
  border-radius: ${rem(15)};
  text-align: center;
  font-weight: bold;
`;

export default SkillIcon;
