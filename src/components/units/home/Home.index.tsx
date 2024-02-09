import { useRef } from "react";
import AboutMe from "./aboutMe/aboutMe.index";
import MainTitle from "./mainTitle/mainTitle.index";
import Navigation from "./navigation/Navigation.index";
import Work from "./work/work.index";

const Home = () => {
  const aboutMeRef = useRef();
  const workRef = useRef();
  return (
    <>
      <Navigation activeIndex={1} />
      <MainTitle />
      <AboutMe />
      <Work />
    </>
  );
};
export default Home;
