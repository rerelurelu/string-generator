export const generateText = (inputText: string, digits: string) => {
  let text: string = '';

  if (inputText.length >= Number(digits)) {
    text = inputText.slice(0, Number(digits));
  } else {
    text = inputText.padEnd(Number(digits), inputText);
  }

  return text;
};
