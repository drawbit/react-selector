import styled from 'styled-components/macro';

export const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;

  min-width: 50px;
  padding: 4px;

  border: 1px solid black;
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 20px;

  cursor: pointer;

  &:hover {
    background: #fafafa;
  }
`;
