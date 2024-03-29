import styled from "@emotion/styled";
import useUnsplash, { IMAGE_SIZE } from "@/src/commons/hooks/customs/useUnsplash";
import useWindowSize from "@/src/commons/hooks/customs/useWindowSize";
import { SCREEN_WIDTH_MAX, SCREEN_WIDTH_MIN, rem } from "@/src/commons/styles/common";
import GalleryItem from "./GalleryItem.index";

const Gallery = () => {
  const { imageDatas, getImageSizeFixedHeight, inViewRef } = useUnsplash();
  const windowSize = useWindowSize();
  const galleryWidth = Math.max(Math.min(windowSize.width, SCREEN_WIDTH_MAX), SCREEN_WIDTH_MIN);
  const columnCount = Math.floor(galleryWidth / (IMAGE_SIZE.thumb + 5));
  return (
    <Wrapper>
      <ImageListWrapper columnCount={columnCount}>
        {imageDatas.map((el) => (
          <li key={el.id}>
            {/* 아이템 */}
            <GalleryItem src={el.urls.thumb} {...getImageSizeFixedHeight(el, 200)} alt={el.id} />
          </li>
        ))}
      </ImageListWrapper>
      <ImageListEndObserver ref={inViewRef} />
    </Wrapper>
  );
};

export default Gallery;
const Wrapper = styled.section`
  padding: ${rem(20)};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ImageListWrapper = styled.ul<{ columnCount: number }>`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  column-gap: ${rem(5)};
  row-gap: ${rem(5)};
  li {
    list-style: none;
  }
`;
const ImageListEndObserver = styled.div`
  height: ${rem(20)};
`;
