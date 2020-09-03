// Dependencies
import React, { ReactElement } from 'react';
import { Input } from 'react-native-elements';

// Models
import { IInputFormProps } from './input-interface';

const InputText = ({ placeholder, onChangeText, onBlur, value, customAttributes, errorMessage }: IInputFormProps): ReactElement => {
  return (
    <Input
      inputContainerStyle={[errorMessage && { borderColor: 'red' }]}
      placeholder={placeholder}
      onChangeText={onChangeText}
      onBlur={onBlur}
      value={value}
      errorMessage={errorMessage}
      {...customAttributes}
    />
  );
};

export const InputForm = React.memo(InputText);
