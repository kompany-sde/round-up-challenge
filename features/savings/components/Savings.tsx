import { Container } from '@components/Containers';
import { Button } from '@components/Elements';
import { useAccount } from '@features/account/hooks/useAccount';
import { useCreateGoalMutation, useGetSavingsQuery } from '../api';
import { useSavings } from '../hooks/useSavings';
import { SavingsList } from './SavingsList';

export const Savings = () => {
  const { selectedAccount } = useAccount();
  const { data, isLoading, isUninitialized } = useGetSavingsQuery(selectedAccount?.accountUid, {
    refetchOnMountOrArgChange: true,
    skip: !selectedAccount?.accountUid,
  });
  const { setSelectedSavings, selectedSavings } = useSavings();
  const [createGoal, result] = useCreateGoalMutation();

  if (isLoading) {
    return <div>Savings Loading...</div>;
  }

  return (
    <Container>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg leading-6 font-medium text-gray-900">Goals</h2>
      </div>
      {data && (
        <SavingsList
          onGoalSelect={setSelectedSavings}
          selecteddGoalUid={selectedSavings?.savingsGoalUid}
          savingsList={data}
        />
      )}
      {/* 
        Ideally, you will have the to create multiple goals but since this is a dem,o you are limited to one
        The button generates a world cup goal to achieve the outcome of the application.
        In a prod app, users be prompted to generate their specific goals etc
        This is just to demonstrate the goal creation
      */}
      {!isUninitialized && !data?.length && (
        <div className="flex items-center justify-center">
          <Button
            isLoading={result.isLoading}
            onClick={() =>
              selectedAccount &&
              createGoal({
                accountUid: selectedAccount.accountUid,
                name: 'World cup trip',
                currency: selectedAccount.currency,
                target: {
                  minorUnits: 150000,
                  currency: selectedAccount.currency,
                },
              })
            }
            variant="secondary"
          >
            Generate a goal
          </Button>
        </div>
      )}
    </Container>
  );
};
