import styled from "@emotion/styled";
import Image from "next/image";
import useUnsplash from "@/src/commons/hooks/customs/useUnsplash";
interface UnsplashImage {
  id: string;
  urls: string[];
}
const Gallery = () => {
  const { imageDatas, getImageSize } = useUnsplash();
  return (
    <>
      <Wrapper>
        {imageDatas.map((el) => (
          <Image src={el.urls.small} {...getImageSize(el, "small")} alt={el.id} />
        ))}
      </Wrapper>
    </>
  );
};

export default Gallery;

const Wrapper = styled.section``;
