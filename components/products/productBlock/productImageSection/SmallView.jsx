import styled from "styled-components";
import Image from "next/image";

const SmallViewStyle = styled.div`
  margin: 0.5rem;
  display: flex;
  gap: 0.6rem;
`;

const SingleImage = styled.div`
  background-color: ${({ bg, theme }) =>
    theme?.color[bg] ?? theme?.color?.secondary};
  border-radius: 3px;
  cursor: pointer;
  transition: 1s;

  &:hover {
    transform: scale(0.9);
  }
`;

const SmallView = () => {
  return (
    <SmallViewStyle>
      <SingleImage bg="primary">
        <Image src="/demo.png" alt="watch" width="160" height="160" />
      </SingleImage>
      <SingleImage>
        <Image src="/demo.png" alt="watch" width="160" height="160" />
      </SingleImage>
      <SingleImage>
        <Image src="/demo.png" alt="watch" width="160" height="160" />
      </SingleImage>
    </SmallViewStyle>
  );
};

export default SmallView;
