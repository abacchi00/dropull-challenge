import { Button, Loader, Text } from "@/components/common/atoms";

import { UpperContainer } from "./ModalLoading.styles";

interface Props {
  loadingMessage: string;
  loadingTitle?: string;
  onClickToCancel: () => void;
}

const ModalLoading = ({ onClickToCancel, loadingMessage, loadingTitle }: Props) => {
  return (
    <>
      <UpperContainer>
        <Loader />

        <h4>{loadingTitle || 'Loading'}</h4> {/* TODO translate */}

        <Text>{loadingMessage}</Text>
      </UpperContainer>

      <Button btnType="tertiary" onClick={onClickToCancel}>cancel</Button> {/* TODO translate */}
    </>
  );
};

export default ModalLoading;
