import { Icon, Text } from "@/components/common/atoms";

import { SuccessContainer, SuccessIconContainer, SuccessTextContainer } from "./ConfirmedBadge.styles";

const ConfirmedBadge = () => {
  return (
    <SuccessContainer>
      <SuccessIconContainer>
        <Icon type="success" />
      </SuccessIconContainer>

      <SuccessTextContainer>
        <Text>Status</Text>

        <Text color="light">Confirmed</Text> {/* TODO i18n */}
      </SuccessTextContainer>
    </SuccessContainer>
  );
}

export default ConfirmedBadge;
