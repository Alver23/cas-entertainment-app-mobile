// Dependencies
import { string, object } from 'yup';

export const formValidations = object().shape({
  email: string().email().required(),
  password: string().required(),
});
