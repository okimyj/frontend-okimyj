import Image from "next/image";
import styled from "@emotion/styled";
import { useRef } from "react";
import { rem } from "@/src/commons/styles/common";

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
    <Wrapper ref={wrapperRef} width={props.width} height={props.height}>
      <Image {...props} onLoad={handleOnLoad} style={{ width: "100%", height: "100%" }} />
    </Wrapper>
  );
};

export default GalleryItem;

const Wrapper = styled.div<{ width: number; height: number }>`
  width: ${(props) => rem(props.width)};
  height: ${(props) => rem(props.height)};
  opacity: 0;
  transition: opacity 0.5s;
  &.loaded {
    opacity: 1;
  }
`;
