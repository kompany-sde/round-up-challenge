import { selectCurrentUser } from '@features/auth';
import { useMemo } from 'react';
import { useAppSelector } from '../../../hooks/redux';

export const useAuth = () => {
  const user = useAppSelector(selectCurrentUser);
  return useMemo(() => ({ user }), [user]);
};
