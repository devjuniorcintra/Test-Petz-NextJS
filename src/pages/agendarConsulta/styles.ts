import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 32px 0;
`;

export const TitleForm = styled.h1`
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: ${({ theme }) => theme.colors.black};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 550px;
`;

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  width: 100%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 265px !important;
  gap: 8px;
`;

export const Label = styled.label`
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: ${({ theme }) => theme.colors.black};
`;

export const Input = styled.input`
  width: 100%;
  border: 1px solid #d5d5d5;
  border-radius: 8px;
  height: 45px;
  padding: 0 14px;
  max-width: 265px;
`;

export const Select = styled.div`
  width: 100%;
  border: 1px solid #d5d5d5;
  border-radius: 8px;
  height: 45px;
  padding: 0 14px;
  max-width: 265px;

  select {
    width: 100%;
    display: inline-block;
    border: none;
    outline: none;
    height: 43px;
  }

  &:focus-within {
    box-shadow: none;
  }
`;

export const TitleLine = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: ${({ theme }) => theme.colors.black};
`;

export const Description = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: ${({ theme }) => theme.colors.black};
`;
