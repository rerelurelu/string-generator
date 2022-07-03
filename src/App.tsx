import { FC } from 'react';

import { InputField } from './components/organisms/inputField/InputField';
import { Header } from './components/organisms/layout/Header';

export const App: FC = () => {
  return (
    <>
      <Header />
      <InputField />
    </>
  );
};
