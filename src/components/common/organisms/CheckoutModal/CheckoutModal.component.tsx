import { forwardRef, useImperativeHandle, useRef, useState } from "react";

import { Button, Card, Icon, Text } from "@/components/common/atoms";
import { Modal, ModalLoading, ModalRef } from "@/components/common/molecules";

import { NFTProduct } from "@/models";

import { AttributeContainer, FlexColumn, ModalTitle, ModalTitleContainer } from "./CheckoutModal.styles";

interface Props {
  onCancel: () => void;
  onProceedToPayment: () => void;
  onStartCheckout: () => Promise<void>;
  nft: NFTProduct;
}

export interface CheckoutModalRef extends ModalRef {
  open: () => Promise<void>;
}

const CheckoutModal = forwardRef<CheckoutModalRef, Props>(({ onCancel, onProceedToPayment, nft, onStartCheckout }, ref) => {
  const modalRef = useRef<ModalRef>(null);

  const [loading, setLoading] = useState(false);

  const handleCancel = () => { onCancel(); modalRef.current.close(); }

  const handleProceedToPayment = () => { onProceedToPayment(); modalRef.current.close(); }

  useImperativeHandle(ref, () => ({
    open: async () => {
      setLoading(true);

      modalRef.current?.open();

      await onStartCheckout();

      setLoading(false);
    },
    close: () => modalRef.current?.close(),
  }), []);

  return (
    <Modal ref={modalRef} onClickAway={handleCancel} padding="large" gap="big" style={{ maxWidth: '19.25rem' }}>
      {loading
        ? (
          <ModalLoading
            onClickToCancel={handleCancel}
            loadingMessage="We are processing your purchase" // TODO translate
          />
        )
        : (
          <>
            <ModalTitleContainer>
              <ModalTitle>Checkout</ModalTitle>

              <Text centered>You are about to purchase <span>{nft.title}</span> from Gunstars.</Text> {/* TODO i18n */}
            </ModalTitleContainer>

            <Card style={{ flexDirection: 'row', alignItems: 'center' }} gap="medium">
              <Icon size={32} type="phantom_icon" />

              <FlexColumn>
                <Text>Solana</Text>

                <Text color="light">0xA2...3868</Text>
              </FlexColumn>
            </Card>

            <FlexColumn>
              <AttributeContainer>
                <Text>Wallet Balance</Text> {/* TODO i18n */}

                <Text color="light">3.45 SOL</Text> {/* TODO mock get wallet balance */}
              </AttributeContainer>

              <AttributeContainer>
                <Text>Service Fee %</Text> {/* TODO i18n */}

                <Text color="light">0 SOL</Text>
              </AttributeContainer>


              <AttributeContainer>
                <Text>You will pay</Text> {/* TODO i18n */}

                <Text color="light">{nft.solPrice} SOL</Text>
              </AttributeContainer>
            </FlexColumn>

            <Button onClick={handleProceedToPayment}>proceed to payment</Button> {/* TODO i18n */}
          </>
        )
      }
    </Modal>
  );
})

export default CheckoutModal;
