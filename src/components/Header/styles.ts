import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  height: 104px;
  padding: 22px 83px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Divright = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const WhoWeAre = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-weight: 400;
  font-size: 14px;
`;

export const BTNSchedule = styled.button`
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  padding: 12px 24px;
  border-radius: 30px;
`;
