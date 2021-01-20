import React from 'react';

import useDebounce from '../../hooks/useDebounce';
import { getSuggestions } from '../../utils/suggestions';
import Dropdown from '../Dropdown';
import SelectItem from '../SelectItem';
import * as Styled from './Select.style';

export type Props = {
  values: string[];
  keywords: string[];
  onChangeValues: (values: string[]) => void;
  onChangeInput: (value: string) => void;
};

const Select: React.FC<Props> = (props: Props) => {
  const { values, keywords, onChangeValues = () => {}, onChangeInput = () => {} } = props;

  const [textInput, setTextInput] = React.useState<string>('');
  const inputRef = React.useRef(null);

  // debounce text input with 100ms timeout
  const debouncedInput = useDebounce(textInput, 100);

  React.useEffect(() => {
    if (debouncedInput) onChangeInput(debouncedInput);
  }, [debouncedInput, onChangeInput]);

  const suggestions = React.useMemo(() => {
    return getSuggestions({ keywords, values, search: debouncedInput });
  }, [values, keywords, debouncedInput]);

  const handleRemove = React.useCallback(
    (value: string, index: number) => {
      if (values.length > 0) {
        values.splice(index, 1);
        onChangeValues([...values]);
      }
    },
    [values, onChangeValues],
  );

  const handleRemoveLastOne = React.useCallback(() => {
    if (values.length > 0) {
      values.pop();
      onChangeValues([...values]);
    }
  }, [values, onChangeValues]);

  const handleAddNewOne = React.useCallback(
    (value: string) => {
      if (value) {
        const newValues = [...values, value];

        onChangeValues(newValues);
        setTextInput('');
      }
    },
    [values, onChangeValues],
  );

  const handleAddValue = React.useCallback(() => {
    if (suggestions.length > 0) {
      handleAddNewOne(suggestions[0]);
    } else if (debouncedInput) {
      handleAddNewOne(debouncedInput);
    }
  }, [debouncedInput, suggestions, handleAddNewOne]);

  // listen keypress events
  const handleInputKeyPress = React.useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        handleAddValue();
      } else if (event.key === 'Escape') {
        setTextInput('');
      } else if (event.key === 'Backspace') {
        if (textInput.length === 0) handleRemoveLastOne();
      }
    },
    [textInput, handleRemoveLastOne, handleAddValue],
  );

  const handleChangeInput = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setTextInput(event.target.value);
  }, []);

  const renderValues = React.useMemo(() => {
    return values.map((value, index) => (
      <SelectItem key={index} value={value} onRemove={() => handleRemove(value, index)} />
    ));
  }, [values, handleRemove]);

  const renderDropdown = React.useMemo(() => {
    if (suggestions.length === 0) return null;

    return <Dropdown options={suggestions} onClick={(value: string) => handleAddNewOne(value)} />;
  }, [suggestions, handleAddNewOne]);

  return (
    <Styled.SelectWrapper>
      <Styled.SelectContent>
        {renderValues}
        <Styled.TextInput
          ref={inputRef}
          value={textInput}
          onChange={handleChangeInput}
          onKeyDown={handleInputKeyPress}
        />
      </Styled.SelectContent>
      {renderDropdown}
    </Styled.SelectWrapper>
  );
};

export default Select;
