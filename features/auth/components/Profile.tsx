import { Container } from '@components/Containers';
import { Button, DatePicker } from '@components/Elements';
import { useAccount } from '@features/account/hooks/useAccount';
import { useFeed } from '@features/feed';
import { useSavings, useTransferToGoalMutation } from '@features/savings';
import { parseISO, format } from 'date-fns';
import { ReactFCWithChildren } from 'types/react';
import { useAuth } from '../hooks/useAuth';

export const Profile: ReactFCWithChildren = ({ children }) => {
  const { user } = useAuth();
  const { selectedAccount } = useAccount();
  const { selectedSavings } = useSavings();
  const {
    feedState: { minDate, maxDate, roundUp },
    setFeedDateRange,
  } = useFeed();
  const [transferToGoal, { isLoading }] = useTransferToGoalMutation();

  return (
    <div className="bg-white shadow">
      <Container>
        <div className="py-6 lg:flex lg:items-center lg:justify-between lg:border-t lg:border-gray-200">
          <div className="flex-1 min-w-0">
            <div className="flex items-center">
              <div className="hidden h-16 w-16 rounded-full sm:block" />
              <div>
                <div className="flex items-center">
                  <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                    Welcome Back, {`${user?.firstName} ${user?.lastName}`}
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex space-y-2 sm:space-y-0 flex-col sm:flex-row sm:space-x-3 md:mt-0 md:ml-4">
            <DatePicker
              value={minDate ? minDate : undefined}
              startDate={minDate ? parseISO(minDate) : null}
              endDate={maxDate ? parseISO(maxDate) : null}
              maxDate={new Date()}
              onChange={(value) => value && setFeedDateRange(value)}
            />
            {maxDate && (
              <>
                <span className="flex items-center justify-center">to</span>
                <Button disabled variant="secondary">
                  {format(new Date(maxDate), 'do MMMM yyyy')}
                </Button>
              </>
            )}
            <Button
              isLoading={isLoading}
              onClick={() =>
                selectedSavings &&
                selectedAccount &&
                transferToGoal({
                  savingsGoalUid: selectedSavings.savingsGoalUid,
                  accountUid: selectedAccount.accountUid,
                  amount: {
                    currency: selectedSavings.target.currency,
                    minorUnits: Math.ceil(roundUp * 100),
                  },
                })
              }
              disabled={!roundUp || !selectedSavings}
              ring
            >
              {roundUp && selectedSavings
                ? `Round up ${selectedAccount?.currency} ${roundUp.toFixed(2)}`
                : !selectedSavings
                ? 'Select a goal'
                : 'Nothing to round up'}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
