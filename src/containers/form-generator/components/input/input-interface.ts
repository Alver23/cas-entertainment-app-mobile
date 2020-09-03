// Models
import { ICustomAttributes } from '../../models/form-generator-interface';

export interface IInputFormProps {
  placeholder: string;
  onChangeText: () => void;
  onBlur: () => void;
  value: string;
  customAttributes?: ICustomAttributes;
  errorMessage?: string;
}
