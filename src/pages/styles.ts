import { StaticImageData } from "next/image";
import styled from "styled-components";

export const Container = styled("div")<{ image: StaticImageData }>`
  background-image: url(${(props) => props.image.src});
  height: calc(100vh - 176px);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  line-height: 38px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  width: 509px;
`;
