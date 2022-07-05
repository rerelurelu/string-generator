import { Link, Spacer, Text, useDisclosure, VStack } from '@chakra-ui/react';
import { FC } from 'react';
import { PrivacyPolicyModal } from '../../molecules/PrivacyPolicyModal';

export const Footer: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <VStack w="100%" pb={5} mt={100}>
        <Link textDecor="underline" onClick={onOpen}>
          Privacy Policy
        </Link>
        <Spacer />
        <Text>©2022 zoniha</Text>
      </VStack>
      <PrivacyPolicyModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};
