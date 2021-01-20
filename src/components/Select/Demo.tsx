import React from 'react';

import { mockKeywords } from './mock';
import Select from './Select';

export default () => {
  const [values, setValues] = React.useState<string[]>([]);

  console.log('values', values);

  return <Select values={values} onChangeValues={setValues} keywords={mockKeywords} />;
};
