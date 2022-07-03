import { FC } from 'react';

import { InputField } from './components/organisms/inputField/InputField';
import { Header } from './components/organisms/layout/Header';
import { OutputField } from './components/organisms/outputField/OutputFiled';

export const App: FC = () => {
  return (
    <>
      <Header />
      <InputField />
      <OutputField />
    </>
  );
};
