const ReactQuill = dynamic(async () => await import("react-quill"), { ssr: false });
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
const Gallery = () => {
  return (
    <>
      <ReactQuill></ReactQuill>
    </>
  );
};

export default Gallery;
