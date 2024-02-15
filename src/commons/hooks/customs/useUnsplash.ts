import axios from "axios";
import { useEffect, useState } from "react";
// response data 중 필요한 data만 type으로 선언.
type UnsplashImageType = {
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
const IMAGE_SIZE: ImageSizeType = { regular: 1080, small: 400, thumb: 200 };

const useUnsplash = () => {
  const [imageDatas, setImageDatas] = useState<UnsplashImageType[]>([]);
  const [page, setPage] = useState<number>(1);
  const unsplashInstance = axios.create({
    baseURL: "https://api.unsplash.com/photos",
    params: {
      client_id: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
    },
  });
  useEffect(() => {
    fetchImageData();
  }, []);

  const fetchImageData = async () => {
    const { data } = await unsplashInstance.get<UnsplashImageType[]>("", { params: { page } });
    const newImageDatas = [...imageDatas, ...data];
    setImageDatas(newImageDatas);
  };

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
  return { imageDatas, getImageSize };
};
export default useUnsplash;
