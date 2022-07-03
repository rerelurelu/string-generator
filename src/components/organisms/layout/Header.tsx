import { Flex, Heading } from '@chakra-ui/react';
import { FC, memo } from 'react';

const TITLE: string = '文字列ジェネレーター';

export const Header: FC = memo(() => {
  return (
    <>
      <Flex
        as="nav"
        w="100%"
        bg="gray.800"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
        boxShadow="md"
      >
        <Flex align="center" as="a" mr={8} _hover={{ cursor: 'default' }}>
          <Heading as="h1" fontSize={{ base: 'md', md: 'lg' }}>
            {TITLE}
          </Heading>
        </Flex>
      </Flex>
    </>
  );
});
