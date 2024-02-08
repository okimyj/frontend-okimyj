import { useState } from "react";
import {
  ProjectsSummary,
  ProjectDetailWrapper,
  Wrapper,
  WorkInfoWrapper,
  SkillIconsWrapper,
  WorkInfoSummary,
  ProjectWrapper,
  WorkInfoTitle,
} from "./workCard.styles";
import SkillIcon from "../../../skillIcon/skillIcon.index";
import styles from "./workCard.styles.module.scss";

const WorkCard = (props: IWorkCard) => {
  const [isProjectsFolded, setIsProjectsFolded] = useState<boolean>(false);
  return (
    <Wrapper className={styles.workWrapper}>
      <WorkInfoSummary>
        <WorkInfoWrapper>
          <WorkInfoTitle>Company</WorkInfoTitle>
          {props.company}
        </WorkInfoWrapper>
        <WorkInfoWrapper>
          <WorkInfoTitle>Period</WorkInfoTitle>
          {props.period}
        </WorkInfoWrapper>
        <WorkInfoWrapper>
          <WorkInfoTitle>Position</WorkInfoTitle>
          {props.position}
        </WorkInfoWrapper>
        <WorkInfoWrapper>
          <WorkInfoTitle>Description</WorkInfoTitle>
          {props.description}
        </WorkInfoWrapper>
      </WorkInfoSummary>

      {props.projects && (
        <ProjectDetailWrapper>
          <ProjectsSummary>Projects</ProjectsSummary>
          {props.projects &&
            !isProjectsFolded &&
            props.projects.map((el, index) => (
              <ProjectWrapper key={index}>
                <li>
                  {el.name} ({el.period})
                </li>
                <li>{el.description}</li>
                {
                  <SkillIconsWrapper>
                    {el.skills.map((skill) => (
                      <SkillIcon key={skill} name={skill} size={25} />
                    ))}
                  </SkillIconsWrapper>
                }
              </ProjectWrapper>
            ))}
        </ProjectDetailWrapper>
      )}
    </Wrapper>
  );
};
export default WorkCard;
