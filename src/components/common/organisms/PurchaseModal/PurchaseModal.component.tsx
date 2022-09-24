import Image from 'next/image';
import { forwardRef, useImperativeHandle, useRef, useState } from "react";

import { Button, Card, Text } from "@/components/common/atoms";
import { Modal, ModalLoading, ModalRef, ConfirmedBadge } from "@/components/common/molecules";

import { NFTProduct } from '@/models';

import { ButtonsContainer, ModalTitle, ModalTitleContainer } from './PurchaseModal.styles';

interface Props {
  onCancel: () => void;
  onViewNFT: () => void;
  onContinue: () => void;
  onStartPurchase: () => Promise<void>;
  nft: NFTProduct;
  gameName: string;
}

export interface PurchaseModalRef extends ModalRef {
  open: () => Promise<void>;
}

const PurchaseModal = forwardRef<PurchaseModalRef, Props>(({ onCancel, onContinue, onViewNFT, nft, onStartPurchase, gameName }, ref) => {
  const modalRef = useRef<ModalRef>(null)

  const [loading, setLoading] = useState(false);

  const handleCancel = () => { onCancel(); modalRef.current.close(); }

  const handleContinue = () => { onContinue(); modalRef.current.close(); }

  useImperativeHandle(ref, () => ({
    open: async () => {
      setLoading(true);

      modalRef.current?.open();

      await onStartPurchase();

      setLoading(false);
    },
    close: () => modalRef.current?.close(),
  }), []);

  return (
    <Modal ref={modalRef} onClickAway={handleCancel} style={{ maxWidth: '19.25rem' }} padding="large" gap="big">
      {loading
        ? (
          <ModalLoading
            onClickToCancel={handleCancel}
            loadingTitle="Purchase" // TODO i18n
            loadingMessage="Send transaction to purchase asset" // TODO i18n
          />
        )
        : (
          <>
            <ModalTitleContainer>
              <ModalTitle>Congrats</ModalTitle> {/* TODO i18n */}

              <Text centered>You just purchased <span>{nft.title}</span> from {gameName}.</Text> {/* TODO i18n */}
            </ModalTitleContainer>

            <ConfirmedBadge />

            <Card maxWidth="15.25rem" maxHeight="15.25rem" noBorder backgroundColor={100}>
              <Image src={nft.img} width={244} height={244} />
            </Card>

            <ButtonsContainer>
              <Button onClick={onViewNFT}>view NFT</Button> {/* TODO translate */}

              <Button btnType="tertiary" onClick={handleContinue}>continue</Button> {/* TODO translate */}
            </ButtonsContainer>
          </>
        )
      }
    </Modal>
  );
})

export default PurchaseModal;
