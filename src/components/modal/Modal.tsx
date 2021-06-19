import React, { ReactChild, ReactChildren } from "react";
import "./Modal.css";
import ReactDOM from "react-dom";

const Modal = ({
  onClose,
  show,
  children,
}: {
  onClose: React.MouseEventHandler<HTMLButtonElement>;
  show: boolean;
  children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return ReactDOM.createPortal(
    <div className={showHideClassName}>
      <div className="modal-main">
        {children}
        <button type="button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>,
    document.getElementById("root") as HTMLElement
  );
};

export default Modal;
