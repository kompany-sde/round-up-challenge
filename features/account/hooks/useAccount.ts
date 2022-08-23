import { useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { selectedCurrentAccount, setSelectedAccount as _setSelectedAccount } from '../slice';
import { IAccount } from '../types';

export const useAccount = () => {
  const selectedAccount = useAppSelector(selectedCurrentAccount);
  const dispatch = useAppDispatch();

  return useMemo(() => {
    const setSelectedAccount = (account: IAccount) => dispatch(_setSelectedAccount(account));

    return { selectedAccount, setSelectedAccount };
  }, [selectedAccount, dispatch]);
};
