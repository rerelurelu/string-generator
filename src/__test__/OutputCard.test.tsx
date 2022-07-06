import { generateText } from '../utils/GenerateText';
import { TestData } from './TestData';

describe('Test generate text function', () => {
  const testData = TestData;

  test('digits is less than characters', () => {
    expect(generateText(testData.data1.inputText, testData.data1.inputDigits)).toEqual({
      text: testData.data1.generatedText,
      digits: testData.data1.outputDigits,
    });
  });

  test('digits is more than characters', () => {
    expect(generateText(testData.data2.inputText, testData.data2.inputDigits)).toEqual({
      text: testData.data2.generatedText,
      digits: testData.data2.outputDigits,
    });
  });

  test('digits equals characters', () => {
    expect(generateText(testData.data3.inputText, testData.data3.inputDigits)).toEqual({
      text: testData.data3.generatedText,
      digits: testData.data3.outputDigits,
    });
  });

  test('convert zenkaku to hankaku', () => {
    expect(generateText(testData.data4.inputText, testData.data4.inputDigits)).toEqual({
      text: testData.data4.generatedText,
      digits: testData.data4.outputDigits,
    });
  });

  test('generate text containing zenkaku', () => {
    expect(generateText(testData.data5.inputText, testData.data5.inputDigits)).toEqual({
      text: testData.data5.generatedText,
      digits: testData.data5.outputDigits,
    });
  });

  test('generate text containing hankaku', () => {
    expect(generateText(testData.data6.inputText, testData.data6.inputDigits)).toEqual({
      text: testData.data6.generatedText,
      digits: testData.data6.outputDigits,
    });
  });

  test('generate text containing zenkaku and hankaku', () => {
    expect(generateText(testData.data7.inputText, testData.data7.inputDigits)).toEqual({
      text: testData.data7.generatedText,
      digits: testData.data7.outputDigits,
    });
  });

  test('generate text containing kanji', () => {
    expect(generateText(testData.data8.inputText, testData.data8.inputDigits)).toEqual({
      text: testData.data8.generatedText,
      digits: testData.data8.outputDigits,
    });
  });

  test('generate text containing spaces', () => {
    expect(generateText(testData.data4.inputText, testData.data4.inputDigits)).toEqual({
      text: testData.data4.generatedText,
      digits: testData.data4.outputDigits,
    });
  });
});
