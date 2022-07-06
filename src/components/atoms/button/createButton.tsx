import { FC, ReactNode } from 'react';
import { Button } from '@chakra-ui/react';

type Props = {
  children: ReactNode;
  onClick: () => void;
};

export const CreateButton: FC<Props> = (props) => {
  const { children, onClick } = props;

  return (
    <Button w={200} bg="purple.600" color="purple.50" _hover={{ opacity: 0.8 }} onClick={onClick}>
      {children}
    </Button>
  );
};
