export const TestData = {
  // 入力文字数より桁数が少ない場合
  data1: {
    inputDigits: '3',
    outputDigits: '3',
    inputText: 'name',
    generatedText: 'nam',
  },
  // 入力文字数より桁数が多い場合
  data2: {
    inputDigits: '10',
    outputDigits: '10',
    inputText: 'name',
    generatedText: 'namenamena',
  },
  // 入力文字数と桁数が等しい場合
  data3: {
    inputDigits: '7',
    outputDigits: '7',
    inputText: 'address',
    generatedText: 'address',
  },
  // 入力桁数が全角数字の場合
  data4: {
    inputDigits: '１０',
    outputDigits: '10',
    inputText: '123-4567',
    generatedText: '123-456712',
  },
  // 入力文字が全角文字の場合
  data5: {
    inputDigits: '10',
    outputDigits: '10',
    inputText: 'Ａ１％',
    generatedText: 'Ａ１％Ａ１％Ａ１％Ａ',
  },
  // 入力文字が半角文字の場合
  data6: {
    inputDigits: '10',
    outputDigits: '10',
    inputText: 'Aa1%',
    generatedText: 'Aa1%Aa1%Aa',
  },
  // 入力文字に全角文字と半角文字が混ざっている場合
  data7: {
    inputDigits: '10',
    outputDigits: '10',
    inputText: 'ＡB１2％%',
    generatedText: 'ＡB１2％%ＡB１2',
  },
  // 入力文字に漢字が含まれる場合
  data8: {
    inputDigits: '10',
    outputDigits: '10',
    inputText: '東京都港区',
    generatedText: '東京都港区東京都港区',
  },
  // 入力文字にスペースが含まれる場合
  data9: {
    inputDigits: '20',
    outputDigits: '20',
    inputText: '東京都港区赤坂 赤坂マンション　101',
    generatedText: '東京都港区赤坂 赤坂マンション　101東',
  },
};
