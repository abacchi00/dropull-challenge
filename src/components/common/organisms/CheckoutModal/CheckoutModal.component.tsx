import { forwardRef, useImperativeHandle, useRef, useState } from "react";

import { Button, Card, Icon, Text } from "@/components/common/atoms";
import { Modal, ModalLoading, ModalRef } from "@/components/common/molecules";

import { mockAsync } from "@/mocks";

import { NFTProduct } from "@/models";

import { theme } from "@/styles";

interface Props {
  onCancel: () => void;
  onProceedToPayment: () => void;
  nft: NFTProduct;
}

export interface CheckoutModalRef extends ModalRef {
  open: () => Promise<void>;
}

const CheckoutModal = forwardRef<CheckoutModalRef, Props>(({ onCancel, onProceedToPayment, nft }, ref) => {
  const modalRef = useRef<ModalRef>(null);

  const [loading, setLoading] = useState(false);

  const handleCancel = () => {
    onCancel();

    modalRef.current.close();
  }

  const handleProceedToPayment = () => {
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
    <Modal ref={modalRef} onClickAway={handleCancel} style={{ padding: theme.spacing.large, gap: theme.spacing.big, maxWidth: '19.25rem' }}>
      {loading
        ? <ModalLoading onClickToCancel={handleCancel} loadingMessage="We are processing your purchase" /> // TODO translate
        : (
          <>
            <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.extraSmall }}>
              <h4 style={{ textAlign: 'center' }}>Checkout</h4>

              <Text centered>You are about to purchase <span>{nft.title}</span> from Gunstars.</Text> {/* TODO i18n */}
            </div>

            <Card style={{ flexDirection: 'row', gap: theme.spacing.medium, alignItems: 'center' }}>
              <Icon size={32} type="phantom_icon" />

              <div style={{ display: 'flex',  flexDirection: 'column' }}>
                <Text>Solana</Text>

                <Text color="light">0xA2...3868</Text>
              </div>
            </Card>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Text>Wallet Balance</Text> {/* TODO i18n */}

                <Text color="light">3.45 SOL</Text>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Text>Service Fee %</Text> {/* TODO i18n */}

                <Text color="light">0 SOL</Text>
              </div>


              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Text>You will pay</Text> {/* TODO i18n */}

                <Text color="light">{nft.solPrice} SOL</Text>
              </div>
            </div>

            <Button onClick={handleProceedToPayment}>proceed to payment</Button> {/* TODO i18n */}
          </>
        )
      }
    </Modal>
  );
})

export default CheckoutModal;
