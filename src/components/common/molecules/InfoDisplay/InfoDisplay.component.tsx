import { Icon, IconProps } from "@/components/common/atoms";

import { DisplayContainer, InfoTitle, InfoValue } from "./InfoDisplay.styles";

export type InfoDisplayType = 'inline' | 'two-line' | 'two-line-augmented';

interface Props {
  type: InfoDisplayType;
  title: string;
  value: string;
  icon?: IconProps
}

const InfoDisplay = ({ type, title, value, icon: iconProps }: Props) => {
  return (
    <DisplayContainer type={type} hasIcon={!!iconProps}>
      {type === 'inline' && iconProps && <Icon {...iconProps} style={{ gridArea: 'icon' }} />} {/* refactor */}

      <InfoTitle>{title}</InfoTitle>

      <InfoValue>{value}</InfoValue>

      {!(type === 'inline') && iconProps && <Icon {...iconProps} style={{ gridArea: 'icon' }} />} {/* refactor */}
    </DisplayContainer>
  );
}

export default InfoDisplay;
