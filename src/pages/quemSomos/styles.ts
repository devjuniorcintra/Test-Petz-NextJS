import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 34px 0 74px;
  gap: 20px;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.black};
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  width: 408px;
  text-align: left;
`;

export const SubTitle = styled.h3`
  color: ${(props) => props.theme.colors.black};
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  width: 408px;
  text-align: left;
`;

export const Description = styled.p`
  color: ${(props) => props.theme.colors.black};
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  width: 408px;
  text-align: left;
`;
