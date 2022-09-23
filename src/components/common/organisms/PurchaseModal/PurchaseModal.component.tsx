import { forwardRef, useImperativeHandle, useRef, useState } from "react";

import { Button } from "@/components/common/atoms";
import { Modal, ModalLoading, ModalRef } from "@/components/common/molecules";

import { mockAsync } from "@/mocks";

import { theme } from "@/styles";

interface Props {
  onCancel: () => void;
  onContinue: () => void;
  onViewNFT: () => void;
}

export interface PurchaseModalRef extends ModalRef {
  open: () => Promise<void>;
}

const PurchaseModal = forwardRef<PurchaseModalRef, Props>(({ onCancel, onContinue, onViewNFT }, ref) => {
  const modalRef = useRef<ModalRef>(null);

  const [loading, setLoading] = useState(false);

  const handleCancel = () => {
    // e.stopPropagation(); // To not "click away modal"

    onCancel();

    modalRef.current.close();
  }

  const handleContinue = () => {
    // e.stopPropagation(); // To not "click away modal"

    onContinue();

    modalRef.current.close();
  }

  const handleViewNFT = (e: any) => {
    e.stopPropagation(); // To not "click away modal"

    onViewNFT();
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
        ? <ModalLoading onClickToCancel={handleCancel} loadingTitle="Purchase" loadingMessage="Send transaction to purchase asset" />
        : (
          <>
            <Button onClick={handleViewNFT}>view NFT</Button>

            <Button btnType="tertiary" onClick={handleContinue}>continue</Button> {/* TODO translate */}
          </>
        )
      }
    </Modal>
  );
})

export default PurchaseModal;
