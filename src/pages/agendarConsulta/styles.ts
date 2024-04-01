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
  margin: 32px 0;
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

export const PokemonLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 38px;
`;

export const NewPokemonButton = styled.button`
  width: 253px;
  height: 42px;
  border-radius: 30px;
  border: 1px solid #1d1d1d;
  padding: 13px 14px;
  background-color: transparent;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #d5d5d5;
  margin: 32px 0;
`;

export const LineInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LabelInfo = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #747474;
`;

export const Total = styled.span`
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #1d1d1d;
`;

export const ButtonSchedule = styled.button`
  width: 183px;
  height: 42px;
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 30px;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
`;

export const TitleModal = styled.span`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #1d1d1d;
`;

export const MessageModal = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #747474;
`;

export const ButtonModal = styled.button`
  width: 197px;
  height: 42px;
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 30px;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
`;
