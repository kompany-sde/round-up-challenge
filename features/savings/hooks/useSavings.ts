import { useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { selectedCurrentSavings, setSelectedSavings as _setSelectedSavings } from '../slice';
import { ISavingsGoal } from '../types';

export const useSavings = () => {
  const selectedSavings = useAppSelector(selectedCurrentSavings);
  const dispatch = useAppDispatch();

  return useMemo(() => {
    const setSelectedSavings = (goal: ISavingsGoal) => dispatch(_setSelectedSavings(goal));

    return { selectedSavings, setSelectedSavings };
  }, [selectedSavings, dispatch]);
};
