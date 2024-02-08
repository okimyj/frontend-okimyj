import Image from "next/image";
import { Wrapper, TitleImageWrapper, GradientRect, TitleLogo } from "./mainTitle.styles";

export default function MainTitle() {
  const imageHeight = typeof window !== "undefined" ? Math.min(window.screen.height, 1000) : 1000;
  const imageWidth = 1200 * (imageHeight / 1000);
  return (
    <Wrapper>
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
    </Wrapper>
  );
}
