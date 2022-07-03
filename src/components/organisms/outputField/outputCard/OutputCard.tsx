import { Box, Button, IconButton, Textarea, useClipboard, VStack } from '@chakra-ui/react';
import { BsTrashFill } from 'react-icons/bs';
import { FC, memo } from 'react';

type Props = {
  id: number;
  generatedText: string;
  onClick: (id: number) => void;
};

export const OutputCard: FC<Props> = memo((props) => {
  const { id, generatedText, onClick } = props;
  const { hasCopied, onCopy } = useClipboard(generatedText);

  return (
    <Box
      key={id}
      w="100%"
      h="280px"
      maxW={1200}
      bg="purple.800"
      borderRadius="10px"
      shadow="md"
      p={4}
      pos="relative"
    >
      <VStack>
        <Box w="100%" bg="gray.700" borderRadius="10px" pos="relative">
          <Textarea
            w="80%"
            fontSize={20}
            size="md"
            rows={6}
            resize="none"
            border="none"
            isReadOnly
            value={generatedText}
          />
          <Button
            size="sm"
            color="purple.900"
            bg="purple.500"
            pos="absolute"
            top="10px"
            right="10px"
            ml={2}
            onClick={onCopy}
          >
            {hasCopied ? 'Copied ✨' : 'Copy'}
          </Button>
        </Box>
        <IconButton
          colorScheme="red"
          aria-label="delete"
          size="lg"
          icon={<BsTrashFill fontSize={33} />}
          pos="absolute"
          bottom={3}
          right={6}
          onClick={() => onClick(id)}
        />
      </VStack>
    </Box>
  );
});
