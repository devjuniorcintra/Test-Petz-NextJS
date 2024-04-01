import styled from "styled-components";

export const Container = styled("div")<{ display: boolean }>`
  background-color: #e40f0f;
  height: 187px;
  padding: 22px 83px;
  display: ${({ display }) => (display ? "flex" : "none")};
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

export const BreadCrumb = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

export const Item = styled("span")<{ display?: boolean }>`
  color: ${(props) => (props.display ? "#EEEEEE" : "#fff")};
  font-weight: 600;
  font-size: 12;
  line-height: 14px;
  cursor: pointer;
`;

export const TitlePage = styled.h1`
  color: #fff;
  font-weight: 700;
  font-size: 32;
  line-height: 38px;
`;

export const Description = styled.p`
  color: #fff;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
`;
