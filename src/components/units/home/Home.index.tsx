import { useRef } from "react";
import AboutMe from "./aboutMe/aboutMe.index";
import MainTitle from "./mainTitle/mainTitle.index";
import Navigation from "./navigation/Navigation.index";
import Work from "./work/work.index";

const Home = () => {
  const aboutMeRef = useRef(null);
  const workRef = useRef(null);
  return (
    <>
      <Navigation
        activeIndex={1}
        menus={[
          { name: "About Me", ref: aboutMeRef },
          { name: "Work", ref: workRef },
        ]}
      />
      <MainTitle />
      <AboutMe ref={aboutMeRef} />
      <Work ref={workRef} />
    </>
  );
};
export default Home;
