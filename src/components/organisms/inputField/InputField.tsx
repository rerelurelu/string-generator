import { Box, Grid, HStack, Input, Divider, Text } from '@chakra-ui/react';
import { ChangeEvent, FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';

import { addOutputCard } from '../../../features/outputCards';
import { generateText } from '../../../utils/GenerateText';
import { ValidateInputs } from '../../../utils/ValidateInputs';
import { CreateButton } from '../../atoms/button/createButton';

export const InputField: FC = () => {
  const errMsg = {
    inputTextErrMsg: '* 繰り返したい文字を入力してください',
    digitsBlankErrMsg: '* 桁数に全角数字または半角数字を入力してください',
    digitsNotNumberErrMsg: '* 桁数には全角数字または半角数字を１以上の値で入力してください',
    digitsLimitErrMsg: '* 桁数には１００００以下の値を入力してください',
  };
  const [inputText, setInputText] = useState<string>('');
  const [digits, setDigits] = useState<string>('');
  const [isInputTextErr, setIsInputTextErr] = useState<boolean>(false);
  const [isDigitsBlankErr, setIsDigitsBlankErr] = useState<boolean>(false);
  const [isDigitsNotNumberErr, setIsDigitsNotNumberErr] = useState<boolean>(false);
  const [isDigitsLimitErr, setIsDigitsLimitErr] = useState<boolean>(false);
  const [isErr, setIsErr] = useState<boolean>(false);
  const dispatch = useDispatch();

  const onClickCreate = (inputText: string, digits: string): void => {
    const { isInputTextError, isDigitsBlankError, isDigitsNotNumberError, isDigitsLimitError } =
      ValidateInputs(inputText, digits);

    if (isInputTextError || isDigitsBlankError || isDigitsNotNumberError || isDigitsLimitError) {
      setIsErr(true);
      setIsInputTextErr(isInputTextError);
      setIsDigitsBlankErr(isDigitsBlankError);
      setIsDigitsNotNumberErr(isDigitsNotNumberError);
      setIsDigitsLimitErr(isDigitsLimitError);
    } else {
      const result = generateText(inputText, digits);

      dispatch(
        addOutputCard({
          id: uuid(),
          digits: result.digits,
          text: result.text,
        })
      );

      setIsErr(false);
      setIsInputTextErr(false);
      setIsDigitsBlankErr(false);
      setIsDigitsNotNumberErr(false);
      setInputText('');
      setDigits('');
    }
  };

  return (
    <Grid justifyItems="center" alignItems="center">
      <Box w="100%" maxW={1200} px={200} mt={100}>
        <HStack spacing={5}>
          <Input
            type="text"
            size="md"
            w="full"
            borderColor="gray.600"
            borderWidth={3}
            placeholder="繰り返したい文字"
            focusBorderColor="purple.600"
            _hover={{ borderColor: 'gray.500' }}
            value={inputText}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setInputText(e.target.value)}
          />
          <Input
            type="text"
            size="md"
            w={230}
            borderColor="gray.600"
            borderWidth={3}
            placeholder="桁数"
            focusBorderColor="purple.600"
            _hover={{ borderColor: 'gray.500' }}
            value={digits}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setDigits(e.target.value)}
          />
          <Box w={20} />
          <CreateButton onClick={() => onClickCreate(inputText, digits)}>生成</CreateButton>
        </HStack>
      </Box>
      {isErr ? (
        <Box w="100%" maxW={1200} px={200} mt={5} color="red.500">
          {isInputTextErr ? <Text fontSize={16}>{errMsg.inputTextErrMsg}</Text> : null}
          {isDigitsBlankErr ? <Text fontSize={16}>{errMsg.digitsBlankErrMsg}</Text> : null}
          {isDigitsNotNumberErr ? <Text fontSize={16}>{errMsg.digitsNotNumberErrMsg}</Text> : null}
          {isDigitsLimitErr ? <Text fontSize={16}>{errMsg.digitsLimitErrMsg}</Text> : null}
        </Box>
      ) : null}
      <Divider w="90%" mt={16} />
    </Grid>
  );
};
