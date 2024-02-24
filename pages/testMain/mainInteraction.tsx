import { MouseEvent, useEffect, useState } from "react";
import MainIcon from "../../public/icons/main_art.svg";
import Image from "next/image";
import styles from "./test.module.scss";

const MainInteraction = () => {
  const [rightArt, setRightArt] = useState<Element | null>(null);
  useEffect(() => {
    const test = document.getElementsByClassName("main_art_svg__right");
    console.log(test);
    if (test[0]) {
      test[0].addEventListener("mouseenter", onMouseOver);
    }
    return () => {
      test[0].removeEventListener("mouseenter", onMouseOver);
    };
  }, []);

  const onMouseOver = (e: Event) => {
    console.log("onMouseOver : ", e);
    const target = e.currentTarget as HTMLElement;
    if (target) {
      target.classList.toggle(styles.mouseOver);
    }
  };
  return (
    <div className={styles.wrapper}>
      <MainIcon />
    </div>
  );
};
export default MainInteraction;
