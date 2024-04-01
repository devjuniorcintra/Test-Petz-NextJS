import styled, { css } from "styled-components";

export const Container = styled("button")<{ open: boolean }>`
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 19px;
  border-radius: 50px;
  padding: 12px;

  ${(props) =>
    !props.open &&
    css`
      animation: openToClose 0.5s linear;
    `};

  &:hover {
    animation: closeToOpen 0.5s linear;

    span {
      display: block;
    }
  }

  @keyframes openToClose {
    0% {
      width: 240px;
      height: 58px;
    }
    100% {
      width: 61px;
      height: 58px;
    }
  }

  @keyframes closeToOpen {
    0% {
      width: 61px;
      height: 58px;
    }
    100% {
      width: 240px;
      height: 58px;
    }
  }
`;

export const Title = styled("span")<{ open: boolean }>`
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
  display: ${(props) => (props.open ? "block" : "none")};
`;
