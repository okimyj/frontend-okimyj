import styled from "@emotion/styled";
import Image from "next/image";
import useUnsplash, { IMAGE_SIZE } from "@/src/commons/hooks/customs/useUnsplash";
import useWindowSize from "@/src/commons/hooks/customs/useWindowSize";
import { SCREEN_WIDTH_MAX, SCREEN_WIDTH_MIN, rem } from "@/src/commons/styles/common";
const Gallery = () => {
  const { imageDatas, getImageSize } = useUnsplash();
  const windowSize = useWindowSize();
  const galleryWidth = Math.max(Math.min(windowSize.width, SCREEN_WIDTH_MAX), SCREEN_WIDTH_MIN);
  const columnCount = Math.floor(galleryWidth / (IMAGE_SIZE.thumb + 5));
  return (
    <Wrapper>
      <ImageListWrapper columnCount={columnCount}>
        {imageDatas.map((el) => (
          <li>
            <Image src={el.urls.thumb} {...getImageSize(el, "thumb")} alt={el.id} />
          </li>
        ))}
      </ImageListWrapper>
    </Wrapper>
  );
};

export default Gallery;
const Wrapper = styled.section`
  padding: ${rem(10)};
  display: flex;
  justify-content: center;
`;
const ImageListWrapper = styled.ul<{ columnCount: number }>`
  margin: 0;
  padding: 0;
  column-count: ${(props) => props.columnCount};
  column-gap: ${rem(5)};
  li {
    list-style: none;
  }
`;
