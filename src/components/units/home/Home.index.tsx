import useWindowSize from "@/src/commons/hooks/customs/useWindowSize";
import MainTitle from "./mainTitle/mainTitle.index";
import Navigation from "./navigation/Navigation.index";
import Work from "./work/work.index";
import { SHOW_NAVIGATION_WIDTH_MIN } from "@/src/commons/constants";

const Home = () => {
  const windowSize = useWindowSize();
  return (
    <>
      {windowSize.width >= SHOW_NAVIGATION_WIDTH_MIN ? (
        <Navigation
          activeIndex={1}
          menus={[
            { name: "About Me", id: "aboutMe" },
            { name: "Work", id: "work" },
          ]}
        />
      ) : null}

      <MainTitle id={"aboutMe"} />
      <Work id={"work"} />
    </>
  );
};
export default Home;
