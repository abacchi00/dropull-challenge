import Image from 'next/image';
import { useEffect, useRef } from 'react';

import { Button, Card, Icon } from "@/components/common/atoms";
import { CheckoutModal, CheckoutModalRef, NFTDescriptionCard, PurchaseModal, PurchaseModalRef, NFTAttributesDisplay } from "@/components/common/organisms";

import { NFTProduct } from '@/models/nftProduct';
import { Game } from '@/models/game';

import { NFTImageAndBackBtn, NFTPageTemplateContainer, NFTPageTemplateFirstSection } from "./NFTPageTemplate.styles";

interface Props {
  nft: NFTProduct;
  game: Game;
  step?: string;
  onGoBack: () => void;
  onClickBuyNow: () => void;
  onCheckoutCancel: () => void;
  onCheckoutProceedToPayment: () => void;
  onPurchaseCancel: () => void;
  onPurchaseContinue: () => void;
  onPurchaseViewNFT: () => void;
}

const NFTPageTemplate = (
  {
    nft,
    game,
    step,
    onCheckoutCancel,
    onCheckoutProceedToPayment,
    onClickBuyNow,
    onGoBack,
    onPurchaseCancel,
    onPurchaseContinue,
    onPurchaseViewNFT,
  }: Props,
) => {

  const checkoutModalRef = useRef<CheckoutModalRef>();
  const purchaseModalRef = useRef<PurchaseModalRef>();

  useEffect(() => {
    if (step === 'checkout') checkoutModalRef.current?.open();
    if (step === 'purchase') purchaseModalRef.current?.open();
  }, [step]);

  return (
    <>
      <NFTPageTemplateContainer>
        <NFTPageTemplateFirstSection>
          <NFTImageAndBackBtn>
            <Button btnType="tertiary" style={{ height: 'fit-content', gridArea: 'goback' }} onClick={onGoBack}>
              <Icon type="arrow"/>
            </Button>

            <Card maxWidth="30rem" maxHeight="30rem" style={{ gridArea: 'image' }}>
              <Image src={nft.img} width={480} height={480}/>
            </Card>
          </NFTImageAndBackBtn>

          <NFTAttributesDisplay nft={nft} />
        </NFTPageTemplateFirstSection>

        <NFTDescriptionCard nft={nft} game={game} onBuyNow={onClickBuyNow} />
      </NFTPageTemplateContainer>

      <CheckoutModal
        ref={checkoutModalRef}
        nft={nft}
        onCancel={onCheckoutCancel}
        onProceedToPayment={onCheckoutProceedToPayment}
      />

      <PurchaseModal
        ref={purchaseModalRef}
        nft={nft}
        onCancel={onPurchaseCancel}
        onContinue={onPurchaseContinue}
        onViewNFT={onPurchaseViewNFT}
      />
    </>
  )
}

export default NFTPageTemplate;
