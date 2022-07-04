import { Grid } from '@chakra-ui/react';
import { FC, useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { deleteOutputCard } from '../../../features/outputCards';
import { RootState } from '../../../main';
import { OutputCard } from './outputCard/OutputCard';

export const OutputField: FC = () => {
  const outputCardList = useSelector((state: RootState) => state.outputCards.value);
  const dispatch = useDispatch();

  const onClickDelete = useCallback((id: string) => {
    dispatch(deleteOutputCard({ id: id }));
  }, []);

  return (
    <Grid px={100} justifyItems="center" alignItems="center">
      {outputCardList.map((outputCard) => (
        <OutputCard
          key={outputCard.id}
          digits={outputCard.digits}
          text={outputCard.text}
          onClick={() => onClickDelete(outputCard.id)}
        />
      ))}
    </Grid>
  );
};
