import { useRef } from "react";
import AboutMe from "./mainTitle/aboutMe/aboutMe.index";
import MainTitle from "./mainTitle/mainTitle.index";
import Navigation from "./navigation/Navigation.index";
import Work from "./work/work.index";

const Home = () => {
  return (
    <>
      <Navigation
        activeIndex={1}
        menus={[
          { name: "About Me", id: "aboutMe" },
          { name: "Work", id: "work" },
        ]}
      />
      <MainTitle id={"aboutMe"} />
      <Work id={"work"} />
    </>
  );
};
export default Home;
