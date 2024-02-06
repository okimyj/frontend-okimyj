import { useState } from "react";
import { ProjectsSummary, ProjectsDetail, Wrapper, WorkInfoWrapper, SkillIconsWrapper } from "./workCard.styles";
import SkillIcon from "../../../skillIcon/skillIcon.index";

const WorkCard = (props: IWorkCard) => {
  const [isProjectsFolded, setIsProjectsFolded] = useState<boolean>(false);
  return (
    <Wrapper>
      <WorkInfoWrapper>Company : {props.company}</WorkInfoWrapper>
      <WorkInfoWrapper>Period : {props.period}</WorkInfoWrapper>
      <WorkInfoWrapper>Position : {props.position}</WorkInfoWrapper>
      <WorkInfoWrapper>Description : {props.description}</WorkInfoWrapper>

      {props.projects && (
        <ProjectsDetail>
          <ProjectsSummary>Projects</ProjectsSummary>
          {props.projects &&
            !isProjectsFolded &&
            props.projects.map((el, index) => (
              <div key={index}>
                Name : {el.name}
                Period : {el.period}
                Skills :
                {
                  <SkillIconsWrapper>
                    {el.skills.map((skill) => (
                      <SkillIcon key={skill} name={skill} />
                    ))}
                  </SkillIconsWrapper>
                }
                Description : {el.description}
              </div>
            ))}
        </ProjectsDetail>
      )}
    </Wrapper>
  );
};
export default WorkCard;
