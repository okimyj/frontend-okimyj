import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
// response data 중 필요한 data만 type으로 선언.
export type UnsplashImageType = {
  id: string;
  width: number;
  height: number;
  urls: {
    [index: string]: string;
    regular: string;
    small: string;
    thumb: string;
  };
};
type ImageSizeType = {
  [index: string]: number;
  regular: number;
  small: number;
  thumb: number;
};
const IMAGE_URL_WIDTH_PATTERN = /\&w=\d*/gm;
// url 에 분명히 패턴에 맞는 값이 있는데 가져오지 못하는 경우가 있어서 이를 default 값으로 사용한다.
export const IMAGE_SIZE: ImageSizeType = { regular: 1080, small: 400, thumb: 200 };

const useUnsplash = () => {
  const PER_PAGE = 10;
  const [imageDatas, setImageDatas] = useState<UnsplashImageType[]>([]);
  const [page, setPage] = useState<number>(1); // 추후 페이징 기능 연결.
  const { ref: inViewRef, inView } = useInView();
  const [isFetching, setIsFetching] = useState<boolean>();
  const unsplashInstance = axios.create({
    baseURL: "https://api.unsplash.com/photos",
    params: {
      client_id: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
    },
  });
  useEffect(() => {
    fetchImageData();
  }, [page]);

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView, imageDatas]);

  const fetchImageData = useCallback(async () => {
    if (isFetching) return;
    setIsFetching(true);
    const { data } = await unsplashInstance.get<UnsplashImageType[]>("", { params: { page, per_page: PER_PAGE } });
    const newImageDatas = [...imageDatas, ...data.filter((el) => !imageDatas.find((target) => target.id === el.id))];
    setImageDatas(newImageDatas);
    setIsFetching(false);
  }, [page, isFetching]);

  const fetchNextPage = useCallback(() => {
    if (imageDatas.length % PER_PAGE === 0) setPage(page + 1);
  }, [inView, imageDatas]);

  // 이미지를 눌렀을 때 상세보기 modal 혹은 페이지를 연결해 줄 예정이라 urlKey 별로 사이즈를 가져올 수 있게끔 함수화.
  const getImageSize = (data: UnsplashImageType, urlKey: string) => {
    const url = data.urls[urlKey];
    const size = { width: data.width, height: data.height };
    let width = IMAGE_SIZE[urlKey] || data.width;
    if (url) {
      const match = IMAGE_URL_WIDTH_PATTERN.exec(url);
      if (match) {
        width = Number(match[0].toString().replace("&w=", ""));
      }
      size.height *= width / size.width;
      size.width = width;
    }
    return size;
  };

  return { imageDatas, getImageSize, inViewRef };
};
export default useUnsplash;
