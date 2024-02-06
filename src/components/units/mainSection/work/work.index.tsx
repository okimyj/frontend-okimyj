import WorkCard from "./card/workCard.index";
import { WORK_CARD_DATA } from "./work.data";
const Work = () => {
  return (
    <div>
      {WORK_CARD_DATA.map((el, index) => (
        <WorkCard key={index} {...el} />
      ))}
    </div>
  );
};
export default Work;
