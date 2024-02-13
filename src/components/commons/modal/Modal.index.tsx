// components/Modal.tsx
import ReactModal from "react-modal";
import { createPortal } from "react-dom";
interface IModalProps {
  isOpen: boolean;
  setOpen: (flag: boolean) => void;
  children: React.ReactNode;
}
const Modal = ({ isOpen, setOpen, children }: IModalProps) => {
  if (!isOpen) return null;
  return createPortal(
    <ReactModal isOpen={true}>{children}</ReactModal>,
    document.getElementById("modal-root") as HTMLDivElement
  );
};
export default Modal;
