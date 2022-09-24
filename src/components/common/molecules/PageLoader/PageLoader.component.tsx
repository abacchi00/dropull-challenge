import { Loader } from "@/components/common/atoms";

import { LoadingContainer } from "./PageLoader.styles";

interface Props {
  loadingMessage: string;
}

const PageLoader = ({ loadingMessage }: Props) => {
  return (
    <LoadingContainer>
      <Loader />

      {loadingMessage}
    </LoadingContainer>
  );
}

export default PageLoader;
