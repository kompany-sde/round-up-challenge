import { FC } from 'react';
import { IAccount } from '../types';

export const AccountList: FC<{ accounts: IAccount[] }> = ({ accounts }) => {
  return (
    <div className="flex flex-nowrap gap-6 p-2 overflow-auto brounded-lg">
      {accounts.map((account) => (
        <div
          key={account.accountUid}
          className="relative w-96 flex flex-none items-center flex-col rounded-lg shadow border-2 border-gray-200  divide-y divide-gray-200 focus-within:ring-2 focus-within:ring-indigo-500/50 focus-within:border-indigo-500"
        >
          <div className="w-full flex items-center justify-between py-5 px-3">
            <div className="flex-1 truncate">
              <div className="flex items-center">
                <h3 className="text-gray-900 text-sm font-medium truncate">Savings</h3>
                <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                  {account.defaultCategory}
                </span>
              </div>
              <p className="mt-1 text-gray-500 text-sm truncate">s-dsd-o</p>
            </div>
          </div>
          <div className="flex p-3 w-full">
            <span className="flex-shrink-0 font-mono text-lg font-semibold text-gray-500">{account.accountType}</span>
          </div>
          <div className="flex-1 min-w-0">
            <button type="button" className="absolute inset-0 focus:outline-none">
              <span className="sr-only">Account details for {account.accountUid}</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
