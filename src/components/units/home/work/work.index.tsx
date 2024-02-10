import React from "react";
import WorkCard from "./card/workCard.index";
import { WORK_CARD_DATA } from "./work.data";
const Work = ({ id }: { id: string }) => {
  return (
    <div id={id}>
      {WORK_CARD_DATA.map((el, index) => (
        <WorkCard key={index} {...el} />
      ))}
    </div>
  );
};
export default React.forwardRef(Work);
