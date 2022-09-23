import { CSSProperties, forwardRef, useImperativeHandle, useState } from "react";

import { Card } from "@/components/common/atoms/Card";

import { BlurredBackground } from "./Modal.styles";

interface Props {
  onClickAway?: () => void;
  style?: CSSProperties;
  children: React.ReactNode;
}

export interface ModalRef {
  open: () => void;
  close: () => void;
}

const Modal = forwardRef<ModalRef, Props>(({ children, onClickAway, style }, ref) => {
  const [open, setOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => setOpen(true),
    close: () => setOpen(false)
  }), []);

  if (!open) return <></>;

  return (
    <BlurredBackground onClick={() => { setOpen(false); onClickAway && onClickAway() }}>
      <Card style={style}>
        {children}
      </Card>
    </BlurredBackground>
  )
})

export default Modal;
