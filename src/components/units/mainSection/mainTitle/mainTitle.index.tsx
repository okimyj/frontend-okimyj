import Image from "next/image";
import { Wrapper, TitleImageWrapper, GradientRect, TitleLogo } from "./mainTitle.styles";

export default function MainTitle() {
  return (
    <Wrapper>
      <TitleImageWrapper>
        <GradientRect></GradientRect>
        <Image
          src={"http://okimyj-bucket.s3-website.ap-northeast-2.amazonaws.com/main_background.webp"}
          alt={"background image in bucket"}
          width={1200}
          height={1000}
          priority={true}
        />
      </TitleImageWrapper>

      <TitleLogo>
        OKIMYJ
        <br />
        FrontEnd Developer
      </TitleLogo>
    </Wrapper>
  );
}
