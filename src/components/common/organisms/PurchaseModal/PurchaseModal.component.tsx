import Image from 'next/image';
import { forwardRef, useImperativeHandle, useRef, useState } from "react";

import { Button, Card, Icon, Text } from "@/components/common/atoms";
import { Modal, ModalLoading, ModalRef } from "@/components/common/molecules";

import { NFTProduct } from '@/models';

import { mockAsync } from "@/mocks";

import { theme } from "@/styles";

interface Props {
  onCancel: () => void;
  onContinue: () => void;
  onViewNFT: () => void;
  nft: NFTProduct;
}

export interface PurchaseModalRef extends ModalRef {
  open: () => Promise<void>;
}

const PurchaseModal = forwardRef<PurchaseModalRef, Props>(({ onCancel, onContinue, onViewNFT, nft }, ref) => {
  const modalRef = useRef<ModalRef>(null)

  const [loading, setLoading] = useState(false);

  const handleCancel = () => {
    onCancel();

    modalRef.current.close();
  }

  const handleContinue = () => {
    onContinue();

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
    <Modal ref={modalRef} onClickAway={handleCancel} style={{ padding: theme.spacing.large, gap: theme.spacing.big, maxWidth: '19.25rem' }}>
      {loading
        ? <ModalLoading onClickToCancel={handleCancel} loadingTitle="Purchase" loadingMessage="Send transaction to purchase asset" />
        : (
          <>
            <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.extraSmall }}>
              <h4 style={{ textAlign: 'center' }}>Congrats</h4>

              <Text centered>You just purchased <span>{nft.title}</span> from Gunstars.</Text>
            </div>

            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', justifyContent: 'center', backgroundColor: theme.colors.dark[100], padding: theme.spacing.medium, borderRadius: theme.borderRadius.medium }}>
              <div style={{ border: `2px solid ${theme.colors.primary[100]}`, borderRadius: '50%' }}>
                <Icon type="success" />
              </div>

              <div style={{ display: 'flex', gap: theme.spacing.tiny }}>
                <Text>Status</Text>

                <Text color="light">Confirmed</Text>
              </div>
            </div>

            <Card maxWidth="15.25rem" maxHeight="15.25rem" noBorder backgroundColor={100}>
              <Image src={nft.img} width={244} height={244} />
            </Card>

            <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.small }}>
              <Button onClick={onViewNFT}>view NFT</Button> {/* TODO translate */}

              <Button btnType="tertiary" onClick={handleContinue}>continue</Button> {/* TODO translate */}
            </div>
          </>
        )
      }
    </Modal>
  );
})

export default PurchaseModal;
