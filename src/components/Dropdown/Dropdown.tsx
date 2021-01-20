import React from 'react';

import * as Styled from './Dropdown.style';

export type Props = {
  options: string[];
  onClick: (value: string, index: number) => void;
};

const Dropdown: React.FC<Props> = (props: Props) => {
  const { options = [], onClick = () => {} } = props;

  const handleClickOption = React.useCallback(
    (value: string, index: number) => {
      onClick(value, index);
    },
    [onClick],
  );

  const renderOptions = React.useMemo(() => {
    if (options.length === 0) return <Styled.Option>No Data</Styled.Option>;

    return options.map((option: string, index: number) => {
      return (
        <Styled.Option key={index} onClick={() => handleClickOption(option, index)}>
          {option}
        </Styled.Option>
      );
    });
  }, [options, handleClickOption]);

  return <Styled.DropdownWrapper>{renderOptions}</Styled.DropdownWrapper>;
};

export default Dropdown;
