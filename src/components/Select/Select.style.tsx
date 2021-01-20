import styled from 'styled-components/macro';

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SelectContent = styled.div`
  display: flex;
  min-width: 100px;
  min-height: 30px;

  padding: 4px;
  border: 1px solid black;
`;

export const TextInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
`;
