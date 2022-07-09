import { FC } from 'react';
import { Button } from '@chakra-ui/react';

import { CreateButtonProps } from '../../../types/createButtonProps';

export const CreateButton: FC<CreateButtonProps> = (props) => {
  const { children, onClick } = props;

  return (
    <Button w={200} bg="purple.600" color="purple.50" _hover={{ opacity: 0.8 }} onClick={onClick}>
      {children}
    </Button>
  );
};
