import { converMinorUnits, currencySmybols } from '@common/helpers';
import clsx from 'clsx';
import { FC } from 'react';
import { ISavingsGoal } from '../types';

const styles = {
  selecected: 'border-indigo-500 ring-2 ring-indigo-500/50',
  unselected: 'border-gray-200',
};

interface Props {
  savingsList: ISavingsGoal[];
  selecteddGoalUid?: string;
  onGoalSelect: (goal: ISavingsGoal) => void;
}

export const SavingsList: FC<Props> = ({ savingsList, selecteddGoalUid, onGoalSelect }) => {
  return (
    <div className="flex flex-nowrap gap-6 p-2 overflow-auto brounded-lg">
      {savingsList.map((goal) => (
        <div
          key={goal.savingsGoalUid}
          className={clsx(
            'relative w-96 flex flex-none items-center flex-col bg-white rounded-lg shadow border-2 divide-y divide-gray-200',
            goal.savingsGoalUid === selecteddGoalUid ? styles.selecected : styles.unselected
          )}
        >
          <div className="w-full flex items-center justify-between py-5 px-3">
            <div className="flex-1 truncate">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-500 truncate">{goal.savingsGoalUid}</span>
                <div className="space-x-2">
                  <span className="mt-1 text-3xl tracking-tight font-semibold text-gray-900">
                    {currencySmybols[goal.totalSaved.currency]}
                    {converMinorUnits(goal.totalSaved.minorUnits).toFixed(2)}
                  </span>
                  <span>/</span>
                  <span className="text-lg font-medium text-gray-500">
                    {currencySmybols[goal.target.currency]}
                    {converMinorUnits(goal.target.minorUnits).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex p-3 w-full">
            <span className="flex-shrink-0 font-mono text-lg font-semibold text-gray-500">{goal.name}</span>
          </div>
          <div className="flex-1 min-w-0">
            <button
              type="button"
              onClick={() => onGoalSelect(goal)}
              className="absolute inset-0 w-full h-full focus:outline-none"
            >
              <span className="sr-only">Goal details for {goal.savingsGoalUid}</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
