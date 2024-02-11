import Image from "next/image";
import { Wrapper, TitleImageWrapper, GradientRect, TitleLogo } from "./mainTitle.styles";
import { useEffect, useState } from "react";
import { HEADER_HEIGHT } from "@/src/commons/styles/common";
import useWindowSize from "@/src/commons/hooks/customs/useWindowSize";
import AboutMe from "./aboutMe/aboutMe.index";
const ORIGIN_IMAGE_WIDTH = 1200;
const ORIGIN_IMAGE_HEIGHT = 1000;
const MainTitle = ({ id }: { id: string }) => {
  const windowSize = useWindowSize();
  const [imageHeight, setImageHeight] = useState(ORIGIN_IMAGE_HEIGHT);
  const [imageWidth, setImageWidth] = useState(ORIGIN_IMAGE_WIDTH);
  useEffect(() => {
    let height = ORIGIN_IMAGE_HEIGHT;
    let width = ORIGIN_IMAGE_WIDTH;
    if (windowSize.height < windowSize.width) {
      height = Math.min(windowSize.height - HEADER_HEIGHT, ORIGIN_IMAGE_HEIGHT);
      width *= height / ORIGIN_IMAGE_HEIGHT;
    } else {
      width = Math.min(windowSize.width, ORIGIN_IMAGE_WIDTH);
      height *= width / ORIGIN_IMAGE_WIDTH;
    }
    setImageHeight(height);
    setImageWidth(width);
  }, [windowSize]);

  return (
    <Wrapper id={id}>
      <TitleImageWrapper>
        <GradientRect></GradientRect>
        <Image
          src={"http://okimyj-bucket.s3-website.ap-northeast-2.amazonaws.com/main_background.webp"}
          alt={"background image in bucket"}
          width={imageWidth}
          height={imageHeight}
          priority={true}
        />
        <TitleLogo>
          OKIMYJ
          <br />
          FrontEnd Developer
        </TitleLogo>
      </TitleImageWrapper>
      <AboutMe />
    </Wrapper>
  );
};
export default MainTitle;
