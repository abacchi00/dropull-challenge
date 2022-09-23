import { forwardRef, useImperativeHandle, useRef, useState } from "react";

import { Button } from "@/components/common/atoms";
import { Modal, ModalLoading, ModalRef } from "@/components/common/molecules";

import { mockAsync } from "@/mocks";

import { theme } from "@/styles";

interface Props {
  onCancel: () => void;
  onProceedToPayment: () => void;
}

export interface CheckoutModalRef extends ModalRef {
  open: () => Promise<void>;
}

const CheckoutModal = forwardRef<CheckoutModalRef, Props>(({ onCancel, onProceedToPayment }, ref) => {
  const modalRef = useRef<ModalRef>(null);

  const [loading, setLoading] = useState(false);

  const handleCancel = () => {
    onCancel();

    modalRef.current.close();
  }

  const handleProceedToPayment = (e: MouseEvent) => {
    e.stopPropagation(); // To not "click away modal"

    onProceedToPayment();

    modalRef.current.close();
  }

  useImperativeHandle(ref, () => ({
    open: async () => {
      setLoading(true);

      modalRef.current?.open();

      await mockAsync();

      setLoading(false);
    },
    close: () => modalRef.current?.close(),
  }), []);

  return (
    <Modal ref={modalRef} onClickAway={handleCancel} style={{ padding: theme.spacing.large }}>
      {loading
        ? <ModalLoading onClickToCancel={handleCancel} loadingMessage="We are processing your purchase" /> // TODO translate
        : (
          <Button onClick={handleProceedToPayment}>proceed to payment</Button>
        )
      }
    </Modal>
  );
})

export default CheckoutModal;
