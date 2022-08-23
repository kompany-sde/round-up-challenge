import { converMinorUnits, currencySmybols } from '@common/helpers';
import clsx from 'clsx';
import { FC } from 'react';
import { IAccount } from '../types';

const styles = {
  selecected: 'border-indigo-500 ring-2 ring-indigo-500/50',
  unselected: 'border-gray-200',
};

interface Props {
  accounts: IAccount[];
  selectedAccountId?: string;
  onAccountSelect: (account: IAccount) => void;
}

export const AccountList: FC<Props> = ({ accounts, selectedAccountId, onAccountSelect }) => {
  return (
    <div className="flex flex-nowrap gap-6 p-2 overflow-auto brounded-lg">
      {accounts.map((account) => (
        <div
          key={account.accountUid}
          className={clsx(
            'relative w-96 flex flex-none items-center flex-col bg-white rounded-lg shadow border-2 divide-y divide-gray-200',
            account.accountUid === selectedAccountId ? styles.selecected : styles.unselected
          )}
        >
          <div className="w-full flex items-center justify-between py-5 px-3">
            <div className="flex-1 truncate">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-500 truncate">{account.accountUid}</span>
                <span className="mt-1 text-3xl tracking-tight font-semibold text-gray-900">
                  {currencySmybols[account.currency]}
                  {converMinorUnits(account.amount.minorUnits).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
          <div className="flex p-3 w-full">
            <span className="flex-shrink-0 font-mono text-lg font-semibold text-gray-500">{account.accountType}</span>
          </div>
          <div className="flex-1 min-w-0">
            <button
              type="button"
              onClick={() => onAccountSelect(account)}
              className="absolute inset-0 w-full h-full focus:outline-none"
            >
              <span className="sr-only">Account details for {account.accountUid}</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
