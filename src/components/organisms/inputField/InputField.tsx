import { Box, Grid, HStack, Input, Divider } from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';

import { addOutputCard } from '../../../features/outputCards';
import { generateText } from '../../../utils/GenerateText';
import { CreateButton } from '../../atoms/button/createButton';

export const InputField = () => {
  const [inputText, setInputText] = useState<string>('');
  const [digits, setDigits] = useState<string>('');
  const dispatch = useDispatch();

  const onClickCreate = (inputText: string, digits: string) => {
    const text: string = generateText(inputText, digits);

    dispatch(
      addOutputCard({
        id: uuid(),
        digits: digits,
        text: text,
      })
    );
    setInputText('');
    setDigits('');
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
      <Divider w="90%" mt={16} />
    </Grid>
  );
};
