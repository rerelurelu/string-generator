import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';

import { Description } from '../../types/Description';
import { ModalProps } from '../../types/modalProps';

export const PrivacyPolicyModal = (props: ModalProps) => {
  const desc: Description = {
    title: 'プライバシーポリシー',
    subTitle: '免責事項',
    para1: `当サイトは、掲載内容によって生じた損害に対する一切の責任を負いません。`,
    para2: `各コンテンツでは、できる限り正確な情報提供を心がけておりますが、正確性や安全性を保証するものではありません。`,
  };

  const { isOpen, onClose } = props;

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent bg="gray.900">
        <ModalHeader>{desc.title}</ModalHeader>
        <ModalBody>
          <Text fontSize={20} fontWeight="bold">
            {desc.subTitle}
          </Text>
          <Text mt={3}>{desc.para1}</Text>
          <Text mt={2}>{desc.para2}</Text>
        </ModalBody>
        <ModalFooter>
          <Button
            bg="purple.500"
            color="purple.50"
            _hover={{ opacity: 0.8 }}
            autoFocus={false}
            onClick={onClose}
          >
            閉じる
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
