import { Grid } from '@chakra-ui/react';
import { FC } from 'react';

import { OutputCard } from './outputCard/OutputCard';

export const OutputField: FC = () => {
  const dummyData = {
    id: 1,
    digits: '5',
    text: 'sample',
  };

  const onClickDelete = (id: number) => {};

  return (
    <Grid px={100} mt={10} justifyItems="center" alignItems="center">
      <OutputCard
        id={dummyData.id}
        digits={dummyData.digits}
        text={dummyData.text}
        onClick={() => onClickDelete(dummyData.id)}
      />
    </Grid>
  );
};
