import { Result } from '../types/result';

export const generateText = (inputText: string, digits: string): Result => {
  let text: string = '';
  const regex = /[０-９]/g;

  if (regex.test(digits)) {
    digits = hankakuToZenkaku(digits);
  }

  if (inputText.length >= Number(digits)) {
    text = inputText.slice(0, Number(digits));
  } else {
    text = inputText.padEnd(Number(digits), inputText);
  }

  return { text: text, digits: digits };
};

const hankakuToZenkaku = (str: string): string => {
  return str.replace(/[０-９]/g, (s) => {
    return String.fromCharCode(s.charCodeAt(0) - 0xfee0);
  });
};
