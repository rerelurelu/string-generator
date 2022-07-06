import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: 'gray.900',
        color: 'purple.300',
      },
    },
  },
});

export default theme;
