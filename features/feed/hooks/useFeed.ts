import { useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { feedStateSelector, setFeedDateRange as _setFeedDateRange } from '../slice';
import { SetFeedDateRange } from '../types';
import { endOfWeek, startOfWeek } from 'date-fns';

export const useFeed = () => {
  const feedState = useAppSelector(feedStateSelector);
  const dispatch = useAppDispatch();

  return useMemo(() => {
    const setFeedDateRange = (date: Date) => {
      const min = startOfWeek(date);
      const max = endOfWeek(min);
      dispatch(_setFeedDateRange({ minDate: min.toISOString(), maxDate: max.toISOString() }));
    };

    return { feedState, setFeedDateRange };
  }, [feedState, dispatch]);
};
