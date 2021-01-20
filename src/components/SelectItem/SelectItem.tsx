import React from 'react';

import * as Styled from './SelectItem.style';

export type Props = {
  value: string;
  onRemove: () => void;
};

const SelectItem: React.FC<Props> = (props: Props) => {
  const { value, onRemove = () => {} } = props;

  return (
    <Styled.ItemWrapper>
      <span>{value}</span>
      <Styled.RemoveBtn onClick={onRemove}>x</Styled.RemoveBtn>
    </Styled.ItemWrapper>
  );
};

export default SelectItem;
