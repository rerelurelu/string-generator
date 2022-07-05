import { Flex, Spacer } from '@chakra-ui/react';
import { FC } from 'react';

import { InputField } from './components/organisms/inputField/InputField';
import { Footer } from './components/organisms/layout/Footer';
import { Header } from './components/organisms/layout/Header';
import { OutputField } from './components/organisms/outputField/OutputFiled';

export const App: FC = () => {
  return (
    <Flex flexDir="column" minH="100vh">
      <Header />
      <InputField />
      <OutputField />
      <Spacer />
      <Footer />
    </Flex>
  );
};
