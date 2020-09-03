// Dependencies
import { ReactNode } from 'react';
import { ViewStyle } from 'react-native';
import { ObjectSchema, Shape } from 'yup';

export enum CONTROL_TYPES {
  INPUT = 'input',
}

export type ControlType = CONTROL_TYPES;

export interface ICustomAttributes {
  [prop: string]: string;
}

export interface IField {
  key: string;
  placeholder: string;
  value?: string;
  disabled?: boolean;
  inputStyle?: ViewStyle;
  customAttributes?: ICustomAttributes;
  controlType: ControlType;
}

export interface IFormSchema {
  validations?: ObjectSchema<Shape<object | undefined, Record<string, string>>>;
  fields: IField[];
  onSubmit: () => void;
  initialValues?: Record<string, string | number | boolean>;
  onCancel?: () => void;
  submitLabelButton?: string;
  cancelLabelButton?: string;
  children?: ReactNode;
}
