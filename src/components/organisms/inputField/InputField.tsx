import {
  Box,
  Grid,
  HStack,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Divider,
} from '@chakra-ui/react';

import { CreateButton } from '../../atoms/button/createButton';

export const InputField = () => {
  const onClickCreate = () => {};

  return (
    <Grid justifyItems="center" alignItems="center">
      <Box w="100%" maxW={1200} px={200} mt={100}>
        <HStack spacing={5}>
          <Input
            type="text"
            size="md"
            placeholder="繰り返したい文字"
            focusBorderColor="yellow.300"
          />
          <NumberInput size="md" min={0} focusBorderColor="yellow.300">
            <NumberInputField placeholder="桁数" />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Box w={20} />
          <CreateButton onClick={onClickCreate}>生成</CreateButton>
        </HStack>
      </Box>
      <Divider w="90%" mt={16} />
    </Grid>
  );
};
