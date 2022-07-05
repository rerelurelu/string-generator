import { Validation } from '../types/validation';

export const ValidateInputs = (inputText: string, digits: string): Validation => {
  const regex = /[０-９0-9]/g;

  const isInputTextError: boolean = inputText === '';
  const isDigitsBlankError: boolean = digits === '';
  let isDigitsNotNumberError: boolean = false;

  if (!isDigitsBlankError) {
    isDigitsNotNumberError = !regex.test(digits);
  }

  return {
    isInputTextError: isInputTextError,
    isDigitsBlankError: isDigitsBlankError,
    isDigitsNotNumberError: isDigitsNotNumberError,
  };
};
