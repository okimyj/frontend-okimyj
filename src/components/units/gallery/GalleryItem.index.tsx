import Image from "next/image";
import styled from "@emotion/styled";
import { useRef } from "react";

interface IGalleryItemProps {
  src: string;
  width: number;
  height: number;
  alt: string;
}

const GalleryItem = (props: IGalleryItemProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const handleOnLoad = () => {
    if (!wrapperRef || !wrapperRef.current) return;
    if (!wrapperRef.current.classList.value.includes("loaded")) wrapperRef.current.classList.add("loaded");
  };

  return (
    <Wrapper ref={wrapperRef}>
      <Image {...props} onLoad={handleOnLoad} style={{ width: "100%", height: "auto" }} />
    </Wrapper>
  );
};

export default GalleryItem;

const Wrapper = styled.div`
  opacity: 0;
  transition: opacity 0.5s;
  &.loaded {
    opacity: 1;
  }
`;
