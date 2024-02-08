import Image from "next/image";
import { Wrapper, TitleImageWrapper, GradientRect, TitleLogo } from "./mainTitle.styles";
import { useRouter } from "next/router";

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
        <TitleLogo>
          OKIMYJ
          <br />
          FrontEnd Developer
        </TitleLogo>
      </TitleImageWrapper>
    </Wrapper>
  );
}
